<template>
    <div class="row container" id='holder'>
        <div v-for="review in reviews" :key="review.class_id">
            <Card :reviewBody="cardBody"/>
            {{review.body}}
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import Card from "../components/Card";
    import { destination } from '../destination';
    

    // let reviews;
    
    // async function dumb() {
    //     axios.get('http://' + destination.ip + ':4000/api', {
    //         //responseType: 'text',
    //         //transformResponse: [v => v]
    //     }).then(response => {
    //         reviews = response;
    //         console.log(response);
    //     })
    //         .catch((error) => {
    //         console.log(error)
    //     })
    // }
    // dumb();

    // window.onload = function thing(){
    //     let x = 0;
    //     let step = 0;
    //     const cards = [];
    //     while (step == x) {
    //         cards[step] = document.getElementById('ogCard').cloneNode(true);

    //         document.getElementById("title").innerHTML = String(reviews.data[step].title);
    //         document.getElementById("rating").innerHTML = String(reviews.data[step].rating);
    //         document.getElementById("className").innerHTML = String(reviews.data[step].class_name);
    //         document.getElementById("classID").innerHTML = String(reviews.data[step].class_id);
    //         document.getElementById("prof").innerHTML = String(reviews.data[step].prof);
    //         document.getElementById("body").innerHTML = String(reviews.data[step].body);
    //         document.getElementById("posScore").innerHTML = String(reviews.data[step].pos_score);
    //         document.getElementById("negScore").innerHTML = String(reviews.data[step].neg_score);

    //         document.getElementById("holder").append(cards[step]);
    //             if(String(reviews.data[step].body) == '')
    //         {
    //             step --;
    //         }
    //         step ++;
    //         x ++;
    //         console.log(step);
        
    //     }
    // }
   
    export default {
        name: 'Review-holder',
        components: {
            Card
        }, data() {
            return {
                reviews: [],
                reviewBody: ''
            }
        },
        methods: {
            getData() {
                axios.get('http://' + destination.ip + ':4000/api', {
                    params: {body: 'no'}
                }).then(response => {
                    this.reviews = response.data;
                    console.log(this.reviews);
                    console.log(this.reviews[0].body)
                    this.reviewBody = this.reviews[0].body
                })
                    .catch((error) => {
                    console.log(error)
                })
            }
        },  
        created() {
            this.getData();
        },
        mounted() {
            
        }
    }
</script>

<style>

</style>