<template>
  <div id="services">
    <PageHero :title="serviceData.title" :bg="serviceData.background" />

    <Component class="service-details" :is="serviceData.content" />

    <Reviews />
    <FooterBannerContact />
  </div>
</template>

<script>
import EarthMover from '../../components/EarthMover.vue'
import FourWDContentVue from '../../components/FourWDContent.vue'
import Truck from '../../components/Truck.vue'
export default {
  data() {
    return {
      services: [
        {
          title: '4WD, Passenger, Caravan & Trailer',
          background: '/4wd.jpg',
          slug: '4wd-passenger-caravan-trailer',
          content: FourWDContentVue
        },
        {
          title: 'Earthmover',
          background: '/earthmover-bg.jpg',
          slug: 'earthmover',
          content: EarthMover
        },
        {
          title: 'Truck',
          background: '/truck-bg.jpg',
          slug: 'truck',
          content: Truck
        }
      ]
    }
  },
  computed: {
    serviceData() {
      return this.services.filter(s => s.slug == this.$route.params.slug)[0]
    }
  },
}
</script>
<style lang="scss" scoped>

</style>

<style lang="scss" >
.service-details {
  .illustration {
    height: 80px;
    width: auto;

    img {
      height: 100%;
    }
  }
}

.tabs {
  .nav-tabs {
    border: none !important;
    margin-bottom: 30px;

    a {
      display: flex;
      align-items: center;
      opacity: 0.5;
      filter: grayscale(1);
      border: none !important;
      font-weight: bold;
      text-align: left;

      &:before {
        content: " ";
        background: var(--primary) url(/tire-icon.png) no-repeat;
        display: inline-block;
        max-width: 70px;
        min-width: 70px;
        min-height: 70px;
        max-height: 70px;
        background-size: 32px 63px;
        background-position: 50% -10px;
        margin-right: 16px;
      }

      &:hover {
        opacity: .7;
      }

      &.active {
        opacity: 1;
        filter: none;
      }
    }
  }

  .tab-content {

    color: rgba(#000, 0.5);
    font-size: 16px;
    
    h1,
    h2,
    h3,
    h4,
    h4,
    h6 {
      color: #000;
      margin-bottom: 24px;
    }
  }


}
</style>