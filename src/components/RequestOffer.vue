<template>
	<div>
		<section class="container" style="top: 0.8rem;">
			<img
				src="../../public/images/desert_horses.jpg"
				alt="Horses in the desert"
				class="cover-photo"
			/>
			<div class="title-background">
				<span class="inner">Request an Offer</span>
			</div>
		</section>
		<section class="container" id="form-background">
			<form method="POST">
				<div class="form-container">
					<article id="basic-info">
						<div class="form-header">
							<h2>
								Request an Offer
							</h2>
							<p class="sub-header">
								Please fill out the fields below.
							</p>
						</div>
						<hr />
						<div class="columns">
							<b-field
								label="First Name*"
								class="column"
							>
								<b-input
									v-model.trim="$v.firstName.$model"
									:class="{
										'input--error': $v.firstName.$error,
									}"
								></b-input>
							</b-field>
							<b-field
								label="Last Name*"
								:class="{
									column: true,
									'column--error': $v.lastName.$error,
								}"
							>
								<b-input
									v-model.trim="$v.lastName.$model"
								></b-input>
							</b-field>
						</div>
						<b-message v-if="$v.firstName.$error" type="is-danger">
							First name is required.
						</b-message>
						<b-message v-if="$v.lastName.$error" type="is-danger">
							Last name is required.
						</b-message>
						<div class="columns">
							<b-field
								label="Phone*"
								:class="{
									column: true,
									'column--error': $v.phone.$error,
								}"
							>
								<b-input
									v-model.trim="$v.phone.$model"
								></b-input>
							</b-field>
							<b-field
								label="Email"
								:class="{
									column: true,
									'column--error': $v.email.$error,
								}"
							>
								<b-input
									v-model.trim="$v.email.$model"
								></b-input>
							</b-field>
						</div>
						<b-message v-if="$v.phone.$error" type="is-danger">
							Phone number is required.
						</b-message>
						<b-message v-if="$v.email.$error" type="is-danger">
							Please provide a valid email address.
						</b-message>
					</article>
					<article id="property-info">
						<div class="form-header">
							<h4>
								Property Information
							</h4>
							<p class="sub-header">
								Please fill out to the best of your ability.
							</p>
						</div>
						<hr />
						<div class="columns"></div>
						<div class="columns">
							<b-field
								class="column"
								label="Property Description"
							>
								<b-input v-model="description"></b-input>
							</b-field>
							<b-field
								class="column"
								label="Number of Acres"
							>
								<b-input v-model="acres"></b-input>
							</b-field>
						</div>
						<div class="columns">
							<b-field
								class="column"
								label="County"
							>
								<b-input v-model="county"></b-input>
							</b-field>
							<b-field
								class="column"
								label="State"
							>
								<b-input v-model="state"></b-input>
							</b-field>
						</div>
						<div class="columns">
							<div class="column">
								<section>
									<h4 class="property-question">
										Is Your Property Currently Leased?
									</h4>
									<div class="field">
										<b-radio
											v-model="leased"
											native-value="Yes"
											type="is-white"
											name="leased"
										>
											Yes
										</b-radio>
									</div>
									<div class="field">
										<b-radio
											v-model="leased"
											native-value="No"
											type="is-white"
											name="leased"
										>
											No
										</b-radio>
									</div>
									<div class="field">
										<b-radio
											v-model="leased"
											native-value="I don't know"
											type="is-white"
											name="leased"
										>
											I don't know
										</b-radio>
									</div>
								</section>
							</div>
							<div class="column">
								<section>
									<h4 class="property-question">
										Is Your Property Currently Producing?
									</h4>
									<div class="field">
										<b-radio
											v-model="producing"
											native-value="Yes"
											type="is-white"
											name="producing"
										>
											Yes
										</b-radio>
									</div>
									<div class="field">
										<b-radio
											v-model="producing"
											native-value="No"
											type="is-white"
											name="producing"
										>
											No
										</b-radio>
									</div>
									<div class="field">
										<b-radio
											v-model="producing"
											native-value="I don't know"
											type="is-white"
											name="producing"
										>
											I don't know
										</b-radio>
									</div>
								</section>
							</div>
						</div>
						<div class="columns">
							<b-field
								class="column"
								label="Additional Comments"
							>
								<b-input
									v-model="comments"
									maxlength="200"
									type="textarea"
								></b-input>
							</b-field>
						</div>
						<div class="buttons">
							<b-button v-if="$v.$invalid" disabled expanded>
								Submit
							</b-button>
							<b-button
								v-else
								@click="requestOffer"
								type="is-success"
								expanded
							>
								Submit
							</b-button>
							<b-loading
								:active.sync="loading"
								:can-cancel="true"
							></b-loading>
						</div>
						<b-notification
							v-if="success"
							type="is-success"
							has-icon
						>
							{{ successMessage }}
						</b-notification>
						<b-notification v-if="error" type="is-danger" has-icon>
							{{ error }}
						</b-notification>
					</article>
				</div>
			</form>
		</section>
	</div>
</template>

<script>
import { sendOfferRequest } from "@/services/EmailService";
import { required, email } from "vuelidate/lib/validators";

export default {
	data() {
		return {
			loading: false,
			firstName: "",
			lastName: "",
			email: "",
			phone: "",
			address: "",
			description: "",
			acres: "",
			state: "",
			county: "",
			leased: "",
			producing: "",
			comments: "",
			requiredFields: ["firstName", "lastName", "phone"],
			error: null,
			errors: [],
			success: null,
			successMessage: "Message successfully delivered!",
		};
	},

	validations: {
		firstName: {
			required,
		},
		lastName: {
			required,
		},
		phone: {
			required,
		},
		email: {
			email,
		},
	},

	methods: {
		async requestOffer() {
			try {
				this.loading = true;
				this.error = null;

				// Run form validation. Sets $dirty to true
				this.$v.$touch();

				if (this.$v.$invalid) {
					this.error =
						"Please ensure all required fields are completed.";
					this.success = false;
				} else {
					await sendOfferRequest({
						firstName: this.firstName,
						lastName: this.lastName,
						email: this.email,
						phone: this.phone,
						address: this.address,
						description: this.description,
						acres: this.acres,
						state: this.state,
						county: this.county,
						leased: this.leased,
						producing: this.producing,
						comments: this.comments,
					});

					this.success = true;
					this.resetData();

					// Clear form validation so error messages won't show after form is cleared. Sets $dirty to false
					this.$v.$reset();
				}
			} catch (err) {
				console.log(err);
				this.error =
					"There was a problem submitting your request. Please try again later.";
				this.success = false;
			} finally {
				this.loading = false;
			}
		},

		resetData() {
			this.firstName = "";
			this.lastName = "";
			this.email = "";
			this.phone = "";
			this.address = "";
			this.description = "";
			this.acres = "";
			this.state = "";
			this.county = "";
			this.leased = "";
			this.producing = "";
			this.comments = "";
		},
	},
};
</script>

<style scoped>
.cover-photo {
	width: 100%;
	object-fit: cover;
}

#form-background {
	background-image: url("../../public/images/dark_wood_texure_2.jpg");
	box-shadow: 0px -0.5rem 0.1rem rgba(0, 0, 0, 0.8);
	padding-bottom: 5%;
}

.form-container {
	position: relative;
	margin: 0 auto;
}

.buttons {
	font-family: Bitter, serif;
}

.label {
	color: white !important;
}

.checkbox:hover,
.radio:hover {
	color: #23d160;
}

.input--error {
	border-color: red;
}

@media only screen and (min-width: 64.063em) {
	.cover-photo {
		height: 40rem;
	}

	.title-background {
		left: 55%;
	}

	.inner {
		position: absolute;
		color: white;
		top: 5rem;
		left: 8rem;
		font-family: Bitter, serif;
		font-weight: bold;
		font-size: 3.2rem;
	}

	.form-container {
		position: relative;
		width: 70rem;
		padding: 5% 0;
	}

	#basic-info {
		position: relative;
		width: 70rem;
	}

	.form-header {
		text-align: left;
		font-family: Bitter, serif;
		font-size: 2.2rem;
		color: white;
	}

	.sub-header {
		font-size: 1.1rem;
	}

	hr {
		color: black;
		width: 70rem;
		height: 0.1rem;
	}

	.column {
		text-align: left;
		width: 30rem;
		margin-top: 0.7rem;
	}

	#property-info {
		color: white;
		position: relative;
		width: 70rem;
		margin-top: 5%;
	}

	.property-question {
		margin-bottom: 1rem;
		font-family: "Avenir", Helvetica, Arial, sans-serif;
		font-size: 1.1rem;
	}
}

/* iPad Pro */
@media only screen and (min-width: 50.01em) and (max-width: 64em) {
	.cover-photo {
		height: 30rem;
	}

	.title-background {
		left: 47%;
	}

	.inner {
		position: absolute;
		color: white;
		top: 3rem;
		left: 3rem;
		font-family: Bitter, serif;
		font-weight: bold;
		font-size: 3.2rem;
	}

	.form-container {
		width: 50rem;
		padding: 5% 0;
	}

	.form-header {
		text-align: left;
		font-family: Bitter, serif;
		font-size: 2.2rem;
		color: white;
	}

	.sub-header {
		font-size: 1.1rem;
	}

	.column {
		text-align: left;
		width: 30rem;
	}

	#property-info {
		color: white;
		position: relative;
		width: 50rem;
		margin-top: 3rem;
	}

	.property-question {
		margin-bottom: 1rem;
		font-family: "Avenir", Helvetica, Arial, sans-serif;
		font-size: 1.1rem;
	}
}

/* Tablet */
@media only screen and (min-width: 40.01em) and (max-width: 50em) {
	.cover-photo {
		height: 25rem;
	}

	.title-background {
		left: 35%;
	}

	.inner {
		position: absolute;
		color: white;
		top: 3rem;
		left: 3rem;
		font-family: Bitter, serif;
		font-weight: bold;
		font-size: 3.2rem;
	}

	.form-container {
		width: 28.5rem;
		padding: 10% 0;
	}

	.form-header {
		text-align: left;
		font-family: Bitter, serif;
		font-size: 2.2rem;
		color: white;
	}

	.sub-header {
		font-size: 1.1rem;
	}

	.column {
		text-align: left;
		width: 30rem;
	}

	#property-info {
		color: white;
		position: relative;
		width: 28.5rem;
		margin-top: 3rem;
	}

	.label {
		font-size: 1.3rem;
	}

	.property-question {
		margin-bottom: 1rem;
		font-family: "Avenir", Helvetica, Arial, sans-serif;
		font-size: 1.3rem;
	}
}

/* Mobile */
@media only screen and (max-width: 40em) {
	.cover-photo {
		height: 20rem;
	}

	.title-background {
		left: 7%;
	}

	.inner {
		position: absolute;
		color: white;
		top: 2rem;
		left: 1.7rem;
		font-family: Bitter, serif;
		font-weight: bold;
		font-size: 2rem;
	}

	.form-container {
		width: 20rem;
		padding: 15% 0;
	}

	#basic-info {
		width: 20rem;
	}

	.form-header {
		text-align: left;
		font-family: Bitter, serif;
		font-size: 1.5rem;
		color: white;
	}

	.sub-header {
		font-size: 1.5rem;
	}

	hr {
		color: black;
		width: 20rem;
		height: 0.1rem;
	}

	.column {
		text-align: left;
	}

	#property-info {
		color: white;
		position: relative;
		margin: 15% 0;
	}

	.property-question {
		margin-bottom: 1rem;
		font-family: "Avenir", Helvetica, Arial, sans-serif;
		font-size: 1.1rem;
	}
}
</style>
