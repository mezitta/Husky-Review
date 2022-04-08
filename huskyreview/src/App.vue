<template>
  <div class="content">
    <!-- <Nav /> -->
    <div class="app">
      <router-view />
    </div>
  </div>
  <footer> 
    <div class="footerText">Husky Review 2022</div>
  </footer>
</template>

<script>
  import axios from 'axios';
  import { destination } from './destination';
  // import Nav from "./components/Nav"

  export default {
    name: 'App',
    components: {
      // Nav,
    },
    data() {
      return {
        baseApiURL: 'http://' + destination.ip + ':4000/api',
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
    font-family: Verdana, helvetica;
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

  footer {
    height: 8vh;
    
  }

  .footerText {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--main-footer);
  }
</style>
