<template>
    <div class="banner-block">
        <slot></slot>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.banner-block {
    background-image: url('/tire-icon.svg');
    background-repeat: no-repeat;
    background-color: var(--primary);
    background-size: 750px;
    background-position: right -370px bottom -300px;
    padding: 60px;
}
</style>