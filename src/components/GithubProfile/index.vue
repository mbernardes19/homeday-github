<template>
<div v-if="data" class="github-profile">
    <img class="github-profile__picture" :src="data.avatar_url" />
    <div class="github-profile__header">
        <h1 class="github-profile__name">{{ data.name }}</h1>
        <span class="github-profile__username">{{ data.login }}</span>
    </div>
    <div class="github-profile__body">
        <p v-if="data.bio" class="github-profile__bio">{{ data.bio }}</p>
        <div class="github-profile__general-info">
            <profile-item label="Followers" :value="data.followers"></profile-item>
            <profile-item label="Following" :value="data.following"></profile-item>
            <profile-item label="Location" :value="data.location"></profile-item>
            <profile-item label="Email" :value="data.email"></profile-item>
            <profile-item label="Blog" :value="data.blog"></profile-item>
            <profile-item label="Twitter" :value="data.twitter_username"></profile-item>
            <profile-item label="Company" :value="data.company"></profile-item>
        </div>
    </div>
</div>
</template>

<script>
import ProfileItem from './ProfileItem.vue';

export default {
    name: 'GithubProfile',
    components: { ProfileItem },
    props: ['data'],
}
</script>

<style scoped lang="scss">
.github-profile {
    &__header {
        display: flex;
        flex-direction: column;
        max-width: fit-content;
        margin: 0 auto;
        text-align: left;

        @media screen and (max-width: 768px) {
            text-align: center;
        }
    }

    &__general-info {
        display: grid;
        grid-template-columns: repeat(2, minmax(100px, 1fr));
        grid-row-gap: .5rem;
        text-align: left;
        margin: 2rem 0;

        @media screen and (max-width: 768px) {
            margin: 2rem auto 0 auto;
            text-align: center;
        }

        @media screen and (max-width: 520px) {
            grid-template-columns: repeat(1, minmax(100px, 1fr));
        }
    }

    &__picture {
        border-radius: 50%;
        max-width: 18rem;
        
        @media screen and (max-width: 768px) {
            width: 61vw;
        }

    }

    &__name {
        margin-bottom: 0;
        line-height: 1;
        
    }

    &__username {
        text-align: left;

        @media screen and (max-width: 768px) {
            text-align: center;
        }
    }
}
</style>