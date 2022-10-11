<template>
    <div class="col-xl-5 px-5 text-center">
        <div class="px-4">
            <img class="img-fluid" src="/tyre-large.png" alt="" />
            <a class="mt-5 cta cta-primary cta-small" :href="to">View Full Tyre Range</a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        to: String
    }
}
</script>

<style lang="scss" scoped>

</style>