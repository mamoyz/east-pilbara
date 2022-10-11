<template>
    <div class="tyre-list-item text-center">
        <div>
            <h3>{{stock_item}}</h3>
            <div>
                <span class="txt-gray">
                    {{size}} / {{tyre_profile}} / {{tyre_rim}}
                </span>
            </div>
        </div>
        <div class="position-relative">
            <strong class="badge cta cta-xsmall cta-primary">Category</strong>

            <div class="img mt-4">
                <img src="/tyre-img.png" alt="">
            </div>
            <nuxt-link :to="`/tyres/${slug}/`" class="cta cta-small cta-black">
                View Details
            </nuxt-link>
        </div>
    </div>
</template>

<script>
import { kebabCase } from 'lodash'
export default {
    props: {
        tyre: [Object, Array]
    },
    data() {
        return {
            ...this.tyre
        }
    },
    computed: {
        slug() {
            return kebabCase(this.stock_item)
        }
    },
}
</script>

<style lang="scss" scoped>
.tyre-list-item {
    background-color: #f3f3f3;
    padding: 40px 35px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    transition: background-color 0.4s;

    &:hover {
        transition: background-color 0.4s;
        background-color: var(--primary);
    }

    h3 {
        font-size: 24px;
        font-weight: 400;
    }

    .img {
        background: #FFF;
        border-radius: 200px;
        width: 100%;
        padding-bottom: 100%;
        position: relative;

        img {
            position: absolute;
            width: 70%;
            height: 70%;
            object-fit: contain;
            top: 15%;
            left: 15%;
        }
    }

    .cta {
        transform: translate(0, -50%);
    }

    .badge {
        position: absolute;
        right: -35px;
        z-index: 10;
        top: 40px;
    }
}
</style>