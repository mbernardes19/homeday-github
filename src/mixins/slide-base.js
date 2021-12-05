/**
 * This mixin adds basic slide functionality to a component.
 * Use it when you want to create a new slide inside the Slider component.
 * It makes it possible to navigate from one slide to another.
 */
export default {
  emits: ['next-slide', 'previous-slide'],
  methods: {
    next() {
      this.$emit('next-slide');
    },
    previous() {
      this.$emit('previous-slide');
    }
  }
}