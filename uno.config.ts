import { defineConfig, presetTypography, presetUno } from 'unocss';

export default defineConfig({
  presets: [presetUno(), presetTypography()],
  rules: [
    [
      'sider-active-color',
      {
        color: 'rgb(135, 247, 199)',
      },
    ],
    [
      'board-text-color',
      {
        color: '#0CF4D1',
      },
    ],
    [
      'device-monitor-bg-color',
      {
        'background-color': 'rgba(1, 84, 120, 0.5803921568627451)',
      },
    ],
    [
      'divider-color',
      {
        'border-color': '#30596f',
      },
    ],
    [
      'radial-bg-img',
      {
        'background-size': '4px 4px',
        'background-image': 'radial-gradient(transparent 1px, #080a1a50 1px)',
      },
    ],
  ],
  shortcuts: {
    'c-card-group-detail-card':
      'bg-card-detail-bg overflow-hidden shadow-card-detail-border border-card-detail-border border-solid border-1 rounded-2  hover:shadow-cyan hover:shadow-lg transition-all duration-300',
    'c-card-group-detail-card-title': 'text-center font-size-5 m-0 py-1',
  },
  theme: {
    colors: {
      primary: '#0960bd',
      siderActive: 'rgb(135, 247, 199)',
      card: {
        normal: {
          outer: '#4b7903',
          inner: '#273c6f',
        },
        warning: {
          outer: 'rgba(245, 154, 35, 1)',
          inner: '#5b4675',
        },
        detail: {
          border: '#1c649e',
          bg: '#061937',
          tbg: '#0c5c8f',
        },
      },
    },
  },
});
