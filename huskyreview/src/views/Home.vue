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
        </div>
        <Filter/>
        <!-- <Reviews /> -->
        <Card/>
    </div>
</template>

<script>
    import Filter from "../components/Filter"
    import Nav from "../components/Nav"
    // import Reviews from "../components/Reviews"
    import Card from "../components/Card"
    export default {
        name: 'Home-page',
        components: {
            Filter,
            Nav,
            // Reviews
            Card
        }
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

    .cards {
        /* text-align: center; */
    }

    .topPage {
        background-color: var(--main-back);
        background-image: url('../assets/mtu_campus1.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        /* opacity: 0.5; */
    }

    .shareFont {
        font-size: 2.5em;
        font-weight: bold;
        margin-bottom: 2vh;
        color: var(--main-back);
        text-shadow: 0 0 0.25em black;
    }

    .logoRow {
        padding: 1.5em 10em 0 10em;
    }

    .makeReview {
        margin: 0;
    }

    #createComp {
        text-align: center;
        /* margin-top: 3vh; */
    }

    #makeHomeReview {
        width: 100%;
        max-width: 500px;
        margin-bottom: 10%;
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
            font-size: 1rem;
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
        opacity: 0.8;
    }
</style>
