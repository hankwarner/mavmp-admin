<template>
    <section class="footer">
        <div class="content has-text-centered">
            <img
                src="../../public/images/stone-texture.jpg"
                alt="Textured background"
            >
            <div class="slogan">
                Contact One of Our Team Members Today
            </div>
            <div class="contact-us">
                <router-link
                    class="nav-link"
                    to="/contact-us">
                    <b-button type="is-primary" size="is-small">
                        Contact Us
                    </b-button>
                </router-link>
            </div>
        </div>
    </section>
</template>

<style scoped>
@media only screen and (min-width: 64.063em){
    img {
        max-width: 100%;
        max-height: 25%;
        height: 12rem;
        width: 100rem;
        filter: brightness(80%);
        box-shadow: 0px -2px 2px rgba(34,34,34,0.6);
    }

    .footer {
        padding: 0;
        transform: scale(2);
        margin-bottom: 5rem;
    }

    .content {
        position: relative;
    }

    .slogan {
        position: absolute;
        top: 32%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 1.1rem;
        font-family: Bitter,serif !important;
        color: white;
    }

    .contact-us {
        position: absolute;
        top: 58%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-family: Open Sans,sans-serif;
    }
}


@media only screen and (min-width: 50.01em) and (max-width: 64em) {
    img {
        max-width: 100%;
        max-height: 25%;
        height: 8rem;
        width: 100rem;
        filter: brightness(80%);
        box-shadow: 0px -2px 2px rgba(34,34,34,0.6);
    }

    .footer {
        padding-top: 0;
        padding-bottom: 0;
        transform: scale(1.5);
    }

    .content {
        position: relative;
    }

    .slogan {
        position: absolute;
        top: 2rem;
        left: 31.5rem;
        width: 30rem;
        transform: translate(-50%, -50%);
        font-size: 1.5rem;
        font-family: Bitter,serif !important;
        color: white;
    }

    .contact-us {
        position: absolute;
        top: 4.8rem;
        left: 31rem;
        transform: translate(-50%, -50%);
        font-family: Bitter,serif !important;
    }

    .button.is-small {
        font-size: 1rem;
    }
}


@media only screen and (min-width: 40.063em) and (max-width: 50em){
    img {
        max-width: 100%;
        max-height: 25%;
        height: 8rem;
        width: 100rem;
        filter: brightness(80%);
        box-shadow: 0px -2px 2px rgba(34,34,34,0.6);
    }

    .footer {
        padding-top: 0;
        padding-bottom: 0;
        transform: scale(1.5);
    }

    .content {
        position: relative;
    }

    .slogan {
        position: absolute;
        top: 2rem;
        left: 22.65rem;
        width: 30rem;
        transform: translate(-50%, -50%);
        font-size: 1.5rem;
        font-family: Bitter,serif !important;
        color: white;
    }

    .contact-us {
        position: absolute;
        top: 4.8rem;
        left: 22.5rem;
        transform: translate(-50%, -50%);
        font-family: Bitter,serif !important;
    }

    .button.is-small {
        font-size: 1rem;
    }
}


@media only screen and (max-width: 40em){
    .navbar-burger burger {
        height: 8rem;
    }

    img {
        max-width: 100%;
        max-height: 25%;
        height: 9rem;
        width: 100rem;
        filter: brightness(80%);
        box-shadow: 0px -2px 2px rgba(34,34,34,0.6);
    }

    .footer {
        padding: 0;
        transform: scale(2.13);
        margin-bottom: 3rem;
    }

    .content {
        position: relative;
    }

    .slogan {
        position: absolute;
        top: 32%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 0.55rem;
        font-family: Bitter,serif;
        color: white;
        font-family: Open Sans,sans-serif;
    }

    .contact-us {
        position: absolute;
        top: 58%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}
</style>
