<template>
  <div class="container-fluid filter">
    <form>
      <div class="row row-cols-auto justify-content-center  align-items-center filterBorder">

        <div class="col filterOptions">
        <div class="btn-group left" role="group">
            <button
              @click="filter=false, sortOrder = 0, filterPosts()"
              type="button"
              class="btn btn-warning Clr"
              data-bs-toggle="button"
            >
            Clear Filter
            </button>

            <button
              @click="sortBy='', swapOrder(), filter=true, filterPosts()"
              type="button"
              class="btn btn-warning Codr"
              data-bs-toggle="button"
            >
            Change Order
            </button>
          </div>
      </div>

        <div class="col">
          <h5 class="text-center text-dark">
              <strong> Filter by: </strong>
          </h5>
        </div>

        <div class="col filterOptions">
          <div class="btn-group right" role="group">
            <button
              @click="sortBy = 'cid', filter=true, filterPosts()"
              type="button"
              class="btn btn-warning CID"
              data-bs-toggle="button"
            >
              Class ID
            </button>

            <button
              @click="sortBy = 'prof', filter=true, filterPosts()"
              type="button"
              class="btn btn-warning Prof"
              data-bs-toggle="button"
            >
              Professor
            </button>

            <button
              @click="sortBy = 'rating', filter=true, filterPosts()"
              type="button"
              class="btn btn-warning Rat"
              data-bs-toggle="button"
            >
              Rating
            </button>
          </div>
          <div class="input-group" id="mobileGroup">
            <input type="search"
            id="form1" 
            v-model="searchFilter" 
            v-on:input="(event) => this.$emit('inputChange', event)"
            class="form-control" 
            placeholder="Search Reviews"/>
            <button type="button" @click="filterPosts(); filter=true" class="btn btn-warning search">
              Search
            </button>
          </div>
        </div>

        <div class="col filterOptions">
          <div class="input-group" id="desktopGroup">
            <input type="search"
            id="form1" 
            v-model="searchFilter" 
            v-on:input="(event) => this.$emit('inputChange', event)"
            class="form-control shadow-none" 
            placeholder="Search Reviews"/>
            <button type="button" @click="filterPosts(); filter=true" class="btn btn-warning search">
                Search
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import { destination } from '../destination';

export default {
  name: "filter-bar",

  data() {
    return {
      searchFilter: '',
      sortBy: '',
      sortOrder: 0,
      filteredResults: [],
      filter: false,
    }
  },
  methods: {
    filterPosts () {
      axios.get('http://' + destination.ip + ':4000/api', {
        params: {
          q: this.searchFilter,
          r: this.sortOrder,
          s: this.sortBy
        }
      }).then (response => {
        this.filteredResults = response.data
        this.testResults = response.data
        this.$emit('changeValue', this.testResults)
        this.$emit('toggleFilter', this.filter)
        console.log(this.filter)
        // console.log(this.filteredResults)
      }).catch((error) => {
        console.log(error)
      })
    },
    swapOrder(){
      if (this.sortOrder == 0){
        this.sortOrder = 1
      } else {
        this.sortOrder = 0;
      }
    }
  }
}
</script>

<style scoped>
@import '../assets/main.css';

.right {
  padding-left: 20px;
}

.left {
  padding-right: 20px;
}

.filter {
  padding: 0;
}

button.btn.btn-warning.Prof, button.btn.btn-warning.CID, button.btn.btn-warning.Clr, button.btn.btn-warning.Codr {
  border-right: 3px solid;
  border-right-color: var(--border-yellow);
}

button.btn.btn-warning:focus {
  box-shadow: inset 0 -1px 0 #ddd;
}

.CID, .Prof, .Rat, .Clr, .Codr
{
  background-color: var(--husky-yellow);
  border: none;
  transition: all 0.3s;
}

.CID:hover, .Prof:hover, .Rat:hover, .Clr:hover, .Codr:hover {
  color: white;
  background-color: var(--husky-yellow);
  opacity: 0.95;
}

.search {
  border-color: var(--husky-yellow);
  background-color: var(--husky-yellow);
  color: black;
  transition: all 0.3s;
}

.search:hover {
  background-color: var(--husky-yellow);
  color: white;
}

.filterBorder {
  padding-bottom: 5px;
  padding-top: 5px;
  margin-left: 0;
  box-shadow: 0px 5px 5px var(--main-back-dark);
  width: 100%;
}

#form1.form-control {
  display: inline-flex;
}

input[type=search]:focus {
  box-shadow: inset 0 -1px 0 #ddd;
}

@media only screen and (min-width: 600px) {
  h5 {
    margin: 0;
  }

  #mobileGroup {
    display: none;
  }
}

@media only screen and (max-width: 600px) {
    .filterOptions {
      padding: 0;
    }
    
    h5 {
      font-size: 0.1em;
      margin: 0;
      visibility: hidden;
    }

    .btn-group {
      width: 93vw;
    }

    button.btn.btn-warning.Rat {
      border-radius: 0 5px 0 0;
    }

    button.btn.btn-warning.CID {
      border-radius: 5px 0 0 0;
    }

    button.btn.btn-outline-warning.search {
      border-radius: 0 0 5px 0;
    }

    input#form1.form-control {
      border-radius: 0 0 0 5px;
    }

    #desktopGroup {
      display: none;
    }

    button.btn.btn-warning.Prof, button.btn.btn-warning.CID, button.btn.btn-warning.Rat, button.btn.btn-warning.Clr, button.btn.btn-warning.Codr {
      border-bottom: 2px solid;
      border-bottom-color: var(--border-yellow);
    } 
}

</style>
