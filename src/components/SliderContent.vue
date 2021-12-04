<template>
  <component
    @next-slide="onNextSlide"
    @previous-slide="onPreviousSlide"
    :is="slide"
  ></component>
</template>

<script>
export default {
  name: 'SliderContent',
  props: ['currentSlideIndex', 'slides'],
  data() {
    return {
      canContinue: true,
      slideIndex: parseInt(this.currentSlideIndex, 10),
    }
  },
  computed: {
    slide() {
      return this.findSlide(this.slideIndex)
    }
  },
  methods: {
    findSlide(slideIndex) {
      if (this.slides[slideIndex]) {
        return this.slides[slideIndex];
      }
      this.$router.replace({ path: '404' });
    },
    onPreviousSlide() {
      if (this.slideIndex === 0) {
        this.$router.push({ path: '/' });
        return;
      }
      this.$router.push({ path: '/', query: {step: this.slideIndex - 1} });
    },
    onNextSlide() {
      this.$router.push({ path: '/', query: {step: this.slideIndex + 1} });
    },
    isFirstSlide() {
      return this.slideIndex === 0;
    }
  }
}
</script>

<style lang="scss">
.slide {
  display: flex;
  flex-direction: column;
  max-width: 27rem;
  margin: 0 auto;
  
  &__title {
    font-size: 2.5rem;
    margin: 0 0 .5rem 0;

    &--medium {
      font-size: 1.5rem;
      margin: 0 0 2rem 0;
    }
  }

  &__description {
    margin: 0 0 1rem 0;
  }

  &__button {
    &--primary {
      margin: 1rem auto 0 auto;
      padding: 1rem;
      border-radius: 15px;
      border: 0;
      color: white;
      font-weight: bold;
      font-size: 1.25rem;
      cursor: pointer;
      background-color: #0e880a;
      max-width: 10rem;
    }

    &--next {
      padding: .5rem 1rem;
      border-radius: 8px;
      border: 0;
      color: white;
      font-size: 1rem;
      cursor: pointer;
      background-color: #0e880a;
      max-width: 10rem;
    }

    &--back {
      padding: .5rem 1rem;
      border-radius: 8px;
      border: 0;
      color: white;
      font-size: 1rem;
      cursor: pointer;
      background-color: grey;
      max-width: 10rem;
    }

    &--disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }
  }

  &__buttons-container {
    display: flex;
    justify-content: space-around;
  }

  &__form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 0 2rem 0;
  }

  &__field {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin: 0 0 1.5rem 0;

    &--error-message {
      color: #ed0e0e;
      margin-top: .25rem;
    }

    &--checkbox {
      display: flex;
      align-items: flex-start;
      width: 100%;
      margin: 0 0 1.5rem 0;
    }
  }

  &__input {
    flex-basis: 100%;
    min-height: 2.5rem;
    width: 100%;
    border-radius: 10px;
    padding: .5rem;
    border: 0;
    box-sizing: border-box;

    &--checkbox {
      border-radius: 10px;
      padding: .5rem;
      border: 0;
      order: -1;
      margin-right: .6rem;
    }
  }
}
</style>
