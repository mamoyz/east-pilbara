<template>
    <div>
        <section class="section">
            <b-container>
                <b-row class="align-items-xl-center">
                    <div class="col-xl-4">
                        <h2 class="h2">
                            Truck Tyres and Service </h2>
                        <div class="illustration mt-4">
                            <img class="img-fluid" src="/trucks.svg" alt="">
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
                    How we can help you in the trucking industry </h2>
                <b-tabs class="mt-5" content-class="tabs" justified>

                    <b-tab title="Supply and fitment of new truck tyres" active>
                        <b-row>
                            <div class="col-xl-7">
                                <h3>Supply and fitment of new truck tyres</h3>
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
                    <b-tab title="Repair of truck tyres">
                        <b-row>
                            <div class="col-xl-7">
                                <h3>Repair of truck tyres</h3>
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
                    <b-tab title="Advice on tryck tyres">
                        <b-row>
                            <div class="col-xl-7">
                                <h3>Advice on tryck tyres</h3>
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
