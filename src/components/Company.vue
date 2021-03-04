<template>
    <main class="background">
        <section class="container">
            <div class="title-background">
                <span class="inner">Company Overview</span>
            </div>

            <div class="flex-container">
                <span class="photo-container">
                    <img
                        src="../../public/images/colorado-sun.jpg"
                        alt="Company photo"
                        class="company-photo"
                    />
                </span>

                <div class="individual-bio-container">
                    <span class="my-text">
                        <h3>{{companyInfo.name}}</h3> <br>
                        <p>
                            {{companyInfo.bio}}
                        </p>
                        <p style="font-weight: bold;">
                            LinkedIn: 
                            <a class="linked-in-logo" v-bind:href="companyInfo.linkedIn">
                                <font-awesome-icon size="2x" :icon="['fab', 'linkedin']" />
                            </a>
                        </p>
                    </span>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import { getCompanyData } from '@/services/CompanyService';

export default {
    data(){
        return {
            companyInfo: {},
            error: null,
            loading: false
        }
    },

    mounted() {
        this.getCompanyInfo();
    },

    methods: {
        async getCompanyInfo() {
            try {
                this.loading = true;

                let response = await getCompanyData();
                this.companyInfo = response;

            } catch(err) {
                console.log(err);
                this.error = err.message;

            } finally {
                this.loading = false;
            }
        }
    }
};
</script>

<style scoped>
.background {
    max-width: 100%;
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;
}

a {
    color: black;
}

.linked-in-logo {
    color: white;
}

.flex-container {
    display: flex;
}

.individual-bio-container {
    background-color: black;
    opacity: 0.7;
    border-radius: 8px;
}

h3 {
    text-align: center;
}

p {
    text-align: left;
}

.company-photo {
    box-shadow: -2px -2px 2px rgba(34,34,34,0.6);
    border-radius: 8px;
}

/* Desktop */
@media only screen and (min-width: 64.063em){
    .background {
        background-image: url('../../public/images/clocktower_side.jpg');
    }
    
    .title-background {
        top: 10%;
        left: 5rem;
    }

    .inner {
        position: absolute;
        color: white;
        top: 5rem;
        left: 8rem;
        font-family: Bitter,serif;
        font-weight: bold;
        font-size: 3.2rem;
    }

    .container {
        height: 86rem;
    }

    .flex-container {
        padding-top: 25%;
    }
    
    .photo-container {
        flex: 1;
        padding-top: 4%;
    }

    .company-photo {
        height: 20rem;
        width: 30rem;
    }
    
    .individual-bio-container {
        flex: 1;
        background-color: black;
        opacity: 0.7;
        border-radius: 8px;
        margin-right: 10%;
        padding: 2%;
    }

    h3 {
        font-weight: bold;
        font-size: 1.7rem;
        font-family: Open Sans,sans-serif;
        color: white;
        margin-top: 3%;
    }

    p {
        font-family: Open Sans,sans-serif;
        font-size: 1.2rem;
        margin-top: 1rem;
        margin-left: 2rem;
        margin-right: 2rem;
        color: white;
    }

    hr {
        color: black;
        width: .1rem;
        height: 15rem;
        margin-left: 28rem;
    }
}


/* iPad Pro */
@media only screen and (min-width: 50.01em) and (max-width: 64em) {
    .background {
        background-image: url('../../public/images/clocktower_vertical.jpg');
        background-attachment: scroll;
        overflow: scroll;
        overflow-x: hidden;
        height: 50rem;
        margin-top: 5rem;
    }
    
    .container {
        height: 125rem;
    }

    .title-background {
        top: 2%;
        left: 4.5rem;
        margin-top: 3%;
    }

    .inner {
        position: absolute;
        color: white;
        top: 4rem;
        left: 2rem;
        font-family: Bitter,serif;
        font-weight: bold;
        font-size: 2.8rem;
    }

    .flex-container {
        flex-direction: column;
        padding-top: 32%;
    }

    h2 {
        font-weight: bold;
        font-size: 2.3rem;
        font-family: Bitter,serif;
    }

    h3 {
        font-weight: bold;
        font-size: 2.8rem;
        font-family: Open Sans,sans-serif;
        color: white;
    }

    .text {
        background-color: black;
        opacity: 0.7;
        border-radius: 8px;
        position: absolute;
        top: 30rem;
        left: 5.3rem;
        height: 65rem;
        width: 50rem;
    }

    p {
        font-family: Open Sans,sans-serif;
        margin-top: 1rem;
        margin-left: 1rem;
        margin-right: 1rem;
        font-size: 2rem;
        color: white;
    }

    .individual-bio-container {
        flex: 1;
        order: 1;
        margin: 0 5%;
        padding: 2%;
    }

    .photo-container {
        flex: 1;
        order: 2;
        padding-top: 4%;
    }

    .company-photo {
        width: 50rem;
        margin-top: 5%;
    }

    #company-bio {
        margin-bottom: 9rem;
        font-family: Open Sans,sans-serif !important;
    }
}

/* Tablet */
@media only screen and (min-width: 40.063em) and (max-width: 50em){
    .background {
        background-image: url('../../public/images/clocktower_vertical.jpg');
        background-attachment: scroll;
        overflow: scroll;
        overflow-x: hidden;
        height: 45rem;
        margin-top: 5rem;
    }
    
    .container {
        height: 110rem;
    }

    .title-background {
        top: 2%;
        left: 4.5rem;
        margin-top: 3%;
    }

    .flex-container {
        flex-direction: column;
        padding-top: 32%;
    }

    .inner {
        position: absolute;
        color: white;
        top: 3.2rem;
        left: 1.7rem;
        font-family: Bitter,serif;
        font-weight: bold;
        font-size: 2.5rem;
    }

    #bio-container {
        padding: 0.5rem;
        margin: 5rem 2rem;
    }

    .individual-bio-container {
        flex: 1;
        order: 1;
        margin: 7% 5% 0;
        padding: 2%;
    }

    h2 {
        font-weight: bold;
        font-size: 2.3rem;
        font-family: Bitter,serif;
    }

    h3 {
        font-weight: bold;
        font-size: 2.5rem;
        font-family: Open Sans,sans-serif;
        color: white;
    }

    p {
        font-family: Open Sans,sans-serif;
        margin-top: 1rem;
        margin-left: 1rem;
        margin-right: 1rem;
        font-size: 1.7rem;
        color: white;
    }

    .text {
        background-color: black;
        opacity: 0.7;
        border-radius: 8px;
        position: absolute;
        top: 25rem;
        left: 3.8rem;
        height: 58rem;
        width: 40rem;
    }

    .photo-container {
        flex: 1;
        order: 2;
        padding-top: 4%;
    }

    .company-photo {
        width: 35rem;
        margin-top: 5%;
    }

    #company-bio {
        margin-bottom: 9rem;
        font-family: Open Sans,sans-serif !important;
    }
}

/* Mobile */
@media only screen and (max-width: 40em){
    .background {
        background-image: url('../../public/images/clocktower_vertical.jpg');
        background-attachment: scroll;
        overflow: scroll;
        overflow-x: hidden;
        height: 35rem;
        margin-top: 5rem;
    }
    
    .container {
        height: 98rem;
    }

    .flex-container {
        flex-direction: column;
        padding-top: 32%;
    }

    .title-background {
        top: 2%;
        left: 6%;
        margin-top: 3%;
    }

    .inner {
        position: absolute;
        color: white;
        top: 2rem;
        left: 1.7rem;
        font-family: Bitter,serif;
        font-weight: bold;
        font-size: 2rem;
    }

    #bio-container {
        padding: 0.5rem;
        margin: 5rem 2rem;
    }

    .individual-bio-container {
        flex: 1;
        order: 1;
        margin: 25% 5% 0;
        padding: 2%;
    }

    h2 {
        font-weight: bold;
        font-size: 2.3rem;
        font-family: Bitter,serif;
    }

    h3 {
        font-weight: bold;
        font-size: 1.3rem;
        font-family: Open Sans,sans-serif;
        color: white;
        margin-top: 8%;
    }

    p {
        font-family: Open Sans,sans-serif;
        font-size: 1.2rem;
        margin-top: 1rem;
        margin-left: 1rem;
        margin-right: 1rem;
        color: white;
    }

    .text {
        background-color: black;
        opacity: 0.7;
        border-radius: 8px;
        position: absolute;
        top: 25rem;
        left: 1.5rem;
        height: 60rem;
        width: 20rem;
    }

    .photo-container {
        flex: 1;
        order: 2;
        padding-top: 4%;
    }

    .company-photo {
        width: 85%;
        margin-top: 13%;
    }

    #company-bio {
        margin-bottom: 9rem;
        font-family: Open Sans,sans-serif !important;
    }
}
</style>