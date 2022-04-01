<template>
    <Nav />
    <div class="container-fluid d-flex justify-content-center aboutBody">
        <div class="bodyText">
            <h2 class="aboutHeader">What is Husky Review?</h2>
            <p>
            Husky review is a website that allows Michigan Tech students to create reviews for professors.
            The idea is that students that are scheduling classes often want to know which professors would better suit their learning style,
            being able to look up reviews for a given professor or class will give students the idea of which course or professor to pick.
            </p>
            <h2 class="aboutHeader">Why was this project created?</h2>
            <p>
            Husky Review was created as part of a team software project class where students must work as a team and create an app.
            </p>

            <h2 class="aboutHeader">What was used to make the project?</h2>
            <p>
            Husky Review uses the MEVN stack.
            </p>

            <h2 class="aboutHeader devs">Developers</h2>
            <p class ="devs">
            Jacob Smith | Dawson Utley | Ben Walby | Nick Zamora | Michael Zitta
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

    .devs {
        text-align: center;
    }

    @media only screen and (min-width: 600px) {
        .bodyText {
            /* padding: 3em 10em; */
            width: 60%;
        }
    }
</style>