<template>
    <div class="container-fluid home">
        <div class="topPage">
            <Nav />
            <div class="row d-flex justify-content-center logoRow">
                <img src='../assets/huskyreivewlogo.svg' class="huskyLogo">
            </div>

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
           <Filter ref="filterbar"
                @changeValue="updateFilter" 
                @toggleFilter="updateToggle" 
            /> 
        </div>
        
        <Reviews :filteredReviews="reviewResults" :filter="filterToggle"/>
    </div>
</template>

<script>
    import Filter from "../components/Filter"
    import Nav from "../components/Nav"
    import Reviews from "../components/Reviews"

    export default {
        name: 'Home-page',

        components: {
            Filter,
            Nav,
            Reviews
        },
        data() {
            return {
                reviewResults: [],
                filterToggle: false,
                order: 0
            }
        },
        methods: {
            updateFilter(filterResults) {
                this.reviewResults = filterResults
            },

            updateToggle(toggle) {
                this.filterToggle = toggle;
            },
        },
    };
</script>

<style scoped>
    @import '../assets/main.css';
    
    .home a{
        text-decoration: none;
    }

    .home {
        padding: 0;
    }

    .topPage {
        background-color: var(--main-back);
        background-image: url('../assets/mtu_campus1.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }

    .shareFont {
        font-size: 2.1em;
        font-weight: bold;
        margin-bottom: 2vh;
        color: #fff;
        text-shadow: 0px 1px 0px var(--main-back), 0px 2px 0px #888, 0px 3px 0px #777, 0px 4px 0px #666, 0px 5px 0px #555, 0px 6px 0px #444, 0px 7px 0px #333, 0px 8px 7px #001135;
    }

    .logoRow {
        padding: 1.5em 10em 0 10em;
    }

    .makeReview {
        margin: 0;
    }

    #createComp {
        text-align: center;
    }

    #makeHomeReview {
        width: 100%;
        max-width: 500px;
        margin-bottom: 10%;

        background-color: var(--husky-yellow);
        color: black;

        font-size: 1.8rem;
        font-weight: bold;
        
        border: 2px solid var(--husky-yellow);
        border-radius: 40px;
        
        transition: all 0.4s;
    }

    @media only screen and (max-width: 600px) {
        #makeHomeReview {
            width: 100%;
            background-color: var(--husky-yellow);
            font-size: 0.9em;
            font-weight: bold;
            color: black;
            border: 1px var(--husky-yellow);
            border: 1px solid var(--husky-yellow);
            padding: 0.5em;
            border-radius: 40px;
            transition: all 0.3s;
        }

        .shareFont {
            font-size: 1.5em;
            font-weight: bold;
            margin-bottom: 2vh;
        }

        .logoRow {
            padding: 1em 2em 0.5em 2em;
            margin-bottom: 0;
        }

        .huskyLogo {
            display: none;
        }

    }

    @media only screen and (min-width: 1300px) {
        .shareFont {
            font-size: 3em;
            margin-bottom: 3vh;
        }

        .logoRow {
            padding: 1.5em 30em 0 30em;
        }
    }

    #makeHomeReview:hover {
        color: white;
        box-shadow: inset 0 0 0 2em rgb(73, 73, 73);
        opacity: 1;
    }
</style>
