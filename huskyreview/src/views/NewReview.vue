<template>
    <Nav />
    <div class="container-fluid success" v-if="submitSuccess">
        <div class="row justify-content-center successRow">
            <div class="col-sm-5 d-flex justify-content-center successCol">
                <div class="d-flex align-items-center justify-content-center successMessage">Your Review Has Been Created Successfully</div>
            </div>
        </div>
    </div>
    <div class="container-fluid" id="formContent">
        <form v-on:submit.prevent="submitForm" v-if="!submitSuccess">
        <div class="row justify-content-center">
            <div class="col-sm-5 d-flex justify-content-center">
                <input type="text" placeholder="Class Name" required v-model="addClassName" id="className">
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-sm-5 d-flex justify-content-center">
                <input type="text" placeholder="Class ID" required v-model="addClassId" id="classId">
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-sm-5 d-flex justify-content-center">
                <input type="text" placeholder="Professor" required v-model="addProf" id="professor">
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-sm-5 d-flex justify-content-center">
                <input type="text" placeholder="Title" required v-model="addTitle" id='title'>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-sm-5 d-flex justify-content-center">
                <textarea rows="5" cols="25" id="reviewComments" placeholder="Comments" v-model="addBody"></textarea>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-sm-5 d-flex justify-content-center">
                <select required v-model="addRating" id="rating">
                    <option value="" disabled selected> Select Rating</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-sm-5 d-flex justify-content-center">
                <button type="submit" class="btn btn-primary" id="makeReview">Create Review</button>
            </div>
        </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
import { destination } from '../destination';
import Nav from "../components/Nav"
// import func from 'vue-editor-bridge';

export default {
    name: 'New-Review',
    components:{
        Nav
    },
    data() {
        return {
            addTitle: '',
            addProf: '',
            addClassId: '',
            addClassName: '',
            addBody: '',
            addRating: '',
            submitSuccess: false,
        }
    },
    methods: {
        submitForm() {
            axios.post('http://' + destination.ip + ':4000/api/add-review', {
                title:  this.addTitle,
                prof:   this.addProf,
                class_id:   this.addClassId,
                class_name: this.addClassName,
                body:   this.addBody,
                rating: this.addRating,
            }).then(response => {
                console.log(response);
                this.submitSuccess = true;
            })
            .catch((error) => {
                console.log(error)
            })

            this.addTitle = '';
            this.addProf = '';
            this.addClassId = '';
            this.addClassName = '';
            this.addBody = '';
            this.addRating = '';
        }
    },
    mounted () {
        // const submitBtn = document.getElementById('makeReview');

        // submitBtn.addEventListener('click', function handleClick(event) {
        //     event.preventDefault();

        //     const titleInput = document.getElementById('title');
        //     const classNameInput = document.getElementById('className');
        //     const classIdInput = document.getElementById('classId');
        //     const professorInput = document.getElementById('professor');
        //     const bodyInput = document.getElementById('reviewComments');
        //     const ratingInput = document.getElementById('rating');

        //     titleInput.value = '';
        //     classNameInput.value = '';
        //     classIdInput.value = '';
        //     professorInput.value = '';
        //     bodyInput.value = '';
        //     ratingInput.value = '';
        // });
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

    .success {
        height: 10vh;
        margin-top: 20px;
        padding: 1em;
        text-align: center;
    }

    .successMessage {
        height: 100%;
        width: 100%;
        color: green;
        background-color: rgb(152, 235, 152);
        border-radius: 10px;
    }

    .successRow {
        height: 100%;
    }
</style>
