import { reactive } from "@vue/reactivity";

export default {
    state: reactive({
        form: {
            firstName: '',
            lastName: '',
            gitHubUserName: '',
            email: '',
            termsAndServices: false,
        }
    }),
    setFirstNameAction(newValue) {
        this.state.form.firstName = newValue;
    },
    setLastNameAction(newValue) {
        this.state.form.lastName = newValue;
    },
    setGitHubUserNameAction(newValue) {
        this.state.form.gitHubUserName = newValue;
    },
    setEmailAction(newValue) {
        this.state.form.email = newValue;
    },
    setTermsAndServicesAction(newValue) {
        this.state.form.termsAndServices = newValue;
    },
}