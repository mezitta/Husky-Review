<template>
    <div class="container card" @click="showModal=true">
        <div class="row justify-content-end bottom-margin top-row-margin cardRow topRow cardHeader">
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
        <div class="row bottom-margin cardRow cardInfo cardHeader">
            <div class="col-3 right-border" id="className">
                {{ cardClassName }}
            </div>
            <div class="col-3 right-border" id="classID">
                {{ cardClassId }}
            </div>
            <div class="col-6" id="prof">
                {{ cardProfName }}
            </div>
        </div>
        <div class="row cardRow bodyText">
            <div class="col" id="body">
                {{ cardBody }}
            </div>
        </div>
    </div>

    <transition name="fade" appear>
        <div class="modal-overlay" v-if="showModal" @click="showModal=false"/>
    </transition>
    <transition name="slide-fade" appear>
        <div class="cardModal" v-if="showModal">
            <div class="fluid-container">
                <div class="row modalExitRow">
                    <div class="col text-end modalExit" @click="showModal=false"><i class="fa-solid fa-xmark"></i></div>
                </div>
                <div class="row modalRow modalTitleRow">
                    <div class="col-11 modalTitle"><h2>{{ cardTitle }}</h2></div>
                </div>
                <div class="row modalRow modalSubtTitleRow">
                    <div class="col-3 modalSubTitle modalSubTitleLeft">
                        {{ cardClassId }}
                    </div>
                    <div class="col modalSubTitle">
                        {{ cardProfName }}
                    </div>
                </div>
                <div class="row modalRow modalNumberRow">
                    <span class="modalCardRating">{{ cardRating }}</span>
                </div>
                <div class="row modalRow modalRatingRow">
                    <div class="col d-flex align-items-center modalRating">
                        <div class="modalStars">
                            <span v-for="(n, i) in Math.floor(cardRating)" v-bind:key="(n, i)" class="cardStar"><i class="fa-solid fa-star" /></span>
                            <span v-if="cardRating % 1 != 0" class="cardStar">
                                <span class="halfStarFill"><i class="fa-solid fa-star-half" /></span>
                            </span>
                            <span v-for="(n, i) in (5 - Math.floor(cardRating))" v-bind:key="(n, i)" class="cardStarFill"><i class="fa-solid fa-star" /></span>
                        </div>
                    </div>
                </div>
                
                <div class="row modalRow modalBodyText">
                     {{ cardBody }}
                </div>
            </div>
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

    .cardModal {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 99;
        overflow: hidden;

        width: 95%;
        max-width: 700px;
        height: 90%;
        padding: 0.5em 1em 1em 1em;
        background-color: rgb(255,255,255);;
        border-radius: 10px;
        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
    }

    
    .slide-fade-enter-active,
    .slide-fade-leave-active {
        transition: transform 0.3s ease-in-out;
    }

    .slide-fade-enter-from,
    .slide-fade-leave-to {
        transform: translateY(100vh) translateX(-50%);
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.5s ease-in-out;
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }

    #title {
        font-weight: bold;
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
        border-radius: 10px;
        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);

        position: relative;
        top: 0;

        transition: all 0.3s;
    }

    .card:hover {
       top: -10px;
       box-shadow: 0 12px 12px rgba(0, 0, 0, 0.3);
       cursor: pointer;
    }

    @media only screen and (max-width: 600px) {
        .card {
            height: 200px;
            width:100%;

            margin-left: 0;
            margin-right: 0;
        }

        .topRow {
            height: 25%;
            padding-bottom: 0.1em;
        }

        #title {
            font-size: 0.9em;
        }

        .modalBodyText {
            height: 50vh;
            overflow: auto;
            scrollbar-width: none;
        }

        .modalBodyText::-webkit-scrollbar {
            -ms-oveflow-style: none;
            display: none;
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

    .cardInfo {
        color: rgb(85, 85, 85);
    }

    .modalRow {
        padding: 0 1em 0 1em;
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

    .topRow {
        /* background-color: var(--card-title); */
        box-shadow: none;
        border-radius: 10px 10px 0 0;
        padding-top: 2%;
        min-height: 8%;
        display: inline-flex;
        align-items: center;
        overflow: hidden;
    }

    /* .cardHeader {
        background-color: var(--husky-yellow);
    } */

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

    .modalCardRating {
        font-size: 1.75em;
        font-weight: bold;
        padding-left: 0;
    }

    .stars {
        display: inline;
    }

    .modalStars {
        display: inline;
        text-align: left;
        width: 100%;
    }

    .modalRating {
        padding: 0;
    }

    .modalTitleRow {
        margin-bottom: 0;
    }

    .modalRatingRow {
        font-size: 1.25em;
        padding-left: 0.75em;
        padding-bottom: 10px;
        border-bottom: 1px solid rgba(68, 68, 68, 0.5);
    }

    .modalNumberRow {
        margin-bottom: 0;
    }

    .modalSubtTitleRow {
        margin-bottom: 5px;
    }

    .modalExitRow {
        height: 10px;
        text-align: right;
        margin-bottom: 10px;
    }

    .modalExit {
        cursor: pointer;
        color: rgb(119, 119, 119);
        height: 1px;
        transition: all 0.3s;
    }

    .modalExit:hover {
        color: rgb(73, 73, 73);
        text-shadow: 1px 1px 1px grey;
    }

    .modalTitle {
        padding: 0;
    }

    .modalSubTitle {
        text-align: left;
        padding-left: 0.1em;
        color: rgb(85, 85, 85);
    }

    .modalSubTitleLeft {
        max-width: 100px;
    }

    #className {
        display: none;
    }

</style>