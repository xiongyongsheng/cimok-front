import path, { join } from 'node:path'
import dotenv from 'dotenv'
import fs  from 'fs'

export function isDevFn(mode: string): boolean {
  return mode === 'development'
}

export function isProdFn(mode: string): boolean {
  return mode === 'production'
}

/**
 * Whether to generate package preview
 */
export function isReportMode(): boolean {
  return process.env.REPORT === 'true'
}

// Read all environment variable configuration files to process.env
export function wrapperEnv(envConf: Recordable): ViteEnv {
  const ret: any = {}

  for (const envName of Object.keys(envConf)) {
    let realName = envConf[envName].replace(/\\n/g, '\n')
    realName = realName === 'true' ? true : realName === 'false' ? false : realName

    if (envName === 'VITE_PORT')
      realName = Number(realName)

    if (envName === 'VITE_PROXY' && realName) {
      try {
        realName = JSON.parse(realName.replace(/'/g, '"'))
      }
      catch (error) {
        realName = ''
      }
    }
    ret[envName] = realName
    // if (typeof realName === 'string') {
    //   process.env[envName] = realName;
    // } else if (typeof realName === 'object') {
    //   process.env[envName] = JSON.stringify(realName);
    // }
  }
  return ret
}

/**
 * 获取当前环境下生效的配置文件名
 */
function getConfFiles() {
  const script = process.env.npm_lifecycle_script as string
  const reg = /--mode ([a-z_\d]+)/
  const result = reg.exec(script)
  if (result) {
    const mode = result[1]
    return ['.env', `.env.${mode}`]
  }
  return ['.env', '.env.production']
}

/**
 * Get the environment variables starting with the specified prefix
 * @param match prefix
 * @param confFiles ext
 */
export function getEnvConfig(match = 'VITE_GLOB_', confFiles = getConfFiles()) {
  let envConfig = {};

  for (const confFile of confFiles) {
    try {
      const envPath = fs.readFileSync(join(process.cwd(), confFile), { encoding: 'utf8' });
      const env = dotenv.parse(envPath); // 解析环境变量
      envConfig = { ...envConfig, ...env }; // 合并对象
    } catch (e) {
      console.error(`Error in parsing ${confFile}`, e);
    }
  }

  // 过滤以指定前缀开头的环境变量
  const reg = new RegExp(`^(${match})`);
  Object.keys(envConfig).forEach((key) => {
    if (!reg.test(key)) {
      Reflect.deleteProperty(envConfig, key);
    }
  });

  console.log(envConfig); // 输出配置
  return envConfig; // 返回最终配置
}

/**
 * Get user root directory
 * @param dir file path
 */
export function getRootPath(...dir: string[]) {
  return path.resolve(process.cwd(), ...dir)
}