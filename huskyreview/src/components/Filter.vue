<template>
  <div class="container-fluid filter">
    <div class="row row-cols-auto justify-content-center  align-items-center filterBorder">
      
      <div class="col">
        <h5 class="text-center text-dark">
            <strong> Filter by: </strong>
        </h5>
      </div>

      <div class="col filterOptions">
        <div class="btn-group" role="group">
          <button
            type="button"
            class="btn btn-warning CID"
            data-bs-toggle="button"
          >
            Class ID
          </button>

          <button
            type="button"
            class="btn btn-warning Prof"
            data-bs-toggle="button"
          >
            Professor
          </button>

          <button
            type="button"
            class="btn btn-warning dept"
            data-bs-toggle="button"
          >
            Deptartment
          </button>
        </div>

        <div class="input-group" id="mobileGroup">
          <input type="search" id="form1" class="form-control" placeholder="Search Reviews"/>
          <button type="button" class="btn btn-outline-warning search">
            Search
          </button>
        </div>
      </div>

      <div class="col filterOptions">
        <div class="input-group" id="desktopGroup">
            <input type="search" id="form1" class="form-control" placeholder="Search Reviews"/>
          <button type="button" class="btn btn-outline-warning search">
              Search
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "filter-bar",
};
</script>

<style scoped>
@import '../assets/main.css';

.filter {
  padding: 0;
}

button.btn.btn-warning.Prof, button.btn.btn-warning.CID {
  border-right: 3px solid;
  border-right-color: var(--border-yellow);
}



.CID, .Prof, .dept
{
  background-color: var(--husky-yellow);
  border: none;
  transition: all 0.3s;
}

.CID:hover, .Prof:hover, .dept:hover {
  color: white;
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
  /* border-bottom: 3px solid var(--main-back-dark); */
  padding-top: 5px;
  /* border-top: 3px solid var(--main-back-dark); */
  margin-left: 0;
  box-shadow: 0px 5px 5px var(--main-back-dark);
  width: 100%;
}

#form1.form-control {
  display: inline-flex;
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

    #desktopGroup {
      display: none;
    }

    button.btn.btn-warning.Prof, button.btn.btn-warning.CID, button.btn.btn-warning.dept {
      border-bottom: 2px solid;
      border-bottom-color: var(--border-yellow);
    } 
}

</style>
