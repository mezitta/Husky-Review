<template>
  <div class="container-fluid">
    <div class="row row-cols-auto  justify-content-center filterBorder">
      
      <div class="col">
        <h5 class="text-center text-dark">
            <strong> Filter by: </strong>
        </h5>
      </div>

      <div class="col">
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
      </div>

      <div class="col">
        <div class="input-group">
          <div class="form-outline">
            <input type="search" id="form1" class="form-control" placeholder="Search"/>
          </div>
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
  color: var(--husky-yellow);
}

.search:hover {
  background-color: var(--husky-yellow);
  color: black;
}

.filterBorder {
  padding-bottom: 5px;
  border-bottom: 5px solid rgb(0, 0, 0);
  padding-top: 5px;
  border-top: 5px solid rgb(0, 0, 0);
  width: 100%;
}

/* .topBorder {
  padding-top: 5px;
  border-top: 5px solid rgb(0, 0, 0);
} */
</style>