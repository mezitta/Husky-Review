<template>
    <div class="container-fluid" id="formContent">
        <form v-on:submit.prevent="submitForm">
        <div class="row justify-content-center">
            <div class="col-sm-5 d-flex justify-content-center">
                <!-- <div class="content"> -->
                <!-- <label for="">Class Name</label><br> -->
                <input type="text" placeholder="Class Name" required v-model="addClassName">
                <!-- </div> -->
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-sm-5 d-flex justify-content-center">
                <!-- <div class="content"> -->
                <!-- <label for="">Class ID</label><br> -->
                <input type="text" placeholder="Class ID" required v-model="addClassId">
                <!-- </div> -->
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-sm-5 d-flex justify-content-center">
                <!-- <div class="content"> -->
                <!-- <label for="">Professor</label><br> -->
                <input type="text" placeholder="Professor" required v-model="addProf">
                <!-- </div> -->
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-sm-5 d-flex justify-content-center">
                <!-- <div class="content"> -->
                <!-- <label for="">Title</label><br> -->
                <input type="text" placeholder="Title" required v-model="addtTitle">
                <!-- </div> -->
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-sm-5 d-flex justify-content-center">
                <!-- <div class="content"> -->
                <!-- <label for="">Comments</label><br> -->
                <textarea rows="5" cols="25" id="reviewComments" placeholder="Comments" v-model="addBody"></textarea>
                <!-- </div> -->
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-sm-5 d-flex justify-content-center">
                <!-- <div class="content"> -->
                <!-- <label for="">Rating</label><br> -->
                <select required v-model="addRating" >
                    <option value="" disabled selected> Select Rating</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <!-- </div> -->
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-sm-5 d-flex justify-content-center">
                <!-- <div class="content"> -->
                <button type="submit" class="btn btn-primary" id="makeReview">Create Review</button>
                <!-- </div> -->
            </div>
        </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'New-Review',
    components:{
        
    },
    data() {
        return {
            title: '',
            prof: '',
            class_id: '',
            class_name: '',
            body: '',
            rating: ''
        }
    },
    methods: {
        submitForm() {
            axios.post('/api/add-review', {
                title:  this.addTitle,
                prof:   this.addProf,
                class_id:   this.addClassId,
                class_name: this.addClassName,
                body:   this.addBody,
                rating: this.addRating
            }).then(response => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error)
            })
        }
    }
};

</script>

<style>
    @import '../assets/main.css';

    .review{
        color: red;
    }

    #formContent {
        padding: 4em;
    }

    .formLine {
        margin-top: 50px;
    }

    input, textarea {
        border-radius: 8px;
        border: none;
        padding: 0.3em;
        max-width: 450px;
        width: 100%;
    }

    #reviewComments {
        height: 200px;
        width: 100%;
    }

    #makeReview {
        background-color: var(--husky-yellow);
        color: var(--dark-back);
        border: none;
        transition: all 0.3s;
    }

    #makeReview:hover {
        color: white;
        border-radius: 10px;
    }

    .row {
        margin-bottom: 1.5em;
    }
</style>