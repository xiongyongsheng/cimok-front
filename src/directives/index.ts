/**
 * Configure and register global directives
 */
import type { App } from 'vue';
import { setupPermissionDirective } from './permission';
import { setupLoadingDirective } from './loading';
import TransitionDelay from './transition-delay';

export function setupGlobDirectives(app: App<Element>) {
  setupPermissionDirective(app);
  setupLoadingDirective(app);
  app.use(TransitionDelay);
}
