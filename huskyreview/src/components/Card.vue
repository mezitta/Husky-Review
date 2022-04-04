<template>
<!-- <div v-for="review in reviews" :key="review.class_id"> -->
<div class="cards">
    <div class="container card" id="ogCard" v-for="review in reviews" :key="review.class_id">
        <div class="row justify-content-end bottom-margin top-row-margin cardRow">
            <div class="col" id="title" >
                {{review.title}}
            </div>
            <div class="col-2 text-end" id = "rating">
                {{review.rating}}/5
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
        <div class="row justify-content-end align-items-center bottom-row-margin top-row-margin cardRow">
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
        </div>
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
                reviews: []
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

    .row {
        padding: 0.2em;
    }

    .cards {
        margin: auto;
        width: 90%;
    }

    .card {
        background-color: rgb(255,255,255);
        border-radius: 20px;
        height: 300px;
        margin-bottom: 20px;
        width: 50%;
        display: inline-flex;
    }

    @media only screen and (max-width: 600px) {
        .card {
            height: 200px;
            width:100%;
        }
    }

    @media only screen and (min-width: 1300px) {
        .card {
            width: calc(100% / 3);
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

</style>