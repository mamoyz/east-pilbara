<template>
  <div id="home">
    <section class="hero" style="background: url('/home-hero.jpg') no-repeat;">
      <b-container>
        <div class="col-xl-8 mx-auto">
          <b-row>
            <div class="col-xl-5 p-0 d-flex align-items-end">
              <nuxt-link class="cta cta-primary" to="/search/">
                View Tyres
              </nuxt-link>
            </div>
            <div class="col-xl-7 p-0">
              <img class="billboard img-fluid" src="/home-billboard.png" alt="">
            </div>
          </b-row>
        </div>
      </b-container>
    </section>
    <section class="services section">
      <b-container>
        <span class="sub-heading">
          Our Services
        </span>
        <h2 class="h1 pr-xl-5">We service passenger vehicles, mining, and mining contractors.</h2>
        <div class="mt-4">
          <b-row>
            <div class="col-xl-3 mt-5">
              <div class="illustration mb-4">

                <img class="img-fluid" src="/trucks.svg" alt="">
              </div>
              <h3 class="h3">Trucks</h3>
              <p class="txt-gray">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </div>
            <div class="col-xl-3 mt-5 offset-xl-1">
              <div class="illustration mb-4">

                <img class="img-fluid" src="/earthmovers.svg" alt="">
              </div>
              <h3 class="h3">Earthmovers</h3>
              <p class="txt-gray">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </div>
            <div class="col-xl-3 mt-5 offset-xl-1">
              <div class="illustration mb-4">

                <img class="img-fluid" src="/4wd.svg" alt="">
              </div>
              <h3 class="h3">4WD</h3>
              <p class="txt-gray">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </div>
          </b-row>
          <b-row>
            <div class="col-xl-3 mt-5">
              <div class="illustration mb-4">

                <img class="img-fluid" src="/passenger.svg" alt="">
              </div>
              <h3 class="h3">Passenger</h3>
              <p class="txt-gray">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </div>
            <div class="col-xl-3 mt-5 offset-xl-1">
              <div class="illustration mb-4">

                <img class="img-fluid" src="/caravan.svg" alt="">
              </div>
              <h3 class="h3">Caravan</h3>
              <p class="txt-gray">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </div>
            <div class="col-xl-3 mt-5 offset-xl-1">
              <div class="illustration mb-4">

                <img class="img-fluid" src="/trailer.svg" alt="">
              </div>
              <h3 class="h3">Trailer</h3>
              <p class="txt-gray">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </div>
          </b-row>
        </div>
      </b-container>
    </section>
    <section class="banner">
      <b-container>
        <div class="text-center">
          <div>
            <img class="icon" src="/tire-icon.png" alt="">
          </div>
          <div class="my-4 py-2<">
            <nuxt-link to="/search/" class="cta cta-black">
              View our entire tyre range
            </nuxt-link>
          </div>
          <div class="pb-5 mb-2">
            <img class="westlake" src="/westlake.png" alt="">
          </div>
        </div>
      </b-container>
    </section>
    <Reviews />
    <FooterBannerQuestion />
  </div>
</template>

<script>
export default {
  head() {
    return {
      bodyAttrs: {
        class: 'header-dark'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.hero {
  height: 95vh;
  max-height: 900px;
  display: flex;
  align-items: flex-end;
  background-size: cover !important;

  .cta {
    display: block;
    width: 100%;
    margin-bottom: 190px;
    font-size: 21px !important;
  }

  .billboard {
    position: relative;
    bottom: -32px;
    right: 60px;
  }
}

.services {
  .illustration {
    height: 80px;
    width: auto;

    img {
      height: 100%;
    }
  }
}

.banner {
  background-color: var(--primary);
  background-image: url('/tire-icon.svg');
  background-repeat: no-repeat;
  background-size: 750px;
  background-position: right 40px top -250px;

  .icon {
    width: 67px;
    height: auto;
  }

  .westlake {
    width: 205px;
    height: auto;
  }
}
</style>
