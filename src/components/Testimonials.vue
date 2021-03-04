<template>
	<div class="background">
		<section class="container">
			<img
				src="../../public/images/horses_stampede.jpg"
				alt="Stampede of horses"
				class="cover-photo"
			/>
			<div class="title-background">
				<span class="inner">Testimonials</span>
			</div>
		</section>
		<div class="below-picture">
			<section
				v-for="(testimonial, index) in testimonials"
				:key="testimonial.id"
				class="container"
				id="testimonial-container"
			>
				<div class="individual-testimonial-container">
					<span class="quote-icon">
						<font-awesome-icon
							size="2x"
							:icon="['fas', 'quote-left']"
						/>
					</span>
					<span class="text">
						<p
							v-for="(paragraph, index) in testimonial.paragraphs"
							:key="index"
						>
							{{ paragraph }}
						</p>
						<br />
						<h3>- {{ testimonial.name }}</h3>
					</span>
				</div>
				<hr v-if="index != testimonials.length - 1" />
			</section>
		</div>
	</div>
</template>

<script>
import { getTestimonials } from "@/services/TestimonialService";

export default {
	data() {
		return {
			testimonials: [],
			error: null,
			loading: false,
		};
	},

	mounted() {
		this.getTestimonials();
	},

	methods: {
		async getTestimonials() {
			try {
				this.loading = true;

				var response = await getTestimonials();

				this.testimonials = response;
			} catch (err) {
				console.log(err);
				this.error = err.message;
			} finally {
				this.loading = false;
			}
		},
	},
};
</script>

<style scoped>
.background {
	background-color: lightgray;
}

.below-picture {
	background-color: lightgrey;
}

.individual-testimonial-container {
	background-color: white;
}

#testimonial-container div {
	margin: 0 auto;
}

p {
	font-size: 1rem;
}

hr,
a {
	color: black;
}

/* X-Large */
@media only screen and (min-width: 110em) {
	.title-background {
		left: 5rem;
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

	.quote-icon {
		margin-right: 90%;
	}

	#testimonial-container div {
		width: 60rem;
		padding-bottom: 2%;
	}

	#testimonial-container:first-of-type {
		margin-top: 5%;
	}

	#testimonial-container:last-of-type {
		padding-bottom: 10%;
	}

	.individual-testimonial-container {
		padding-top: 2.5rem;
	}

	.highlighted-quote-1 {
		font-style: bold;
	}

	#testimonial-container {
		margin-bottom: 2rem;
	}

	.text {
		left: 30%;
		height: 26rem;
		width: 38rem;
		text-align: left;
		font-family: Arial, Helvetica, sans-serif;
	}

	.text p {
		font-style: italic;
		margin: 3%;
	}

	.text h3 {
		text-align: right;
		padding-top: 1.1rem;
		margin: 0 5rem;
	}

	h3 {
		font-weight: bold;
		font-size: 1.8rem;
		font-family: Bitter, serif;
	}

	p {
		font-family: Bitter, serif;
		font-size: 1.4rem !important;
		margin-top: 1rem;
	}

	hr {
		width: 30%;
		margin: 2% 35%;
	}
}

/* Desktop */
@media only screen and (min-width: 64.063em) and (max-width: 110em) {
	.title-background {
		left: 5rem;
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

	.container {
		margin: 0 1px;
	}

	.quote-icon {
		margin-right: 43rem;
	}

	#testimonial-container div {
		width: 50rem;
		padding-bottom: 2%;
	}

	.individual-testimonial-container {
		padding-top: 2.5rem;
	}

	#testimonial-container {
		margin-bottom: 2rem;
	}

	#testimonial-container:first-of-type {
		margin-top: 7%;
	}

	#testimonial-container:last-of-type {
		padding-bottom: 8%;
	}

	.text {
		left: 30%;
		height: 26rem;
		width: 38rem;
		text-align: left;
		font-family: Arial, Helvetica, sans-serif;
	}

	.text p {
		font-style: italic;
		margin: 5%;
	}

	.text h3 {
		text-align: right;
		padding-top: 1.1rem;
		margin: 0 5rem;
	}

	h3 {
		font-weight: bold;
		font-size: 1.3rem;
		font-family: Bitter, serif;
	}

	p {
		font-family: Bitter, serif;
		margin: 5%;
	}

	hr {
		width: 40%;
		margin: 2% 31%;
	}
}

/* iPad Pro */
@media only screen and (min-width: 50.01em) and (max-width: 64em) {
	.title-background {
		left: 1.5rem;
	}

	.inner {
		position: absolute;
		color: white;
		top: 2rem;
		left: 3rem;
		font-family: Bitter, serif;
		font-weight: bold;
		font-size: 2.5rem;
	}

	#testimonial-container {
		margin-bottom: 2rem;
	}

	#testimonial-container div {
		width: 50rem;
		padding-bottom: 5%;
	}

	#testimonial-container:first-of-type {
		margin-top: 10%;
	}

	#testimonial-container:last-of-type {
		padding-bottom: 6%;
	}

	.individual-testimonial-container {
		padding-top: 2.5rem;
	}

	.quote-icon {
		float: left;
		margin-right: 0.1rem;
		padding-left: 1rem;
	}

	.text {
		height: 26rem;
		width: 38rem;
		text-align: left;
		font-family: Arial, Helvetica, sans-serif;
	}

	.text p {
		font-style: italic;
		font-size: 1.3rem;
	}

	.text h3 {
		text-align: right;
		padding-top: 1.1rem;
		padding-right: 1.5rem;
	}

	h3 {
		font-weight: bold;
		font-size: 1.3rem;
		font-family: Bitter, serif;
	}

	p {
		font-family: Bitter, serif;
		margin: 5%;
	}

	hr {
		width: 65%;
		margin: 6% 18%;
	}
}

/* Tablet */
@media only screen and (min-width: 40.063em) and (max-width: 50em) {
	.title-background {
		left: 1.5rem;
	}

	.inner {
		position: absolute;
		color: white;
		top: 2rem;
		left: 3rem;
		font-family: Bitter, serif;
		font-weight: bold;
		font-size: 2.5rem;
	}

	#testimonial-container {
		margin-bottom: 2rem;
	}

	#testimonial-container div {
		width: 40rem;
		padding-bottom: 5%;
	}

	#testimonial-container:first-of-type {
		margin-top: 13%;
	}

	#testimonial-container:last-of-type {
		padding-bottom: 8%;
	}

	.individual-testimonial-container {
		padding-top: 2.5rem;
	}

	.quote-icon {
		float: left;
		margin-right: 0.1rem;
		padding-left: 1rem;
	}

	.text {
		height: 26rem;
		width: 38rem;
		text-align: left;
		font-family: Arial, Helvetica, sans-serif;
	}

	.text p {
		font-style: italic;
		font-size: 1.3rem;
	}

	.text h3 {
		text-align: right;
		padding-top: 1.1rem;
		padding-right: 1.5rem;
	}

	h3 {
		font-weight: bold;
		font-size: 1.3rem;
		font-family: Bitter, serif;
	}

	p {
		font-family: Bitter, serif;
		margin: 5%;
	}

	hr {
		width: 65%;
		margin: 6% 18%;
	}
}

/* Mobile */
@media only screen and (max-width: 40em) {
	.title-background {
		left: 1.5rem;
	}

	.inner {
		position: absolute;
		color: white;
		top: 2rem;
		left: 3rem;
		font-family: Bitter, serif;
		font-weight: bold;
		font-size: 2.5rem;
	}

	#testimonial-container {
		margin-bottom: 2rem;
	}

	#testimonial-container div {
		width: 20rem;
		padding-bottom: 10%;
	}

	#testimonial-container:first-of-type {
		margin-top: 20%;
	}

	#testimonial-container:last-of-type {
		padding-bottom: 35%;
	}

	.individual-testimonial-container {
		padding-top: 2.5rem;
	}

	.quote-icon {
		float: left;
		margin-right: 0.1rem;
		padding-left: 1rem;
	}

	.text {
		height: 26rem;
		width: 38rem;
		text-align: left;
		font-family: Arial, Helvetica, sans-serif;
	}

	.text p {
		font-style: italic;
		font-size: 1.3rem;
	}

	.text h3 {
		text-align: right;
		padding-top: 1.1rem;
		padding-right: 1.5rem;
	}

	h3 {
		font-weight: bold;
		font-size: 1.2rem;
		font-family: Bitter, serif;
	}

	p {
		font-family: Bitter, serif;
		margin: 5%;
	}

	hr {
		width: 65%;
		margin: 10% 16%;
	}
}
</style>
