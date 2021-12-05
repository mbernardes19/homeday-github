<template>
<div v-if="value" class="github-profile__profile-item">
    <label class="github-profile__label">{{ label }}: </label>
    <span class="github-profile__value">{{ value }}</span>
</div>
</template>

<script>

export default {
    name: 'GithubProfile',
    props: ['label', 'value'],
}
</script>

<style scoped lang="scss">
.github-profile {

    &__label {
        font-weight: bold;

        @media screen and (max-width: 768px) {
            display: block;
        }
    }
}
</style>