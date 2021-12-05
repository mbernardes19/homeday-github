<template>
  <main class="main-content">
    <slider :slides="slides"></slider>
  </main>
</template>

<script>
import Slider from '@/components/Slider';
import slides from '../slides'

export default {
  name: 'Home',
  components: {
    Slider
  },
  data() {
    return {
      slides,
    }
  }
}
</script>

<style scoped lang="scss">
.main-content {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
</style>