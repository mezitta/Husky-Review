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
        <card />
    </div>
</template>

<script>
    import card from "../components/Card"
    
    export default {
        name: 'Home-page',
        components: {
            card
        }
    };
</script>

<style>
    .home a{
        text-decoration: none;
        color: white
    }

    .shareFont {
        font-size: 2.5em;
        font-weight: bold;
        margin-bottom: 2vh;
    }

    #createComp {
        text-align: center;
        margin-top: 6vh;
    }

    #makeHomeReview {
        width: 100%;
        max-width: 500px;
        background-color: var(--husky-yellow);
        font-size: 1.8rem;
        font-weight: bold;
        color: var(--dark-back);
        border: none;
        border-radius: 40px;
        transition: all 0.3s;
    }

    @media only screen and (max-width: 600px) {
        #makeHomeReview {
            width: 100%;
            background-color: var(--husky-yellow);
            font-size: 1.2rem;
            font-weight: bold;
            color: var(--dark-back);
            border: none;
            padding: 0.5em;
            border-radius: 40px;
            transition: all 0.3s;
        }

        .shareFont {
            font-size: 1.5em;
            font-weight: bold;
            margin-bottom: 2vh;
        }
    }

    @media only screen and (min-width: 1300px) {
        .shareFont {
            font-size: 3em;
            margin-bottom: 3vh;
        }
    }

    #makeHomeReview:hover {
        color: white;
        opacity: 0.8;
    }
</style>
