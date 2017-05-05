export default {
  update(el, binding, vnode) {
    const vm = vnode.context;
    if (!vm.i18n) { return binding.value; }

    const text = vm.$t ? vm.$t(binding.value) : binding.value;
    this.el.innerHTML += text.toLowerCase();
  }
};
