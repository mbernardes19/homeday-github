<template>
  <div class="slide--result">
    <loader v-if="loading"></loader>
    <h1 v-if="!loading" class="slide__title--medium">And BAM, here's your profile:</h1>
    <github-profile :data="data"></github-profile>
    {{ error && error.message }}
    
  </div>
</template>

<script>
import store from '../store';
import slideBase from '../mixins/slide-base';
import removePageCentering from '../mixins/remove-page-centering';
import GithubProfile from '../components/GithubProfile.vue';
import {getGitHubProfile} from '../api';
import {onMounted, ref} from 'vue';
import Loader from '../components/Loader.vue';

export default {
  name: 'Result',
  components: {GithubProfile, Loader},
  mixins: [slideBase, removePageCentering],
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

<style scoped lang="scss">

.slide--result {
  max-width: 39rem;
  margin: 0 auto;
}

</style>