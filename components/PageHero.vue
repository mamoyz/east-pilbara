<template>
    <section class="page-hero" :style="`background-image: url('${bg}');`">
        <b-container>
            <b-row class="align-items-end">
                <div class="col-xl-9 pb-5 mb-4">
                    <span v-if="subtitle" class="sub-heading">{{subtitle}}
                    </span>
                    <h1 class="h1 mb-5">
                        {{title}}
                    </h1>

                    <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 24" width="46" height="24">

                        <path class="a" fill="var(--primary)"
                            d="m45.3 3.8l-20.8 19.6c-0.4 0.4-1 0.6-1.5 0.6-0.5 0-1.1-0.2-1.5-0.6l-20.8-19.6c-0.9-0.9-0.9-2.2-0.1-3.1 0.8-0.9 2.2-0.9 3.1-0.1l19.3 18.2 19.3-18.2c0.9-0.8 2.3-0.8 3.1 0.1 0.8 0.9 0.8 2.2-0.1 3.1z" />
                    </svg>
                </div>
                <div class="col-xl-3">
                    <img class="billboard img-fluid" src="/home-billboard.png" alt="">
                </div>
            </b-row>
        </b-container>
    </section>
</template>

<script>
export default {
    props: {
        subtitle: String,
        title: String,
        bg: String
    },
}
</script>

<style lang="scss" scoped>
.page-hero {

    background-size: cover;
    background-repeat: no-repeat;

    h1 {
        color: #FFF;
    }

    .billboard {
        position: relative;
        right: -40px;
        bottom: -24px;
    }
}
</style>