<template>
  <div class="slide--intro">
    <h1 class="slide__title">Welcome to Find-a-GitHub-user!</h1>
    <p class="slide__description">Here you can find your GitHub profile or someone else's profile! And that's just it.</p>
    <button class="slide__button--primary" @click="next()">Get started</button>
  </div>
</template>

<script>
import Slide from '../components/Slide.vue';

export default {
  name: 'Intro',
  mixins: [Slide],
}
</script>

<style lang="scss">
.slide {
  &--intro {
    padding: 0 3rem;
  }
}

</style>