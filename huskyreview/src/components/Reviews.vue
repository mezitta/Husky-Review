<template>
    <div class="cards" id='holder'>
        <span  v-for="review in filteredReviews" :key="review.class_id">
            <Card 
                :cardTitle="review.title"
                :cardRating="review.rating" 
                :cardClassName="review.class_name" 
                :cardClassId="review.class_id" 
                :cardProfName="review.prof"
                :cardBody="review.body"
            />
        </span>
    </div>
</template>

<script>
    import axios from 'axios';
    import Card from "../components/Card";
    import { destination } from '../destination';
    
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
        props: {
            filteredReviews: Array,
            filter: Boolean
        },
        methods: {
            getData() {
                axios.get('http://' + destination.ip + ':4000/api', {
                    params: {body: 'no'}
                }).then(response => {
                    this.reviews = response.data;
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
 .cards {
     margin: auto;
     width: 90%;
 }
</style>