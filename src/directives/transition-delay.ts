export default {
  install(app) {
    const transitionDelay = {
      valueOf() {
        this.timer && clearTimeout(this.timer);
        // @ts-ignore
        this.timer = setTimeout(() => {
          this.count = 0;
        }, 300);
        return this.count++;
      },
      timer: null,
      count: 0,
    };
    app.directive('c-transition-delay', {
      created(el, binding) {
        // @ts-ignore
        el.style.transitionDelay = `${transitionDelay / (binding.value ?? 30)}s`;
        el.addEventListener('transitionend', () => {
          el.style.transitionDelay = `none`;
        });
      },
    });
  },
};
