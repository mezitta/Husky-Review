<template>
    <div class="review">
        <p>review page</p>
        <ReviewForm />
        <form action="">
            <div class="container-fluid">
                <div class="row">
                    <label for="">Title</label><br>
                    <input type="text" required v-model="title">
                </div>

                <div class="row">
                    <label for="">Professor</label><br>
                    <input type="text" required v-model="professor">
                </div>

                <div class="row">
                    <label for="">Class</label><br>
                    <input type="text" required v-model="className">
                </div>

                <div class="row">
                    <label for="">Review</label><br>
                    <input type="text" required v-model="review">
                </div>

                <div class="row">
                    <label for="">Rating</label><br>
                    <select required v-model="rating">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>

                <div class="row">
                    <button>Create Review</button>
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
</style>