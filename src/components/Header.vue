<template>
     <b-navbar class="navbar is-fixed-top">
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="../../public/images/logo.jpg"
                    alt="Maverick Mineral Partners logo"
                >
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item tag="router-link" :to="{ path: '/company' }">
                <div class="nav-link">
                    Company Overview
                </div>
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/about-us' }">
                <div class="nav-link">
                    About Us
                </div>
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/testimonials' }">
                <div class="nav-link">
                    Testimonials
                </div>
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/contact-us' }">
                <div class="nav-link">
                    Contact Us
                </div>
            </b-navbar-item>
        </template>
        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-primary">
                        <router-link
                            class="request-offer"
                            :to="{ path: 'request-offer' }">
                                <strong>Request an Offer</strong>
                        </router-link>
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<style scoped>
a.navbar-item:hover {
    color:rgb(145, 108, 67);
}

.navbar-start > .navbar-item.router-link-exact-active.router-link-active {
    background-color: rgba(145, 108, 67, 0.75);
    color: white;
    box-shadow: -1px -1px 2px rgb(145, 108, 67);;
    border-radius: 5px;
}

.navbar-start {
    padding: .5% 0;
}

.navbar-item img {
    max-height: 5rem;
}

a {
    font-size: 1.3rem;
    color: rgb(145, 108, 67);
}

.request-offer{
    color: white;
}
</style>
