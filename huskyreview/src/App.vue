<template>
  <div class="content">
    <Nav />
    <div class="app">
      <card />
      <router-view />
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
    position: relative;
    background-color: #5f5e5e;
    display: block;
  }
</style>
