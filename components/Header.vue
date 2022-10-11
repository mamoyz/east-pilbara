<template>
    <header>
        <b-container>
            <b-row class="justify-content-between">
                <div>
                    <nuxt-link class="logo" to="/">
                        <img class="logo-dark" src="/logo-dark.png" alt="">
                        <img class="logo-default" src="/logo.png" alt="">
                    </nuxt-link>
                </div>
                <div>
                    <MainMenu />
                </div>
            </b-row>
        </b-container>
    </header>
</template>

<script>
export default {

}
</script>

<style lang="scss">
header {
    padding: 22px 0;
    background: #FFF;

    .logo {
        width: 300px;
        display: block;

        .logo-dark {
            display: none;
        }

        img {
            width: 100%;
            height: auto;
        }
    }

    .nav-item a {
        font-size: 18px;
        font-weight: 600;
        color: #000;
        padding-left: 10px;
        padding-right: 10px;
        &.nuxt-link-exact-active{
            color:var(--primary)
        }
        &:hover {
            text-decoration: none;
            color: var(--primary) !important;
        }
    }
}

.header-dark {
    header {
        background: #000;

        .logo {
            .logo-default {
                display: none;
            }

            .logo-dark {
                display: block;
            }
        }

        .nav-item a {
            color: #FFF;
        }
    }
}
</style>