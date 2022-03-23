<template>
    <div class="container card" >
        <div class="row justify-content-end bottom-margin top-row-margin">
            <div class="col">
                title
            </div>
            <div class="col-2 text-end">
                rating
            </div>
        </div>
        <div class="row bottom-margin">
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
        <div class="row bottom-margin">
            <div class="col">
                body
            </div>
        </div>
        <div class="row justify-content-end bottom-row-margin top-row-margin">
            <div class="col-3">
                <p class="text-end">
                    credibility
                </p>
            </div>
            <div class="col-1 text-center">
                <button type="button" class="btn btn-* btn-sm">
                    <i class="fa-solid fa-thumbs-up"></i>
                </button>
            </div>
            <div class="col-1  text-center">
                0
            </div>
            <div class="col-1  text-center">
                <button type="button" class="btn btn-* btn-sm">
                    <i class="fa-solid fa-thumbs-down"></i>
                </button>
            </div>
            <div class="col-1  text-center">
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

    .card {
        background-color: rgb(255,255,255);
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