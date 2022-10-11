<template>
  <div id="contact-us">
    <section class="contact section pb-0">
      <div class="container">
        <b-row>
          <div class="col-xl-10 offset-xl-2">
            <div class="contact-content">
              <b-row>
                <div class="col-xl-4">
                  <h1 class="h4 mb-4">Let us know if you have any questions!</h1>
                  <p class="txt-gray">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </p>
                </div>
                <div class="col-xl-7 offset-xl-1">
                  <ContactForm />
                </div>
              </b-row>
            </div>
          </div>
        </b-row>
      </div>
    </section>
    <FooterBannerContact :show-map="true" />
  </div>
</template>

<script>

export default {

}
</script>
<style lang="scss" scoped>
#contact-us {
  background: url('/contact-bg.jpg') no-repeat;
  background-size: cover;

}

.contact-content {
  background: #FFF;
  padding: 50px 40px;
}
</style>
