<template>
    <div class="fixed-width container row" id='holder'>
        <Card >
        </Card>
        <div id="something">
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import { destination } from '../destination';
    import Card from "../components/Card";

    

    let reviews;
    
    async function dumb() {
        axios.get('http://' + destination.ip + ':4000/api', {
            //responseType: 'text',
            //transformResponse: [v => v]
        }).then(response => {
            reviews = response;
            console.log(response);
        })
            .catch((error) => {
            console.log(error)
        })
    }
    dumb();


    



    //let something = document.createElement("Card");
    //document.getElementById("holder").appendChild(something);
    window.onload = function thing(){
        let x = 0;
        let step = 0;
        const cards = [];
        while (step == x) {
            cards[step] = document.getElementById('ogCard').cloneNode(true);

            document.getElementById("title").innerHTML = String(reviews.data[step].title);
            document.getElementById("rating").innerHTML = String(reviews.data[step].rating);
            document.getElementById("className").innerHTML = String(reviews.data[step].class_name);
            document.getElementById("classID").innerHTML = String(reviews.data[step].class_id);
            document.getElementById("prof").innerHTML = String(reviews.data[step].prof);
            document.getElementById("body").innerHTML = String(reviews.data[step].body);
            document.getElementById("posScore").innerHTML = String(reviews.data[step].pos_score);
            document.getElementById("negScore").innerHTML = String(reviews.data[step].neg_score);

            document.getElementById("holder").append(cards[step]);
                if(String(reviews.data[step].body) == '')
            {
                step --;
            }
            step ++;
            x ++;
            console.log(step);
        
        }
    }
   
    
    

    

    export default {
        name: 'Review-holder',
        components: {
            Card
        },
        methods: {
            getData() {
                axios.get('http://' + destination.ip + ':4000/api', {
                    params: {body: 'no'}
                }).then(response => {
                    reviews = response;
                    console.log(response);
                })
                    .catch((error) => {
                    console.log(error)
                })
            }
        },  
        created() {
            this.getData();
        },
    }
</script>

<style>

</style>