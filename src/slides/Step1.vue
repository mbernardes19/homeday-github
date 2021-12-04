<template>
  <div class="slide">
    <h1 class="slide__title--medium">First, I'll need these info about you</h1>
    <form class="slide__form">
      <div class="slide__field">
        <label class="slide__label" for="first-name">First name*</label>
        <input id="first-name" class="slide__input" maxlength="100" name="first-name" @input="updateFirstName" :value="form.firstName" required />
      </div>
      <div class="slide__field">
        <label class="slide__label" for="last-name">Last name*</label>
        <input id="last-name" class="slide__input" maxlength="100" name="last-name" @input="updateLastName" :value="form.lastName" required />
      </div>
      <div class="slide__field">
        <label class="slide__label" for="github-username">GitHub username*</label>
        <input id="github-username" class="slide__input" maxlength="100" name="github-username" @input="updateGitHubUserName" :value="form.gitHubUserName" required />
      </div>
    </form>
    <div class="slide__buttons-container">
      <button class="slide__button--back" @click="previous()">Back</button>
      <button class="slide__button--next" :disabled="!validate()" :class="{'slide__button--disabled': !validate()}" @click="next()">Next</button>
    </div>
  </div>
</template>

<script>
import store from '../store';
import Slide from '../components/Slide.vue';

export default {
  name: 'Step1',
  mixins: [Slide],
  data() {
    return {
      form: store.state.form,
    }
  },
  methods: {
    updateFirstName(e) {
      store.setFirstNameAction(e.target.value);
      this.validate();
    },
    updateLastName(e) {
      store.setLastNameAction(e.target.value);
      this.validate();
    },
    updateGitHubUserName(e) {
      store.setGitHubUserNameAction(e.target.value);
      this.validate();
    },
    validate() {
      if (store.state.form.firstName && store.state.form.lastName && store.state.form.gitHubUserName) {
        return true;
      }
      return false;
    }
  }
}
</script>

<style lang="scss">
</style>