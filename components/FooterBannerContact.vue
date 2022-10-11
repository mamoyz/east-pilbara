<template>
    <section :style="`background: ${showMap ? 'none' : 'url(/footer-banner-2.png) no-repeat'};`">
        <b-container>
            <b-row>
                <div class="col-xl-8 p-0">
                    <banner-block>
                        <h3 class="h2">
                            Contact Us
                        </h3>
                        <b-row class="mb-4">
                            <div class="col-xl-4 pr-4">
                                <strong>
                                    We are located at
                                </strong>
                                <p class="body1">
                                    30 Pardoo Street, Newman, East Pilbara, WA
                                </p>
                            </div>
                            <div class="col-xl-8 p-0">
                                <b-row>
                                    <div class="col-xl-6">
                                        <strong>
                                            Phone

                                        </strong>
                                        <p class="body1">
                                            08 9175 5022
                                        </p>
                                    </div>
                                    <div class="col-xl-6">
                                        <strong>
                                            Mobile
                                        </strong>
                                        <p class="body1">
                                            0408 936 765

                                        </p>
                                    </div>
                                </b-row>
                                <div>
                                    <strong>
                                        Working hours

                                    </strong>
                                    <p class="body1">
                                        Mon-Sun 8am - 5pm, 24/7 service available
                                    </p>
                                </div>
                            </div>
                        </b-row>
                        <nuxt-link class="cta cta-small cta-black" to="/contact-us/">Contact us</nuxt-link>
                        <nuxt-link class="ml-2 cta cta-small cta-white" to="/">

                            <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" width="16"
                                height="16">
                                <path fill-rule="evenodd" class="a"
                                    d="m11.1 8.4q0.2 0.1 0.3 0.3 0.1 0.2 0.1 0.3c0 0.7-2.4 2.5-2.8 2.5 0 0-2.3 0-5.3-2.9-2.9-3-2.9-5.3-2.9-5.3 0-0.4 1.8-2.8 2.5-2.8q0.1 0 0.3 0.1 0.2 0.1 0.3 0.3c0 0 1.6 2.2 1.5 2.8-0.1 0.3-0.3 0.4-0.7 0.7 0 0.1-0.2 0.2-0.3 0.3q0.1 0.3 0.3 0.6c0.4 1 1.3 1.9 2.3 2.3q0.3 0.2 0.6 0.3c0.1-0.1 0.2-0.3 0.3-0.3 0.3-0.4 0.4-0.6 0.7-0.7 0.6-0.1 2.8 1.5 2.8 1.5zm-5-5.1q-0.1-0.1-0.1-0.2 0-0.2 0.1-0.3 0.1-0.1 0.3-0.1c0.7 0 1.5 0.3 2 0.9 0.6 0.5 0.9 1.3 0.9 2q0 0.2-0.1 0.3-0.1 0.1-0.3 0.1-0.1 0-0.2-0.1-0.1-0.1-0.1-0.3c0-0.6-0.3-1.1-0.7-1.5-0.4-0.4-1-0.7-1.5-0.7q-0.2 0-0.3-0.1zm0-1.8q-0.1-0.1-0.1-0.3 0-0.1 0.1-0.2 0.1-0.1 0.3-0.1c1.2 0 2.4 0.5 3.3 1.4 0.9 0.9 1.4 2.1 1.4 3.3q0 0.2-0.1 0.3-0.1 0.1-0.2 0.1-0.2 0-0.3-0.1-0.1-0.1-0.1-0.3c0-1-0.4-2.1-1.2-2.8-0.7-0.8-1.8-1.2-2.8-1.2q-0.2 0-0.3-0.1z" />
                            </svg>
                            +61 8 9175 5022
                        </nuxt-link>

                    </banner-block>
                </div>
                <div v-if="showMap" class="col-xl-4 pl-0">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14650.022708595257!2d119.726304!3d-23.369917!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x463dfc0044370559!2sEast%20Pilbara%20Tyre%20Service!5e0!3m2!1sen!2str!4v1665310686180!5m2!1sen!2str"
                        style="border:0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </b-row>
        </b-container>
    </section>
</template>

<script>
export default {
    props: {
        showMap: {
            type: Boolean,
            default: false
        },
    },
}
</script>

<style lang="scss" scoped>
section {
    background-size: cover !important;

}

iframe {
    width: 100%;
    height: 100%;
}
</style>