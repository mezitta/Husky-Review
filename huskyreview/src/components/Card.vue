<template>
    <div class="container card" @click="showModal=true">
        <div class="row justify-content-end bottom-margin top-row-margin cardRow topRow">
            <div class="col" id="title" >
                {{ cardTitle }}
            </div>
            <div class="col-5 text-end" id = "rating">
                <div class="stars">
                    <span v-for="(n, i) in Math.floor(cardRating)" v-bind:key="(n, i)" class="cardStar"><i class="fa-solid fa-star" /></span>
                    <span v-if="cardRating % 1 != 0" class="cardStar">
                        <span class="halfStarFill"><i class="fa-solid fa-star-half" /></span>
                    </span>
                    <span v-for="(n, i) in (5 - Math.floor(cardRating))" v-bind:key="(n, i)" class="cardStarFill"><i class="fa-solid fa-star" /></span>
                </div>
                <span class="cardRating">
                    {{ cardRating }}
                </span>
            </div>
        </div>
        <div class="row bottom-margin cardRow cardInfo">
            <div class="col-4 right-border" id = "className">
                {{ cardClassName }}
            </div>
            <div class="col-6 right-border" id = "classID">
                {{ cardClassId }}
            </div>
            <div class="col-6" id = "prof">
                {{ cardProfName }}
            </div>
        </div>
        <div class="row cardRow bodyText">
            <div class="col" id = "body">
                {{ cardBody }}
            </div>
        </div>
    </div>

    <transition name="fade" appear>
        <div class="modal-overlay" v-if="showModal" @click="showModal=false"/>
    </transition>
    <transition name="slide" appear>
        <div class="modal" v-if="showModal" @click="showModal=false">
            {{ cardTitle }}
            {{ cardRating }}
            {{ cardClassName }}
            {{ cardClassId }}
            {{ cardProfName }}
            {{ cardBody }}
        </div>
    </transition>

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
                // cardTitle: '',
                // cardClassId: '',
                // cardRating: '',
                // cardClassName: '',
                // cardProfName: '',
                // cardBody: '',
                // cardCredibility: '',
                // reviews: [],
                showModal: false,
            }
        },
        props: {
            cardTitle: String,
            cardClassId: String,
            cardClassName: String,
            cardRating: Number,
            cardProfName: String,
            cardBody: String,
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
    .modal-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 98;
        background-color: rgba(0, 0, 0, 0.3);
    }

    .modal {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 99;

        width: 100%;
        max-width: 400px;
        height: 400px;
        background-color: white;
        border-radius: 10px;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.5s ease-in-out;
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }

    .topRow {
        background-color: var(--card-title);
        border-radius: 20px 20px 0 0;
        min-height: 12%;
        display: inline-flex;
        align-items: center;
        overflow: hidden;
    }

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
       cursor: pointer;
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
            width: calc((100% / 3) - 0.75em);
        }
    }

    .bodyText {
        height: 75%;
        overflow: auto;
        scrollbar-width: none;
    }

    .bodyText::-webkit-scrollbar {
        -ms-oveflow-style: none;
        display: none;
    }

    .cardRow {
        color: black;
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
    }
    
    .bottom-margin { 
        margin-bottom:0px; 
        box-shadow: 0px 2px 2px var(--main-back-dark);
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

    #className {
        display: none;
    }

</style>