<template>
  <div class="content">
    <!-- <Nav /> -->
    <div class="app">
      <router-view />
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  // import Nav from "./components/Nav"

  export default {
    name: 'App',
    components: {
      // Nav,
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

  .body {
    width: 100vw;
  }

  .app {
    min-height: 100vh;
    width: 100%;
    margin: 0;
    padding: 0;
    position: relative;
    background-color: var(--main-back);
    overflow: hidden;
    display: block;
  }
</style>
