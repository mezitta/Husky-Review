<template>
    <div class="container-fluid nav">
        <div class="col-sm navCol" id="branding">
            <img src="../assets/logo.png" alt="" width="50" height="50" />
        </div>
        <div class="col-sm navCol"><router-link to="/">Home</router-link></div>
        <div class="col-sm navCol"><router-link to="/review">Create Review</router-link></div>
    </div>
</template>

<script>
    export default {
        name: "Nav-home",
    }
</script>

<style scoped>
    .navCol {
        display: flex;
        align-items: center;
        background-color: lightblue;
    }

    .navCol:nth-of-type(1){
        padding: 0 0 0 20px;
    }

    .navCol:nth-of-type(n+2){
        justify-content: center;
    }

    .navCol a{
        text-decoration: none;
        color: green;
    }

    .nav {
        background-color: green;
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
</style>
