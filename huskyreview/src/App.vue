<template>
  <div class="content">
    <Nav />
    <div class="app">
      <router-view />
      <card />
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import Nav from "./components/Nav"
  import card from "./components/Card"

  export default {
    name: 'App',
    components: {
      Nav,
      card,
    },
    data() {
      return {
        baseApiURL: 'http://localhost:4000/api',
        review: {
          name: ''
        },
        reviews: [],
        reviewList: {}
      }
    },
    created() {
      this.getReviews()
    },
    methods: {
      getReviews() {
        axios.get(this.baseApiURL).then(res => {
          this.reviews = res.data;
          console.log(this.reviews)
        })
      }
    }
  }
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .content {
    font-family: helvetica;
  }

  .app {
    min-height: 100vh;
    margin: 0;
    padding: 0;
    position: relative;
    background-color: var(--main-back);
    display: block;
    /* background-image: url(./assets/navbackground.svg);
    background-position: top right;
    background-size: 100% 100%;
    background-repeat: no-repeat; */
  }
</style>
