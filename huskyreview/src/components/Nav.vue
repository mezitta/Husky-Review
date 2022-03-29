<template>
    <div class="test">
    <div class="container-fluid nav">
        <div class="col navCol" id="branding">
            <!-- <img src="../assets/huskylogoblack.png" alt="" width="40" height="40" /> -->
        </div>
        <div class="col-4 col-lg-2 navCol"><router-link to="/">Home</router-link></div>
        <div class="col-4 col-lg-2 navCol"><router-link to="/about">About</router-link></div>
    </div>
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
        height: 4.5em;
        /* background-color: rgb(29, 29, 29); */
        
    }

    .navCol:nth-of-type(1){
        padding: 0 0 0 20px;
    }

    .navCol:nth-of-type(2){
        border-radius: 0 0 0 10px;
    }

    .navCol:nth-of-type(n+2){
        justify-content: center;
        background-color:  var(--husky-yellow);
    }

    .navCol a{
        text-decoration: none;
        font-weight: bold;
        transition: all 0.3s ease-in-out;
        color: black;
    }

    .navCol a:hover {
        color: white;
    }

    .nav {
        background-color: none;
        /* background-image: url(../assets/navbackground.svg);
        background-position: top right;
        background-repeat: no-repeat; */
        box-sizing: border-box;
        /* padding: 0.5em; */
        margin: 0;
        padding: 0;
    }
</style>
