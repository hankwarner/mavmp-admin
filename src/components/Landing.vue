<template>
    <div>
        <div class="container">
            <div class="background">
                <video autoplay muted loop playsinline id="myVideo">
                    <source
                        src="../../public/images/wild_horses_hd.mp4"
                        type="video/mp4"
                        alt="Roaming horses"
                        preload="auto"
                    >
                </video>
            </div>
            <span class="slogan-backdrop">
                <div class="slogan">
                    <h1>Maverick Mineral Partners</h1>
                </div>
            </span>
        </div>
    </div>
</template>

<style scoped>
video {
    max-width: 100%;
}

.background {
    position: relative;
}

.slogan-backdrop {
    color: black;
}

.slogan {
    position: absolute;
    top: 40%;
    font-weight: bold;
    font-family: Perpetua Titling MT;
    color: white;
}

.sub-slogan {
    position: absolute;
    top: 65%;
    font-family: Bitter,serif;
    color: white;
}

.our-services {
    position: absolute;
}

/* X-Large */
@media only screen and (min-width: 90.063em) {
    video {
        width: 100%;
    }

    .slogan {
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 4rem;
    }
}

/* Desktop */
@media only screen and (min-width: 64.063em){
    .slogan {
        width: 75rem;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 4.67rem;
    }

    .sub-slogan {
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 2rem;
    }

    .our-services {
        top: 58%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .container {
        margin: 0 1px;
    }

    video {
        height: auto;
    }
}

/* iPad Pro */
@media only screen and (min-width: 50.01em) and (max-width: 64em) {
    .container {
        margin: 0 1px;
    }
    
    .slogan {
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 1.66rem;
    }

    .sub-slogan {
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 1.4rem;
    }

    .our-services {
        top: 65%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    video {
        height: auto;
    }
}

/* Tablet */
@media only screen and (min-width: 40.063em) and (max-width: 50em){
    .slogan {
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 1.66rem;
    }

    .sub-slogan {
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 1.4rem;
    }

    .our-services {
        top: 65%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    video {
        height: auto;
    }
}


/* Mobile */
@media only screen and (max-width: 40em){
    video {
        height: 33rem;
        transform: scale(1.8);
    }

    .slogan {
        width: 19.5rem;
        left: 8.3%;
        font-size: 1.7rem;
    }

    .sub-slogan {
        left: 2%;
        font-size: 1.1rem;
    }

    .our-services {
        top: 58%;
        left: 28%;
    }
}
</style>