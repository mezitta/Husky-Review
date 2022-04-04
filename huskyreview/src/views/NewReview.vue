<template>
    <Nav />
    <div class="container-fluid success" v-if="submitSuccess">
        <div class="row justify-content-center successRow">
            <div class="col-sm-5 d-flex justify-content-center successCol">
                <div class="d-flex align-items-center justify-content-center successMessage">Your Review Has Been Created Successfully</div>
            </div>
        </div>
        <div class="row justify-content-center successRow">
            <div class="col-sm-5 d-flex justify-content-center successCol">
                <div id="countdown">Page Will Refresh in: {{ timeleft }} seconds</div>
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
        <div class="row justify-content-center ratingText">Class Rating</div>
        <div class="row justify-content-center">
            <div class="col-sm-5 d-flex justify-content-center">
                <!-- <select required v-model="addRating" id="rating">
                    <option value="" disabled selected> Select Rating</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select> -->
                <star-rating v-model:rating="addRating"
                    :increment='0.5'
                    active-color='#000000'
                    :star-size='40'>
                </star-rating>
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
import Nav from '../components/Nav';
import StarRating from 'vue-star-rating';
// import func from 'vue-editor-bridge';

export default {
    name: 'New-Review',
    components:{
        Nav,
        StarRating
    },
    data() {
        return {
            addTitle: '',
            addProf: '',
            addClassId: '',
            addClassName: '',
            addBody: '',
            addRating: 0,
            submitSuccess: false,
            countdownText: '',
            timeleft: 10,
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
                this.countDown();
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
        },

        countDown() {
          const timer = setInterval(() => {
            if (this.timeleft > 0) {
              this.timeleft--;
            } else {
              clearInterval(timer);
              location.reload();
            }
          }, 1000);
        },
    },
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
        margin-top: 10px;
    }

    #makeReview:hover {
        color: white;
        border-radius: 10px;
    }

    .row {
        margin-bottom: 1.5em;
    }

    .success {
        height: 100px;
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

    .vue-star-rating-rating-text {
        display: none;
    }

    .ratingText {
        margin-bottom: 10px;
        padding-top: 20px;
        font-weight: bold;
        font-size: 1.25em;
    }
</style>
