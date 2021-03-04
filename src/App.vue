<template>
  <div id="app">
    <page-header />
    <router-view />
    <bottom-banner />
    <page-footer />
  </div>
</template>

<script>
import PageHeader from './components/Header';
import BottomBanner from '@/components/BottomBanner';
import PageFooter from './components/Footer';

export default {
  name: 'App',
  components: {
    PageHeader,
    BottomBanner,
    PageFooter
  }
}
</script>

<style>
#app {
	font-family: 'Avenir', Bitter, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

html, body {
	overflow-x: hidden;
}
body {
	position: relative
}

.label {
	color: white;
}

.button.is-primary {
	background-color:rgb(75, 57, 37) !important;
}

.button.is-success, .button.is-primary:hover {
	background-color:rgb(145, 108, 67) !important;
}

.button.is-success:hover {
	background-color:yellowgreen !important;
}

.container {
	margin: 0 1px;
	max-width: 100% !important;
}

.cover-photo {
	width: 100%;
	object-fit: cover;
}

.title-background {
	background-color: black;
	border-radius: 8px;
	position: absolute;
	opacity: 0.7;
}

.form-label > .label, .field.column > .label {
    color: white;
}

.navbar-burger {
	margin-top: auto;
	margin-bottom: auto;
}

/* Desktop */
@media only screen and (min-width: 64.063em) {
	.cover-photo {
		height: 40rem;
	}

	.title-background {
		top: 20%;
		height: 15rem;
		width: 40rem;
	}
}

/* iPad Pro */
@media only screen and (min-width: 50.01em) and (max-width: 64em) {
	.cover-photo {
		height: 30rem;
	}

	.title-background {
		top: 30%;
		height: 11rem;
		width: 30rem;
	}
}

/* iPad */
@media only screen and (min-width: 40.01em) and (max-width: 50em) {
	.cover-photo {
		height: 25rem;
	}

	.title-background {
		top: 33%;
		height: 11rem;
		width: 29rem;
	}
}

/* Mobile */
@media only screen and (max-width: 40em) {
	.cover-photo {
		height: 20rem;
	}

	.title-background {
		top: 40%;
		height: 8rem;
		width: 20rem;
	}
}
</style>
