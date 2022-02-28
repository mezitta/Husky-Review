<template>
  <Nav />
</template>

<script>
  import axios from 'axios';
  import Nav from './components/Nav.vue'

  export default {
    name: 'App',
    components: {
      Nav,
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
  }

  body {
    background: grey;
  }
</style>
