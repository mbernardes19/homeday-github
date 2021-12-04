<template>
<div class="slider">
  <transition name="slider-translate" mode="out-in">
    <slider-content
      :key="this.$route.query.step"
      :current-slide-index="this.$route.query.step ? this.$route.query.step : '0'"
      :slides="slides"
    >
    </slider-content>
  </transition>
</div>
</template>

<script>
import SliderContent from '@/components/SliderContent.vue';

export default {
  name: 'Slider',
  props: ['slides'],
  components: {
    SliderContent
  },
}
</script>

<style scoped lang="scss">

// Transitions
.slider-translate {
  &-enter-active {
    transition: all .1s cubic-bezier(1, 0.5, 0.8, 1);
  }
  &-leave-active {
    transition: all .1s cubic-bezier(1, 0.5, 0.8, 1);
  }

  &-enter-from,
  &-leave-to {
    transform: translateX(30%);
  }
}

.slider {
  flex-basis: 100%;
  max-width: 45rem;
  padding: 2rem;
  margin: 0 1rem;
  background-color: #040d21;
  color: #ffffff;
  border-radius: 25px;
  overflow: hidden;
}
</style>