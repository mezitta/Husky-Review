<template>
<!-- <div v-for="review in reviews" :key="review.class_id"> -->
<div class="cards">
    <div class="container card" id="ogCard" v-for="review in reviews" :key="review.class_id">
        <div class="row justify-content-end bottom-margin top-row-margin cardRow">
            <div class="col" id="title" >
                {{review.title}}
            </div>
            <div class="col-5 text-end" id = "rating">
                <div class="stars">
                    <span v-for="(n, i) in Math.floor(review.rating)" v-bind:key="(n, i)" class="cardStar"><i class="fa-solid fa-star" /></span>
                    <span v-if="review.rating % 1 != 0" class="cardStar">
                        <span class="halfStarFill"><i class="fa-solid fa-star-half" /></span>
                        <!-- <span class="halfStarEmpty"><i class="fa-solid fa-star-half fa-flip-horizontal" /></span> -->
                    </span>
                    <span v-for="(n, i) in (5 - Math.floor(review.rating))" v-bind:key="(n, i)" class="cardStarFill"><i class="fa-solid fa-star" /></span>
                </div>
                <span class="cardRating">{{review.rating}}</span>
            </div>
        </div>
        <div class="row bottom-margin cardRow">
            <div class="col-4 right-border" id = "className">
                {{review.class_name}}
                
            </div>
            <div class="col-4 right-border" id = "classID">
                {{review.class_id}}
            </div>
            <div class="col-4" id = "prof">
                {{review.prof}}
            </div>
        </div>
        <div class="row bottom-margin cardRow bodyText">
            <div class="col" id = "body">
                {{review.body}}
            </div>
        </div>
        <!-- <div class="row justify-content-end align-items-center bottom-row-margin top-row-margin cardRow">
            <div class="col-3 credit">
                    {{cardCredibility}}
            </div>
            <div class="col-1 text-center rating">
                <button type="button" class="btn btn-* btn-sm">
                    <i class="fa-solid fa-thumbs-up"></i>
                </button>
            </div>
            <div class="col-1 text-center rating" id = "posScore">
                0
            </div>
            <div class="col-1 text-center rating">
                <button type="button" class="btn btn-* btn-sm">
                    <i class="fa-solid fa-thumbs-down"></i>
                </button>
            </div>
            <div class="col-1  text-center rating" id = "negScore">
                0
            </div>
        </div> -->
    <!-- </div> -->
    </div>
</div>
</template>

<script>
    import { destination } from '../destination';
    import axios from 'axios';
    
    // , rating, className, classID, prof, body, posScore, negScore
    export default {
        name: "review-Card",
        components: {
            
        },
        data() {
            return {
                cardTitle: '',
                cardClassId: '',
                cardRating: '',
                cardClassName: '',
                cardProfName: '',
                cardBody: '',
                cardCredibility: '',
                reviews: [],
            }
        },methods: {
            getData() {
                axios.get('http://' + destination.ip + ':4000/api', {
                    params: {body: 'no'}
                }).then(response => {
                    this.reviews = response.data;
                    this.reviewBody = this.reviews[0].body
                })
                    .catch((error) => {
                    console.log(error)
                })
            }
        },  
        created() {
            this.getData();
        }
    };
</script>

<style scoped>
@import '../assets/main.css';

    .row {
        padding: 0.2em;
    }

    .cards {
        margin: auto;
        width: 90%;
    }

    .card {
        height: 300px;
        width: calc(50% - 0.5em);

        margin-bottom: 0.25em;
        margin-left: 0.25em;
        margin-right: 0.25em;

        display: inline-flex;

        background-color: rgb(255,255,255);
        border-radius: 20px;
        box-shadow: 0px 0px 10px var(--card-shadow);

        position: relative;
        top: 0;

        transition: all 0.3s;
    }

    .card:hover {
       top: -10px;
       box-shadow: 0px 0px 10px var(--card-shadow-hover);
    }

    @media only screen and (max-width: 600px) {
        .card {
            height: 200px;
            width:100%;

            margin-left: 0;
            margin-right: 0;
        }
    }

    @media only screen and (min-width: 1300px) {
        .card {
            margin-left: 0.25em;
            margin-right: 0.25em;
            /* width: calc(100% / 3); */
            width: calc((100% / 3) - 0.75em);
        }
    }

    .bodyText {
        height: 60%;
    }

    .cardRow {
        color: blue;
        font-size: 0.85em;
    }

    .credit {
        padding: 0;
        text-align: end;
    }

    .rating {
        padding: 0.2em;
        max-width: 25px;
        margin-right: 10px;
    }

    .right-border {
        padding-right: 5px; 
        border-right: 1px solid rgb(0, 0, 0);
    }
    
    .bottom-margin { 
        margin-bottom:0px; 
        border-bottom: 1px solid rgb(0, 0, 0);
    }

    .top-row-margin {
        margin-top: 10px;
    }

    .bottom-row-margin { 
        margin-bottom:0px; 
    }

    .cardStar {
        color: var(--husky-yellow);
    }

    .halfStarFill {
        position: absolute;
    }

    .cardStarFill {
        color: grey;
    }

    .cardRating {
        margin-left: 4px;
        font-weight: bold;
    }

    .stars {
        display: inline;
    }

</style>