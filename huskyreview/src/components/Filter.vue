<template>
  <div class="container-fluid filter">
    <form>
      <div class="row row-cols-auto justify-content-center  align-items-center filterBorder">

        <div class="col">
          <h5 class="text-center">
              <strong> Sort By: </strong>
          </h5>
        </div>

        <div class="col filterOptions">
          <div class="btn-group" role="group">
            
            <button
              @click="sortBy = 'class_id'"
              v-if="sortBy === '_id' || sortBy != 'class_id'"
              type="button"
              class="btn btn-warning CID"
              data-bs-toggle="button"
            >
              Class ID
            </button>
            
            <button
              @click="sortBy = '_id'"
              v-if="sortBy === 'class_id'"
              type="button"
              class="btn btn-warning CID filterChecked"
              data-bs-toggle="button"
            >
              Class ID
            </button>

            <button
              @click="sortBy = 'prof'"
              v-if="sortBy === '_id' || sortBy != 'prof'"
              type="button"
              class="btn btn-warning Prof"
              data-bs-toggle="button"
            >
              Professor
            </button>

            <button
              @click="sortBy = '_id'"
              v-if="sortBy === 'prof'"
              type="button"
              class="btn btn-warning CID filterChecked"
              data-bs-toggle="button"
            >
              Professor
            </button>

            <button
              @click="sortBy = 'rating'"
              v-if="sortBy === '_id' || sortBy != 'rating'"
              type="button"
              class="btn btn-warning dept"
              data-bs-toggle="button"
            >
              Rating
            </button>

            <button
              @click="sortBy = '_id'"
              v-if="sortBy === 'rating'"
              type="button"
              class="btn btn-warning CID filterChecked"
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
            placeholder="Search Keyword"/>
            <button type="button" @click="filterPosts(); filter=true" class="btn btn-warning search">
                Apply Filter
            </button>
          </div>
        </div>

        <div class="col filterOptions">
          <div class="input-group desktopGroup" id="desktopGroup">
            <input type="search"
            id="form1" 
            v-model="searchFilter" 
            v-on:input="(event) => this.$emit('inputChange', event)"
            class="form-control shadow-none" 
            placeholder="Search Keyword"/>
          </div>
          <!-- <button type="button" @click="filterPosts(); filter=true" class="btn btn-warning search">
                Apply Filter
          </button> -->
        </div>

        <div class="col applyFilter desktopGroup">
          <button type="button" @click="filterPosts(); filter=true" class="btn btn-warning search ">
                Apply Filter
          </button>
        </div>
      </div>

      <div  class="row d-flex justify-content-center align-items-center filterAdjustments">
        <div class="col clearFilter">
          <a @click="filter=false; sortOrder=0; sortBy='_id'; searchFilter=''; filterPosts()">
                <i class="fa-solid fa-filter"></i> Clear Filter
          </a>
        </div>

        <div class="col orderBy">
          <span v-if="descend" @click="descend=false; sortOrder=1; filterPosts()">
          Order:
          <i class="fa-solid fa-arrow-up-long"></i>
          <i class="fa-solid fa-arrow-down-long"></i>
          </span>

          <span v-if="!descend" @click="descend=true; sortOrder=0; filterPosts()">
          Order:
          <i class="fa-solid fa-arrow-up-long"></i>
          <i class="fa-solid fa-arrow-down-long"></i>
          </span>
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
      sortBy: '_id',
      sortOrder: 0,
      descend: true,
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
        this.$emit('changeValue', this.filteredResults)
        this.$emit('toggleFilter', this.filter)
      }).catch((error) => {
        console.log(error)
      })
    },
  },
  created () {
    this.filterPosts()
  }
}
</script>

<style scoped>
@import '../assets/main.css';

.orderBy:hover, .clearFilter:hover {
  cursor: pointer;
}

.clearFilter {
  text-decoration: none;
  text-align: right;
  padding-right: 50px;
}

.orderBy {
  text-align: left;
}

.orderBy, .clearFilter {
  font-weight: bold;
  color: var(--main-back);
}

.filter {
  padding: 0;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3));
  color: #fff;
	text-shadow: 0px 1px 0px #999, 0px 2px 0px #888, 0px 3px 0px #777, 0px 4px 0px #666, 0px 5px 0px #555, 0px 6px 0px #444, 0px 7px 0px #333, 0px 8px 7px #001135;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.15);
}

button.btn.btn-warning:focus {
  box-shadow: inset 0 -1px 0 #ddd;
}

.CID, .Prof, .dept
{
  background: none;
  background-color: var(--husky-yellow);
  border: 1px solid var(--husky-yellow);
  transition: all 0.4s;
}

.CID:hover, .Prof:hover, .dept:hover,
.CID:focus, .Prof:focus, .dept:focus,
.search:hover {
  color: white;
  box-shadow: inset 0 -3.25em 0 0 rgb(73, 73, 73);
}

.search {
  border-color: var(--husky-yellow);
  background-color: var(--husky-yellow);
  color: black;
  transition: all 0.3s;
}

.filterBorder {
  padding-bottom: 5px;
  padding-top: 10px;
  margin-left: 0;
  margin-bottom: 5px;
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

    .filterBorder {
      padding-top: 5px;
    }

    .applyFilter {
      margin-top: 10px;
    }
    
    h5 {
      font-size: 0.1em;
      margin: 0;
      visibility: hidden;
    }

    .btn-group,
    #mobileGroup.input-group {
      width: 93vw;
    }

    button.btn.btn-warning.dept {
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

    .desktopGroup {
      display: none;
    }

    button.btn.btn-warning.Prof, button.btn.btn-warning.CID, button.btn.btn-warning.dept {
      border-bottom: 2px solid var(--border-yellow);
    } 

    .search {
      border-radius: 0 0 5px 0;
    }
}

.filterAdjustments {
  padding-bottom: 5px;
}

.filterChecked {
  color: white;
  background-color: rgb(73, 73, 73);
}
</style>
