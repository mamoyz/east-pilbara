<template>
    <div class="send-query text-center">
        <h3 class="h3 mb-4">You didn't find what you need?</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.</p>
        <nuxt-link class="mt-4 cta cta-small cta-black" to="/">
            Send Enquiry
        </nuxt-link>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.send-query {
    background: var(--primary);
    padding: 50px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: 100%;
}
</style>