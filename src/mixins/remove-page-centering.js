/**
 * By default, every page on the website is fully centered. But this may not be good
 * for components that have more content and need to display everything, so in these cases
 * please make use of this mixin.
 */
export default {
  beforeCreate() {
    document.body.style.height = 'unset';
  },
  unmounted() {
    document.body.style.height = '90vh';
  },
}