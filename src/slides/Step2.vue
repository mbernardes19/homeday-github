<template>
  <div class="slide">
    <h1 class="slide__title--medium">And more these info...</h1>
    <form id="step2-form" class="slide__form">
      <div class="slide__field">
        <label for="email">Email*</label>
        <input id="email" class="slide__input" :oninvalid="showEmailErrorMessage" type="email" name="email" @input="updateEmail" :value="form.email" required />
        <span class="slide__field--error-message" ref="error-message"></span>
      </div>
      <div class="slide__field--checkbox">
        <label for="terms-and-services">Agree with terms and services*</label>
        <input id="terms-and-services" class="slide__input--checkbox" type="checkbox" name="terms-and-services" @input="updateTermsAndServices" :checked="form.termsAndServices" required />
      </div>
    </form>
    <div class="slide__buttons-container">
      <button class="slide__button--back" @click="previous()">Back</button>
      <button class="slide__button--next" @click="next()" :disabled="!validate()" :class="{'slide__button--disabled': !validate()}">Submit</button>
    </div>
  </div>
</template>

<script>
import store from '../store';
import Slide from '../components/Slide.vue';
// import {getGitHubProfile} from '../api';
import {EMAIL_PATTERN} from '../utils/validation-patterns';

export default {
  name: 'Step1',
  mixins: [Slide],
  data() {
    return {
      form: store.state.form,
    }
  },
  methods: {
    updateEmail(e) {
      store.setEmailAction(e.target.value);
      this.validate();
    },
    updateTermsAndServices(e) {
      store.setTermsAndServicesAction(e.target.checked);
      this.validate();
    },
    validate() {
      if (this.validateEmail() && store.state.form.termsAndServices) {
        return true;
      }
      return false;
    },
    validateEmail() {
      if (store.state.form.email && store.state.form.email.toLowerCase().match(EMAIL_PATTERN)) {
        this.hideEmailErrorMessage();
        return true;
      }
      this.showEmailErrorMessage();
      return false;
    },
    showEmailErrorMessage() {
    if (this.$refs['error-message']) this.$refs['error-message'].textContent="Invalid email address";
    },
    hideEmailErrorMessage() {
      if (this.$refs['error-message']) this.$refs['error-message'].textContent="";
    }
  }
}
</script>

<style lang="scss">

</style>