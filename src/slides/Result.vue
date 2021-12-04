<template>
  <div class="slide">
    <h1 class="slide__title--medium">And BAM, here's your profile:</h1>
    <github-profile :data="data"></github-profile>
    {{ error && error.message }}
  </div>
</template>

<script>
import store from '../store';
import Slide from '../components/Slide.vue';
import GithubProfile from '../components/GithubProfile.vue';
import {getGitHubProfile} from '../api';
import {onMounted, ref} from 'vue';

export default {
  name: 'Result',
  components: {GithubProfile},
  mixins: [Slide],
  setup() {
    const data = ref(null);
    const loading = ref(true);
    const error = ref(null);

    onMounted(async () => {
      try {
        const gitHubProfile = await getGitHubProfile(store.state.form.gitHubUserName);
        data.value = gitHubProfile;
        loading.value = false;
      } catch (e) {
        error.value = e;
      }
    })

    return {
      data,
      loading,
      error
    }
  },
  methods: {
    updateEmail(e) {
      store.setFirstNameAction(e.target.value);
      this.canContinue();
    },
    updateTermsAndServices(e) {
      store.setTermsAndServicesAction(e.target.checked);
      this.canContinue();
    },
    canContinue() {
      if (store.state.form.email && store.state.form.termsAndServices) {
        return true;
      }
      return false;
    }
  }
}
</script>

<style lang="scss">

</style>