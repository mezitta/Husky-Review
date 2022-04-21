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
                <input type="text" placeholder="Class ID (e.g. CS3141)" required v-model="addClassId" id="classId">
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-sm-5 d-flex justify-content-center">
                <input type="text" placeholder="Professor" required v-model="addProf" id="professor">
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-sm-5 d-flex justify-content-center">
                <input type="text" placeholder="Title" required v-model="addTitle" id='title' maxlength="20">
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
                <star-rating v-model:rating="addRating"
                    :increment='0.5'
                    active-color='#000000'
                    :star-size='40'>
                </star-rating>
            </div>
        </div>
        <div class="row justify-content-center captchaContainer">
            <CaptchaContainer :key="reloadCaptcha" />
        </div>
        <div class="row justify-content-center" style="color:red" v-if="!captchaSuccess">
            Invalid response or Class ID. Please try again.
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
import CaptchaContainer from "../components/CaptchaContainer";
import Nav from '../components/Nav';
import StarRating from 'vue-star-rating';
// import func from 'vue-editor-bridge';

export default {
    name: 'New-Review',
    components:{
        CaptchaContainer,
        Nav,
        StarRating
    },
    data() {
        return {
            addTitle: '',
            addProf: '',
            addClassId: '',
            addBody: '',
            addRating: 0,
            submitSuccess: false,
            countdownText: '',
            timeleft: 10,
            reloadCaptcha: 0,
            captchaSuccess: true
        }
    },
    methods: {
        cleanText(text, badWords) {
            let replacement = "";
            let textLower = text.toLowerCase()
            let same = true;
            for (let i = 0 ; i < badWords.length ; i ++) {
                if (textLower.includes(badWords[i])) {
                    for(let j = 0 ; j < text.length ; j ++) {
                        for(let b = 0 ; b < badWords[i].length ; b ++) { 
                            if(textLower[j + b] != badWords[i][b]) {
                                same = false;
                                continue;
                            }
                        }
                        if (same) {
                            for(let b = 0 ; b < badWords[i].length ; b ++) {
                                replacement += "*"
                            }
                            text = text.substring(0, j) + replacement + text.substring(j+badWords[i].length);
                            replacement = "";
                        }
                        same = true;
                    }
                }
            }
            return text;
        },

        submitForm(e) {
            // Collect any regular HTML form input across entire page.
            const formData = new FormData(e.target);

            //var xmlhttp = new XMLHttpRequest();
            //xmlhttp.open('GET', "huskyreview/src/assets/badWords - Sheet1.csv", false);
            //xmlhttp.send();
            //xmlhttp.responseType = 'text';
            //const badWords = xmlhttp.responseText.toLowerCase().split(",");
            const badWords = ["bad", "word"];

            this.addBody = this.cleanText(this.addBody, badWords);
            this.addTitle = this.cleanText(this.addTitle, badWords);
            axios.post('http://' + destination.ip + ':4000/api/add-review', {
                title:  this.addTitle,
                prof:   this.addProf,
                class_id:   this.addClassId,
                body:   this.addBody,
                rating: this.addRating,
                captcheck_selected_answer: formData.get('captcheck_selected_answer'),
                captcheck_session_code: formData.get('captcheck_session_code')
            }).then(response => {
                console.log(response);
                this.submitSuccess = true;
                this.countDown();
                // Clear input fields.
                this.addTitle = '';
                this.addProf = '';
                this.addClassId = '';
                this.addBody = '';
                this.addRating = 0;
            })
            .catch((error) => {
                // Regenerate CAPTCHA after failure invalidates session.
                this.reloadCaptcha += 1;
                console.log(error)
                this.captchaSuccess = false;
            })
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
        border: 1px solid var(--husky-yellow);
        transition: all 0.3s;
        margin-top: 10px;
    }

    #makeReview:hover {
        color: white;
        box-shadow: inset 0 -3.25em 0 0 rgb(73, 73, 73);
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

    .captchaContainer {
        text-align: center;
    }
</style>
