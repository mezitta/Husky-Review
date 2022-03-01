<template>
    <div class="navbar">
        <nav>
            <div class="branding">
                <img src="" alt="">
            </div>
            <ul v-show="!mobile" class="navigation">
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/review">Create Review</router-link></li>
            </ul>
            <!-- <div class="icon">
                <i @click="toggleMobileNav" v-show="mobile" class="far fa-bars" :class="{'icon-active': mobileNav }"></i>
            </div>
            <transition name="mobile-nav">
                <ul v-show="mobileNav" class="dropdown-nav">
                <li><router-link class="link" :to="{name: 'Home'}">Home</router-link></li>
                <li><router-link class="link" :to="{name: ''}">Create Review</router-link></li>
            </ul>
            </transition> -->
        </nav>
    </div>
</template>

<script>
    export default {
        name: "Nav-home",
    }
</script>

<style scoped>
    .navbar {
        background-color: white;
        z-index: 99;
        width: 100%;
        /* position: fixed; */
        transition: 0.3s ease all;
        color: #fff;
    }

    nav {
        display: flex;
        flex-direction: row;
        padding: 12px 0;
        transition: 0.3s ease all;
        width: 90%;
        margin: 0 auto;
        @media(min-width: 1140px) {
            max-width: 1140px;
        }
    }
</style>
