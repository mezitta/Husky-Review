<template>
    <div class="container-fluid" id="formContent">
        <form action="">
        <div class="row justify-content-center">
            <div class="col-sm-5 d-flex justify-content-center">
                <!-- <div class="content"> -->
                <!-- <label for="">Class Name</label><br> -->
                <input type="text" placeholder="Class Name" required v-model="class_name">
                <!-- </div> -->
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-sm-5 d-flex justify-content-center">
                <!-- <div class="content"> -->
                <!-- <label for="">Class ID</label><br> -->
                <input type="text" placeholder="Class ID" required v-model="class_id">
                <!-- </div> -->
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-sm-5 d-flex justify-content-center">
                <!-- <div class="content"> -->
                <!-- <label for="">Professor</label><br> -->
                <input type="text" placeholder="Professor" required v-model="prof">
                <!-- </div> -->
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-sm-5 d-flex justify-content-center">
                <!-- <div class="content"> -->
                <!-- <label for="">Title</label><br> -->
                <input type="text" placeholder="Title" required v-model="title">
                <!-- </div> -->
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-sm-5 d-flex justify-content-center">
                <!-- <div class="content"> -->
                <!-- <label for="">Comments</label><br> -->
                <textarea rows="5" cols="25" id="reviewComments" placeholder="Comments" v-model="body"></textarea>
                <!-- </div> -->
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-sm-5 d-flex justify-content-center">
                <!-- <div class="content"> -->
                <!-- <label for="">Rating</label><br> -->
                <select required v-model="rating" >
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
                <button type="button" class="btn btn-primary" id="makeReview">Create Review</button>
                <!-- </div> -->
            </div>
        </div>
        </form>
    </div>
</template>

<script>
// import axios from 'axios';

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