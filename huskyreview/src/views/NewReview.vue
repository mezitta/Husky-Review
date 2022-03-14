<template>
    <div class="review">
        <p>review page</p>
        <ReviewForm />
        <form action="">
            <div class="container-fluid" id="formContent">
                <div class="row justify-content-center">
                    <div class="col-sm-5 d-flex justify-content-center">
                        <div class="content">
                        <label for="">Title</label><br>
                        <input type="text" required v-model="title">
                        </div>
                    </div>
                </div>

                <div class="row justify-content-center">
                    <div class="col-sm-5 d-flex justify-content-center">
                        <div class="content">
                        <label for="">Professor</label><br>
                        <input type="text" required v-model="professor">
                        </div>
                    </div>
                </div>

                <div class="row justify-content-center">
                    <div class="col-sm-5 d-flex justify-content-center">
                        <div class="content">
                        <label for="">Class</label><br>
                        <input type="text" required v-model="className">
                        </div>
                    </div>
                </div>

                <div class="row justify-content-center">
                    <div class="col-sm-5 d-flex justify-content-center">
                        <div class="content">
                        <label for="">Review</label><br>
                        <input type="text" required v-model="review">
                        </div>
                    </div>
                </div>

                <div class="row justify-content-center">
                    <div class="col-sm-5 d-flex justify-content-center">
                        <div class="content">
                        <label for="">Rating</label><br>
                        <select required v-model="rating">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        </div>
                    </div>
                </div>

                <div class="row justify-content-center">
                    <div class="col-sm-5 d-flex justify-content-center">
                        <div class="content">
                        <button>Create Review</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
// import axios from 'axios';
import ReviewForm from "../components/NewReviewForm"

export default {
    name: 'New-Review',
    components:{
        ReviewForm
    },
    data() {
        return {
            title: '',
            professor: '',
            className: '',
            reivew: '',
            rating: ''
        }
    }
};

</script>

<style>
    .review{
        color: red;
    }

    #formContent {
        padding: 4em;
    }

    .formLine {
        margin-top: 50px;
    }

    
</style>