<template>
	<div>
		<section class="container">
			<img
				src="../../../public/images/mountains_sunrise.jpg"
				alt="Mountains during sunrise"
				class="cover-photo"
			/>
			<div class="title-background">
				<span class="inner">About Us</span>
			</div>
		</section>

		<template v-if="isAdmin">
			<router-link :to="{name: 'employeeCreate'}">
				<b-button 
					type="is-success" 
					expanded
				>
					Add new employee
				</b-button>
			</router-link>
		</template>

		<section class="bio-container">
			<template v-for="(employee, index) in employees">
				<div
					:key="employee.id"
					class="individual-bio-container"
				>
					<span class="photo-container">
						<img
							:src="`${employee.image}`"
							alt="Headshot"
							class="headshots"
						/>
					</span>
					<span class="text">
						<div class="bio-line">
							<h2>{{ employee.name }}</h2>
							<template v-if="isAdmin">
								<router-link :to="{name: 'employeeEdit', params: {id: employee.id}}">
									<font-awesome-icon
										tag="router-link"
										size="1x"
										:icon="['fas', 'pencil-alt']"
									/>
								</router-link>
							</template>
						</div>
						<h3>{{ employee.title }}</h3>
						<h4>{{ employee.email }}</h4>
						<h4>{{ employee.phone }}</h4>
						<a v-bind:href="employee.linkedIn">
							<font-awesome-icon
								size="3x"
								:icon="['fab', 'linkedin']"
							/>
						</a>
						<p>{{ employee.bio }}</p>
					</span>
				</div>
				<hr v-if="index != employees.length - 1" :key="employee.name" />
			</template>
		</section>
	</div>
</template>

<script>
import { getAllEmployees } from "@/services/EmployeeService";

export default {
	data() {
		return {
			loading: false,
			employee: {
				id: null,
				name: '',
				title: '',
				email: '',
				phone: '',
				linkedIn: '',
				bio: ''
			},
			employees: [],
			error: null,
			isAdmin: true // change this to false once authentication is added
		};
	},

	created() {
		this.getEmployeeData();
	},
	// Rerenders employee data on edit
	updated() {
		this.getEmployeeData();
	},
	methods: {
		async getEmployeeData() {
			try {
				this.loading = true;

				this.employees = await getAllEmployees();

			} catch (err) {
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
.cover-photo {
	opacity: 0.9;
}

.bio-container {
	display: flex;
	flex-direction: column;
	align-content: space-between;
	justify-content: space-between;
}

.photo-container {
	flex: 1;
	background-color: white;
}

.text {
	flex: 1.5;
}

p {
	font-family: Bitter, serif;
}

h2, h3, h4 {
	font-family: Perpetua Titling MT;
	font-weight: bold;
}

hr {
	color: black;
	width: 50%;
	margin: 2% auto 0;
}

a {
	color: black;
}


/* Desktop */
@media only screen and (min-width: 64.063em) {
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

	.individual-bio-container {
		display: flex;
		align-content: space-between;
		justify-content: space-between;
		margin-top: 2%;
	}

	.bio-container {
		margin-bottom: 9%;
	}

	.bio-line {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.bio-line h2 {
		flex: 6;
	}

	.bio-line svg {
		flex: .5;

	}

	.text {
		text-align: left;
		padding: 0 15%;
	}

	h2 {
		font-size: 2.3rem;
	}

	h3 {
		font-size: 1.3rem;
	}

	p {
		font-size: 1.2rem;
		margin-top: 1rem;
	}

	.photo-container {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.headshots {
		height: 14rem;
		box-shadow: -2px -2px 2px rgba(34, 34, 34, 0.6);
		border-radius: 8px;
		margin-left: 42%;
	}
}

/* Tablet */
@media only screen and (min-width: 40.063em) and (max-width: 64em) {
	.title-background {
		left: 5rem;
	}

	.inner {
		position: absolute;
		color: white;
		top: 2.8rem;
		left: 2.8rem;
		font-family: Bitter, serif;
		font-weight: bold;
		font-size: 3rem;
	}

	.container {
		margin: 0 1px;
	}

	.individual-bio-container {
		margin: 3% 0;
	}

	.individual-bio-container:first-of-type {
		margin-top: 5%;
	}

	.individual-bio-container:last-of-type {
		margin-bottom: 15%;
	}

	h2 {
		font-size: 3.5rem;
	}

	h3 {
		font-size: 2.5rem;
	}

	h4 {
		font-size: 1.5rem;
	}

	p {
		margin: 0 5%;
		font-size: 2rem;
	}

	hr {
		margin-left: 25%;
		margin-bottom: 3%;
		margin-top: 3%;
	}
}

/* Mobile */
@media only screen and (max-width: 40em) {
	.cover-photo {
		margin-top: 6rem;
		transform: scale(1.2);
	}

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

	.individual-bio-container:first-of-type {
		margin-top: 15%;
	}

	.individual-bio-container:last-of-type {
		margin-bottom: 50%;
	}

	h2 {
		font-size: 2.3rem;
	}

	h3 {
		font-size: 1.3rem;
	}

	p {
		margin: 1rem 1rem 0;
		font-size: 1.4rem;
	}

	hr {
		width: 75%;
		margin: 8% 0 10% 12.5%;
	}
}
</style>
