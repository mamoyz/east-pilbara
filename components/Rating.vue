<template>
    <div>
        <span v-for="star in 5" :key="star" :class="star <= rate ? 'active':''">
            <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 21" width="22" height="21">
                <path class="a"
                    d="m21.8 8.7l-4.8 4.7 1.1 6.7c0 0.3-0.1 0.6-0.3 0.7q-0.2 0.2-0.5 0.2-0.2 0-0.3-0.1l-6-3.1-6 3.1c-0.2 0.1-0.5 0.1-0.8-0.1-0.2-0.1-0.3-0.4-0.3-0.7l1.1-6.7-4.8-4.7c-0.2-0.2-0.3-0.5-0.2-0.8 0.1-0.3 0.4-0.5 0.6-0.5l6.7-1 3-6c0.3-0.6 1.1-0.6 1.4 0l3 6 6.7 1c0.2 0 0.5 0.2 0.6 0.5 0.1 0.3 0 0.6-0.2 0.8z" />
            </svg>
        </span>
    </div>
</template>

<script>
export default {
    props: {
        rate: {
            type: Number,
            default: 1
        },
    },
}
</script>

<style lang="scss" scoped>
span {
    margin-right: 4px;

    &:last-child {
        margin-right: 0;
    }

    svg {
        path {
            fill: #ececec;
        }
    }

    &.active {
        svg {
            path {
                fill: var(--primary)
            }
        }
    }
}
</style>