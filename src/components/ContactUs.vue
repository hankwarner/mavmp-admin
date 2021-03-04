<template>
    <div>
        <section class="container" style="top: 0.7rem;">
            <img
                src="../../public/images/mountains_2.jpeg"
                alt="Mountains"
                class="cover-photo"
            >
            <div class="title-background">
                <span class="title-inner-text">Contact Us</span>
            </div>
        </section>
        <section class="container" id="form-background">
            <form method="POST">
                <div class="form-container">
                    <article>
                        <div class="form-header">
                            <h2>
                                Contact Us
                            </h2>
                        </div>
                        <hr>
                        <div :class="{ 'form-group': true, 'form-group--error': $v.name.$error }">
                            <b-field class="form-label" label="Name*">
                                <b-input v-model.trim="$v.name.$model"></b-input>
                            </b-field>
                        </div>
                        <b-message v-if="$v.name.$error" type="is-danger">
                            Name is required.
                        </b-message>
                        <div class="form-group">
                            <b-field class="form-label" label="Email">
                                <b-input v-model.trim="email"></b-input>
                            </b-field>
                            <b-field class="form-label" label="Phone">
                                <b-input v-model.trim="phone"></b-input>
                            </b-field>
                        </div>
                        <div :class="{ 'form-group': true, 'form-group--error': $v.question.$error }">
                            <b-field class="form-label" label="How may we assist you?*">
                                <b-input v-model.trim="$v.question.$model" maxlength="200" type="textarea"></b-input>
                            </b-field>
                        </div>
                        <b-message type="is-danger" v-if="$v.question.$error">
                            Please complete the question above.
                        </b-message>
                        <div class="buttons">
                            <b-button v-if="$v.$invalid" disabled expanded>
                                    Submit
                            </b-button>
                            <b-button 
                                v-else @click="contactUs" type="is-success" expanded>
                                    Submit
                            </b-button>
                            <b-loading :active.sync="loading" :can-cancel="true"></b-loading>
                        </div>
                        <b-notification v-if="success" type="is-success" has-icon>
                            {{successMessage}}
                        </b-notification>
                        <b-notification v-if="error" type="is-danger" has-icon>
                            {{error}}
                        </b-notification>
                    </article>
                </div>
            </form>
        </section>
    </div>
</template>

<script>
import { sendContactRequest } from '@/services/EmailService';
import { required } from 'vuelidate/lib/validators'

export default {
    data() {
        return {
            loading: false,
            name: '',
            email: '',
            phone: '',
            question: '',
            error: null,
            success: null,
            successMessage: 'Message successfully delivered!',
        }
    },
    validations: {
        name: {
            required
        },
        question: {
            required
        }
    },
    methods: {
        async contactUs() {
            this.loading = true;
            this.error = null;

            try {
                // Run form validation
                this.$v.$touch();

                if(this.$v.$invalid){
                    this.error = 'Please ensure all required fields are completed.';
                    this.success = false;

                } else {
                    await sendContactRequest({
                        name: this.name,
                        email: this.email,
                        phone: this.phone,
                        question: this.question,
                    });

                    this.success = true;
                    this.resetData();

                    // Clear form validation so error messages won't show after form is cleared. Sets $dirty to false
                    this.$v.$reset();
                }
            } catch(err) {
                console.log(err);
                this.error = 'There was a problem submitting your request. Please try again later.';
                this.success = false;

            } finally {
                this.loading = false;
            }
        },
        
        resetData() {
            this.name = '';
            this.email = '';
            this.phone = '';
            this.question = '';
        }
    }
}
</script>

<style scoped>
#form-background {
    position: relative;
    background-color: rgba(0,0,0,0.8);
}

.buttons {
    font-family: Bitter,serif;
}

.form-container {
    margin: 0 auto;
}

.form-group{
    margin-bottom: .5%;
}

.form-label {
    text-align: left;
}

/* Desktop */
@media only screen and (min-width: 64.063em){
    .title-background {
        left: 55%;
    }

    .title-inner-text {
        position: absolute;
        color: white;
        top: 5rem;
        left: 8rem;
        font-family: Bitter,serif;
        font-weight: bold;
        font-size: 3.2rem;
    }

    .form-container {
        position: relative;
        width: 70rem;
        padding: 3% 0 10%;
    }

    .form-header {
        text-align: left;
        font-family: Bitter,serif;
        font-size: 2.2rem;
        color: white;
    }

    hr {
        color: black;
        width: 70rem;
        height: 0.1rem;
    }

    .form-label {
        margin-top: 2rem;
    }
}


/* iPad Pro */
@media only screen and (min-width: 50.01em) and (max-width: 64em) {
    .title-background {
        left: 47%;
    }

    .title-inner-text {
        position: absolute;
        color: white;
        top: 2rem;
        left: 3rem;
        font-family: Bitter,serif;
        font-weight: bold;
        font-size: 3.5rem;
    }

    .form-container {
        width: 55rem;
        padding: 5% 0 9%;
    }

    .form-header {
        text-align: left;
        font-family: Bitter,serif;
        font-size: 2.2rem;
        color: white;
    }
}


/* Tablet */
@media only screen and (min-width: 40.01em) and (max-width: 50em) {
    .title-background {
        left: 35%;
    }

    .title-inner-text {
        position: absolute;
        color: white;
        top: 2rem;
        left: 3rem;
        font-family: Bitter,serif;
        font-weight: bold;
        font-size: 3.5rem;
    }

    .form-container {
        width: 40rem;
        padding: 5% 0 12%;
    }

    .form-header {
        text-align: left;
        font-family: Bitter,serif;
        font-size: 2.2rem;
        color: white;
    }
}


/* Mobile */
@media only screen and (max-width: 40em) {
    .title-background {
        left: 1.5rem;
    }

    .title-inner-text {
        position: absolute;
        color: white;
        top: 2rem;
        left: 1.7rem;
        font-family: Bitter,serif;
        font-weight: bold;
        font-size: 2rem;
    }

    .form-container {
        position: relative;
        width: 20rem;
        padding: 10% 0 30%;
    }

    .form-header {
        text-align: left;
        font-family: Bitter,serif;
        font-size: 1.5rem;
        color: white;
    }

    hr {
        color: black;
        width: 20rem;
        height: 0.1rem;
    }

    .form-label {
        margin-top: 2rem;
    }
}
</style>
