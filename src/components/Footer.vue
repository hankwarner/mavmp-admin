<template>
    <footer class="footer">
        <div class="columns">
            <section class="content has-text-centered column">
                <h3>Our Office</h3>
                <div>
                    <p>
                        <strong>Maverick Mineral Partners, LLC</strong> <br>
                        1601 Arapahoe Street #700 <br>
                        Denver, CO 80202 <br>
                    </p>
                </div>
            </section>
            <section class="content has-text-centered column">
                <h3>Contact</h3>
                <div>
                    <p>
                        <strong>Phone:</strong>
                            (303) 746-2353 <br>
                        <strong>Email:</strong>
                        <a href="mailto: info@mavmp.com">
                            info@mavmp.com
                        </a> <br>
                    </p>
                </div>
            </section>
            <section class="content has-text-centered column">
                <h3>Social</h3>
                <strong>LinkedIn:</strong>
                <a href="https://www.linkedin.com/company/maverick-mineral-partners-llc?trk=public_profile_topcard_current_company">
                    <font-awesome-icon size="2x" :icon="['fab', 'linkedin']" />
                </a>
            </section>
        </div>

    </footer>
</template>

<style scoped>
a {
    color: rgb(75, 57, 37);
}

a:hover {
    color: rgb(145, 108, 67);
}

@media only screen and (min-width: 50.01em) and (max-width: 64em) {
    .footer {
        padding: 3.5rem 1.5rem;
    }

    p {
        font-size: 1.3rem;
    }

    h3 {
        font-size: 2rem;
    }
}

@media only screen and (min-width: 40.063em) and (max-width: 50em){
    .footer {
        padding: 3.5rem 1.5rem;
    }

    p {
        font-size: 1.3rem;
    }

    h3 {
        font-size: 2rem;
    }
}

@media only screen and (max-width: 40em){
    .footer {
        padding-bottom: 3.5rem;
    }
}
</style>
