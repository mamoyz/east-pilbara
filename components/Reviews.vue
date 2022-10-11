<template>
    <section class="section">
        <b-container>
            <b-row>
                <div class="col-xl-6">
                    <span class="mt-5 d-block sub-heading">
                        Testimonials </span>
                    <h2 class="h1 pr-xl-5">What our clients say</h2>
                    <div>
                        <div class="d-flex align-items-start mt-5 pt-4">
                            <div>
                                <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 56" width="58"
                                    height="56">
                                    <path fill="#ffd600" d="m0.5 0.5h57.5v55.5h-57.5z" />
                                    <path fill-rule="evenodd"
                                        d="m41.9 20v1.5q-3.2 1.2-5.1 3.8-1.8 2.6-1.8 5.3 0 0.6 0.2 0.9 0.1 0.2 0.2 0.2 0.2 0 0.5-0.2 1-0.7 2.5-0.7 1.8 0 3.2 1.4 1.4 1.5 1.4 3.5 0 2.1-1.6 3.7-1.6 1.6-3.8 1.6-2.7 0-4.6-2.2-1.9-2.1-1.9-5.8 0-4.2 2.6-7.6 2.6-3.4 8.2-5.4zm-15.1 0v1.5q-3.2 1.2-5.1 3.8-1.8 2.6-1.8 5.3 0 0.6 0.1 0.9 0.2 0.2 0.3 0.2 0.2 0 0.5-0.2 1-0.7 2.5-0.7 1.8 0 3.2 1.4 1.4 1.5 1.4 3.5 0 2.1-1.6 3.7-1.6 1.6-3.8 1.6-2.7 0-4.6-2.2-1.9-2.1-1.9-5.8 0-4.2 2.6-7.6 2.6-3.4 8.2-5.4z" />
                                </svg>
                            </div>
                            <div class="pl-5 w-100">
                                <VueSlickCarousel v-bind="settings">
                                    <div v-for="review in 5" :key="review">
                                        <Rating :rate="5" />
                                        <p class="txt-gray mt-3">
                                            Blew a trailer tyre on a blazing hot day coming down from Hedland. Boys
                                            promptly
                                            fixed
                                            us up with a couple of new tyres for about 35% cheaper than we would have
                                            paid
                                            in
                                            Hedland. There was no skinny mocha lattes in the waiting room....
                                        </p>
                                        <h4 class="h5 mt-4 mb-1">Vic Taylor</h4>
                                        <span class="txt-gray">
                                            Local Guide <em class="txt-primary mx-1">/</em> 59 reviews
                                        </span>
                                    </div>
                                    <template class="nav" #prevArrow>

                                        <button>

                                            <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 17"
                                                width="9" height="17">
                                                <path fill="#000"
                                                    d="m7.6 16.7l-7.4-7.6q-0.2-0.3-0.2-0.6 0-0.3 0.2-0.6l7.4-7.6c0.3-0.4 0.8-0.4 1.1-0.1 0.4 0.3 0.4 0.8 0.1 1.2l-6.9 7.1 6.9 7.1c0.3 0.4 0.3 0.9-0.1 1.2-0.3 0.3-0.8 0.3-1.1-0.1z" />
                                            </svg>
                                            <span>
                                                Prev Review
                                            </span>
                                        </button>
                                    </template>
                                    <template class="nav" #nextArrow>
                                        <button>
                                            <span>
                                                Next Review
                                            </span>

                                            <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 17"
                                                width="9" height="17">

                                                <path fill="#000"
                                                    d="m0.3 16.8c-0.4-0.3-0.4-0.8-0.1-1.2l6.9-7.1-6.9-7.1c-0.3-0.4-0.3-0.9 0.1-1.2 0.3-0.3 0.8-0.3 1.1 0.1l7.4 7.6q0.2 0.3 0.2 0.6 0 0.3-0.2 0.6l-7.4 7.6c-0.3 0.4-0.8 0.4-1.1 0.1z" />
                                            </svg>
                                        </button>
                                    </template>
                                </VueSlickCarousel>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="col-xl-5 offset-xl-1">
                    <img src="/damper-sharks.png" alt="" class="img-fluid">
                </div>
            </b-row>
        </b-container>
    </section>
</template>

<script>
import '~/assets/css/slick.css'
import Vue from 'vue'
import VueSlickCarousel from 'vue-slick-carousel'
Vue.component(VueSlickCarousel.name, VueSlickCarousel)

export default {
    data() {
        return {
            settings: {
                dots: false,
                arrows: true,
                infinite: false,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                touchThreshold: 5,


            },
        }
    },
}
</script>

<style lang="scss" scoped>
button {
    -webkit-appearance: none;
    background: none;
    outline: 0;
    border: none;
    letter-spacing: 2px;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 600;
    padding: 0;

    span {
        margin: 0 15px;
    }
}
</style>
<style lang="scss">
.slick-slider {
    .slick-prev {
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 10;
    }

    .slick-next {
        position: absolute;
        bottom: 0;
        right: 0;
        z-index: 10;
    }

    .slick-arrow.slick-disabled {
        opacity: 0.5;
        cursor: no-drop;
    }
}
</style>