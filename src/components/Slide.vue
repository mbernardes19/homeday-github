<script>
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
</script>