<template>
    <div class="container-fluid nav">
        <div class="col-sm navCol" id="branding">
            <img src="../assets/huskylogoblack.png" alt="" width="40" height="40" />
        </div>
        <div class="col navCol"><router-link to="/">Home</router-link></div>
        <div class="col navCol"><router-link to="/review">Create Review</router-link></div>
    </div>
</template>

<script>
    export default {
        name: "Nav-home",
    }
</script>

<style scoped>
    @import '../assets/main.css';

    .navCol {
        display: flex;
        align-items: center;
        background-color: rgb(29, 29, 29);
    }

    .navCol:nth-of-type(1){
        padding: 0 0 0 20px;
    }

    .navCol:nth-of-type(n+2){
        justify-content: center;
    }

    .navCol a{
        text-decoration: none;
        color: var(--husky-yellow);
    }

    .nav {
        background-color: rgb(29, 29, 29);
        box-sizing: border-box;
        padding: 0.5em;
        margin: 0;
    }
</style>
