<template>
    <Nav />
    <div class="container-fluid d-flex justify-content-center aboutBody">
        <div class="bodyText">
            <h2 class="aboutHeader">What is Husky Review?</h2>
            <p>
            Husky review is a website that allows Michigan Tech students to make anonymous reviews for professors.
            The idea is that students that are scheduling classes often want to know which professors would better suit their learning style,
            being able to look up reviews for a given professor or class will give students the idea of which course or professor to pick.
            </p>
            <h2 class="aboutHeader">Why was this project created?</h2>
            <p>
            Husky Review was created as part of a team software project class where students must work as a team to create an app
            using a scrum development process.
            </p>

            <h2 class="aboutHeader tech">Technologies used</h2>
            <div class="row justify-content-center">
                <div class="col-lg-3 col-md-6 techContainer">
                    <img src='../assets/Technologies/vuelogo.png' height="50"/>
                </div>
                <div class="col-lg-3 col-md-6 techContainer">
                    <img src='../assets/Technologies/mongologo.png' height="50"/>
                </div>
                <div class="col-lg-3 col-md-6 techContainer">
                    <img src='../assets/Technologies/nodelogo.png' height="50"/>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-3 col-md-6 techContainer">
                    <img src='../assets/Technologies/axioslogo.png' height="50"/>
                </div>
                <div class="col-lg-3 col-md-6 techContainer">
                    <img src='../assets/Technologies/bootstraplogo.png' height="50"/>
                </div>
                <div class="col-lg-3 col-md-6 techContainer">
                    <img src='../assets/Technologies/expresslogo.png' height="50"/>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-3 col-md-6 techContainer">
                    <img src='../assets/Technologies/htmllogo.png' height="50"/>
                </div>
                <div class="col-lg-3 col-md-6 techContainer">
                    <img src='../assets/Technologies/csslogo.png' height="50"/>
                </div>
                <div class="col-lg-3 col-md-6 techContainer">
                    <img src='../assets/Technologies/javascriptlogo.png' height="50"/>
                </div>
            </div>

            <h2 class="aboutHeader devs">Developers</h2>
            <p class ="devs">
            Jacob Smith | Dawson Utley | Ben Walby<br>
            Nick Zamora | Michael Zitta
            </p>
        </div>
    </div>
</template>

<script>
    import Nav from "../components/Nav"
    
    export default {
        name: 'About-page',
        components: {
            Nav
        }
    };
</script>

<style scoped>
    .aboutBody {
        padding: 1em;
    }

    .bodyText {
        width: 90%;
    }
    
    .aboutHeader {
        margin-top: 2em;
    }

    .devs, .tech {
        text-align: center;
    }

    .techContainer {
        margin-bottom: 10px;
        text-align: center;
    }

    @media only screen and (min-width: 600px) {
        .bodyText {
            /* padding: 3em 10em; */
            width: 60%;
        }
    }
</style>