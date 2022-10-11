<template>
    <div>
        <section class="section">
            <b-container>
                <b-row class="align-items-xl-center">
                    <div class="col-xl-4">
                        <h2 class="h2">
                            4WD, Passenger, Caravan, Trailer Tyres & Service
                        </h2>
                        <div class="illustration mt-4">
                            <div class="illustration mt-4">
                                <img class="img-fluid" src="/4wd.svg" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-8">
                        <p class="txt-gray">
                            East Pilbara Tyres service the trucking industry by supplying Westlake, Continental,
                            Michelin tyres
                            to the trucking and transport industry in the East Pilbara and KImberly Region. We have
                            operated n
                            the trucking industry since 2001 and proudly service companies such as LInfox here in the
                            Pilbara.
                        </p>
                    </div>
                </b-row>
            </b-container>
        </section>
        <section>
            <b-container>
                <h2 class="h2">
                    How we can help you in the 4WD, passenger, caravan & trailer industry
                </h2>
                <b-tabs class="mt-5" content-class="tabs" justified>

                    <b-tab title="4WD tyres" active>
                        <b-row>
                            <div class="col-xl-7">
                                <h3>4WD tyres</h3>
                                <p>East Pilbara can assist with remote repair of truck tyres by supplying tyres and
                                    using
                                    our
                                    grab track to fit tyres and get you back on the road.
                                    We service entire Pilbara region from Newman to Broome.
                                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                                    praesentium
                                    voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                                    occaecati
                                    cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia
                                    animi,
                                    id
                                    est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
                                    distinctio.
                                    Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
                                    minus
                                    id
                                    quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor
                                    repellendus.
                                </p>
                                <ServiceMap />
                            </div>
                            <ViewRange to="/search/" />
                        </b-row>

                    </b-tab>
                    <b-tab title="Passenger tyres">
                        <b-row>
                            <div class="col-xl-7">
                                <h3>Passenger tyres</h3>
                                <p>East Pilbara can assist with remote repair of truck tyres by supplying tyres and
                                    using
                                    our
                                    grab track to fit tyres and get you back on the road.
                                    We service entire Pilbara region from Newman to Broome.
                                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                                    praesentium
                                    voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                                    occaecati
                                    cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia
                                    animi,
                                    id
                                    est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
                                    distinctio.
                                    Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
                                    minus
                                    id
                                    quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor
                                    repellendus.
                                </p>
                                <ServiceMap />
                            </div>
                            <ViewRange to="/search/" />
                        </b-row>
                    </b-tab>
                    <b-tab title="Caravan tyres">
                        <b-row>
                            <div class="col-xl-7">
                                <h3>Caravan Tyres</h3>
                                <p>East Pilbara can assist with remote repair of truck tyres by supplying tyres and
                                    using
                                    our
                                    grab track to fit tyres and get you back on the road.
                                    We service entire Pilbara region from Newman to Broome.
                                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                                    praesentium
                                    voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                                    occaecati
                                    cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia
                                    animi,
                                    id
                                    est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
                                    distinctio.
                                    Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
                                    minus
                                    id
                                    quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor
                                    repellendus.
                                </p>
                                <ServiceMap />
                            </div>
                            <ViewRange to="/search/" />
                        </b-row>
                    </b-tab>
                    <b-tab title="Trailer tyres">
                        <b-row>
                            <div class="col-xl-7">
                                <h3>Trailer tyres</h3>
                                <p>East Pilbara can assist with remote repair of truck tyres by supplying tyres and
                                    using
                                    our
                                    grab track to fit tyres and get you back on the road.
                                    We service entire Pilbara region from Newman to Broome.
                                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                                    praesentium
                                    voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                                    occaecati
                                    cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia
                                    animi,
                                    id
                                    est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
                                    distinctio.
                                    Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
                                    minus
                                    id
                                    quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor
                                    repellendus.
                                </p>
                                <ServiceMap />
                            </div>
                            <ViewRange to="/search/" />
                        </b-row>
                    </b-tab>
                </b-tabs>
            </b-container>
        </section>

    </div>
</template>

<script>
export default {
    data() {
        return {
            activeTab: 0
        }
    },
}
</script>

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

            &:before {
                content: " ";
                background: var(--primary) url(/tire-icon.png) no-repeat;
                display: inline-block;
                width: 70px;
                height: 70px;
                background-size: 32px 63px;
                background-position: 50% -10px;
                margin-right: 16px;
            }
            &:hover{
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
        }
    }


}
</style>