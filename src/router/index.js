import Vue from "vue";
import Router from "vue-router";
import Landing from "@/components/Landing";
import AboutUs from "@/components/employees/AboutUs";
import EmployeeEdit from "@/components/employees/EmployeeEdit";
import EmployeeCreate from "@/components/employees/EmployeeCreate";
import Company from "@/components/Company";
import ContactUs from "@/components/ContactUs";
import RequestOffer from "@/components/RequestOffer";
import Testimonials from "@/components/Testimonials";

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: "/",
			component: Landing,
		},
		{
			path: "/about-us",
			component: AboutUs,
		},
		{
			path: "/about-us/edit/:id",
			component: EmployeeEdit,
			name: "employeeEdit",
		},
		{
			path: "/about-us/create",
			component: EmployeeCreate,
			name: "employeeCreate",
		},
		{
			path: "/company",
			component: Company,
		},
		{
			path: "/contact-us",
			component: ContactUs,
		},
		{
			path: "/request-offer",
			component: RequestOffer,
		},
		{
			path: "/testimonials",
			component: Testimonials,
		},
	],
	mode: "history",
	// Scroll to top of page when transitioning between components in the router view
	scrollBehavior() {
		return { x: 0, y: 0 };
	},
});