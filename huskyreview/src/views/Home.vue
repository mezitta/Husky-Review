<template>
    <div class="container-fluid home">
        <div class="row d-flex justify-content-center makeReview">
            <div class="col-6" id="createComp">
            <h2 class="shareFont">Share Your Experience</h2>
                <div class="row d-flex makeReview">
                    <div class="col">
                        <router-link to="/review">
                            <button type="button" class="btn btn-primary" id="makeHomeReview">
                                Create Review
                            </button>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Home-page',
        components: {}
    };
</script>

<style>
    .home a{
        text-decoration: none;
        color: white
    }

    .shareFont {
        font-size: 2em;
    }

    #createComp {
        text-align: center;
    }

    #makeHomeReview {
        width: 100%;
        padding: 1em;
        background-color: var(--husky-yellow);
        color: var(--dark-back);
        border: none;
        transition: all 0.3s;
    }

    #makeHomeReview:hover {
        color: white;
        border-radius: 10px;
    }
</style>
