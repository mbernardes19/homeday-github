<template>
<div v-if="data" class="github-profile">
    <img class="github-profile__picture" :src="data.avatar_url" />
    <div class="github-profile__header">
        <h1 class="github-profile__name">{{ data.name }}</h1>
        <span class="github-profile__username">{{ data.login }}</span>
    </div>
    <div class="github-profile__body">
        <p v-if="data.bio" class="github-profile__bio">{{ data.bio }}</p>
    </div>
</div>
</template>

<script>

export default {
    name: 'GithubProfile',
    props: ['data'],
}
</script>

<style scoped lang="scss">
.github-profile {
    &__header {
        display: flex;
        flex-direction: column;
        max-width: 19rem;
        margin: 0 auto;
        text-align: left;
    }

    &__body {
        
    }

    &__picture {
        border-radius: 50%;
    }

    &__name {
        margin-bottom: 0;
        line-height: 1;
        
    }

    &__username {
        text-align: left;
    }
}
</style>