<template>
    <div class="container card" >
        <div class="row justify-content-end bottom-margin top-row-margin cardRow">
            <div class="col">
                title
            </div>
            <div class="col-2 text-end">
                rating
            </div>
        </div>
        <div class="row bottom-margin cardRow">
            <div class="col right-border">
                class name
            </div>
            <div class="col right-border">
                class id
            </div>
            <div class="col">
                prof name
            </div>
        </div>
        <div class="row bottom-margin cardRow bodyText">
            <div class="col">
                body
            </div>
        </div>
        <div class="row justify-content-end align-items-center bottom-row-margin top-row-margin cardRow">
            <div class="col-3 credit">
                    credibility
            </div>
            <div class="col-1 text-center rating">
                <button type="button" class="btn btn-* btn-sm">
                    <i class="fa-solid fa-thumbs-up"></i>
                </button>
            </div>
            <div class="col-1 text-center rating">
                0
            </div>
            <div class="col-1 text-center rating">
                <button type="button" class="btn btn-* btn-sm">
                    <i class="fa-solid fa-thumbs-down"></i>
                </button>
            </div>
            <div class="col-1  text-center rating">
                0
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "review-card",
}
</script>

<style scoped>

    .row {
        padding: 0.2em;
    }

    .card {
        background-color: rgb(255,255,255);
        border-radius: 20px;
        height: 300px;
        margin-bottom: 20px;
    }

    @media only screen and (max-width: 600px) {
        .card {
            height: 200px;
        }
    }

    @media only screen and (min-width: 1300px) {
        .card {
            width: 30%;
        }
    }

    .bodyText {
        height: 60%;
    }

    .cardRow {
        color: blue;
        font-size: 0.85em;
    }

    .credit {
        padding: 0;
        text-align: end;
    }

    .rating {
        padding: 0.2em;
        max-width: 25px;
        margin-right: 10px;
    }

    .right-border {
         padding-right: 5px; 
         border-right: 1px solid rgb(0, 0, 0);
    }
    
    .bottom-margin { 
        margin-bottom:0px; 
        border-bottom: 1px solid rgb(0, 0, 0);
    }

    .top-row-margin {
        margin-top: 10px;
    }

    .bottom-row-margin { 
        margin-bottom:0px; 
    }

</style>