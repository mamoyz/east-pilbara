<template>
    <form>
  
        <div class="row">
            <div class="mb-3 col-lg-6">
                <label>
                    <strong>Name</strong>
                </label>
                <input placeholder="Your full name" type="text" class="form-input">
            </div>
            <div class="mb-3 col-lg-6">
                <label>
                    <strong>Phone</strong>
                </label>
                <input placeholder="###-####-####" type="tel" class="form-input">
            </div>
            <div class="mb-3 col-12">
                <label>
                    <strong>Email address</strong>
                </label>
                <input placeholder="example@website.com" type="email" class="form-input">
            </div>
            <div class="mb-3 col-12">
                <label>
                    <strong>Questions or requirements</strong>
                </label>
                <textarea placeholder="Explain here please..." rows="5" class="form-input"></textarea>
            </div>
            <div class="col-12">
                <button type="submit" class="cta cta-primary cta-small">Submit</button>
            </div>
        </div>
    </form>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>