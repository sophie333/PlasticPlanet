var contentArr;

function ContentArray() {
    contentArr = new Array(0);
    this.current = 0;
    this.length = 5;
    this.content = new Content(
        "#1 Plastic in the oceans",
        "In 2015, Jenna Jambeck, a University of Georgia designing teacher, caught everybody's attention with a rough estimate on how much unrecycled plastic waste ends up in the ocean: between 5.3 million and 14 million tons every year just from beach front districts.\n" +
        "Most of it isn't thrown off boats, she and her associates state, yet is dumped indiscreetly ashore or in waterways, for the most part in Asia. It's at that point blown or washed into the ocean. Envision five plastic basic need packs loaded down with plastic junk, Jambeck says, sitting on each foot of coastline around the globe—that would relate to about 8.8 million tons, her widely appealing assessment of what the sea gets from us every year. It's indistinct to what extent it will take for that plastic to totally biodegrade into its constituent particles. Estimates extend from 450 years to never.\n",
        "models/world_02.glb",
        "https://www.nationalgeographic.com/magazine/2018/06/plastic-planet-waste-pollution-trash-crisis/");

    init();
}

function init() {
    let object1 = new Content(
        "#1 Plastic in the oceans",
        "In 2015, Jenna Jambeck, a University of Georgia designing teacher, caught everybody's attention with a rough estimate on how much unrecycled plastic waste ends up in the ocean: between 5.3 million and 14 million tons every year just from beach front districts.\n" +
        "Most of it isn't thrown off boats, she and her associates state, yet is dumped indiscreetly ashore or in waterways, for the most part in Asia. It's at that point blown or washed into the ocean. Envision five plastic basic need packs loaded down with plastic junk, Jambeck says, sitting on each foot of coastline around the globe—that would relate to about 8.8 million tons, her widely appealing assessment of what the sea gets from us every year. It's indistinct to what extent it will take for that plastic to totally biodegrade into its constituent particles. Estimates extend from 450 years to never.\n",
        "models/world_02.glb",
        "https://www.nationalgeographic.com/magazine/2018/06/plastic-planet-waste-pollution-trash-crisis/");

    let object2 = new Content(
        "#2 A threat to the environment",
        "In addition to the fact that plastic causes harm to the sea, it can harm groundwater sources. Numerous regions are as of now confronting issues with, however water sources wherever are in risk due to plastic contamination. Plastic poisons in dumps and from litter can saturate the groundwater, which individuals drink each day. \n" +
        "Ashore, wind can convey plastic waste or litter all through the environment. It can stall out in trees, wall, traffic lights, or different structures. At the point when creatures come into contact with this plastic waste, they chance consuming the poisons or getting to be entrapped in the plastic and choking. \n" +
        "Air contamination is another issue for people and animals. At the point when plastic is scorched in the outside, it discharges a lot of poisons, which dirties the air. On the off chance that the poisons are breathed in for an extensive stretch of time, it can prompt respiratory issues. \n" +
        "Notwithstanding hurting plants, creatures, and individuals, it costs a large number of dollars consistently for cleanup of territories presented to plastic poisons. Numerous areas have seen a decline in the travel industry due to the measure of contamination in their environment, which can seriously affect nearby economies.\n",
        "models/world_04.glb",
        "https://www.eartheclipse.com/environment/environmental-effects-plastic-pollution.html");

    let object3 = new Content(
        "#3 Unpredictable microplastics",
        "In 2004, an investigation lead by Dr Richard Thompson at the University of Plymouth, UK, revealed discovering incredible measure of plastic particles on shorelines and waters in Europe, the Americas, Australia, Africa and Antarctica. \n" +
        "They announced that little plastic pellets called \"mermaids tears\", which are the aftereffect of industry and residential plastic waste, have surely spread over the world's oceans. Some plastic pellets had divided to particles more slender than the measurement of a human hair. Be that as it may, while some can't be seen, those pieces are still there are as yet plastic.\n" +
        "They are not consumed into the natural system, they simply skim around inside it, and at last are ingested by marine creatures and zooplankton. This plastic micro-pollution, with its inalienable lethality and consequences on the food chain, had yet to be studied…\n",
        "models/world_06.glb",
        "http://plastic-pollution.org/");

    let object4 = new Content(
        "#4 The death of marine animals",
        "In the sea, plastic contamination can kill marine animals through ensnarement in objects, for example, angling gear, however it can likewise slaughter through ingestion, by being confused with food. \n" +
        "Studies have discovered that a wide range of animal categories, including little zooplankton, vast cetaceans, most seabirds, and all marine turtles, promptly ingest plastic bits and junk, for example, cigarette lighters, plastic sacks, and bottle caps. \n" +
        "Daylight and seawater embrittle plastic, and the possible breakdown of bigger items makes it accessible to zooplankton and other little marine creatures. Notwithstanding being nonnutritive and indigestible, plastics have been appeared to concentrate contaminations up to a million times their dimension in the encompassing seawater and after that convey them to the species that ingest them.\n",
        "models/world_08.glb",
        "https://www.britannica.com/science/plastic-pollution");

    let object5 = new Content(
        "#5 A harm to humans",
        "Plastic likewise pollutes without being littered—explicitly, through the release of mixes utilized in its make. Undoubtedly, contamination of the earth by synthetic substances drained from plastics into air and water is a rising area of concern. \n" +
        "Phthalates are plasticizers—conditioners used to make plastic items less fragile. They are found in medical devices, food packaging, vehicle upholstery, flooring materials, and PCs and in addition in pharmaceuticals, fragrances, and cosmetics. \n" +
        "BPA, utilized in the fabricate of clear, hard polycarbonate plastics and solid epoxy coatings and cements, is available in bundling, bottles, smaller plates, medicinal gadgets, and the linings of food cans. \n" +
        "PBDE is added to plastics as a fire resistant. Every one of these mixes have been identified in people and are known to disturb the endocrine framework. \n" +
        "Phthalates act against male hormones and are in this way known as anti-androgens; BPA emulates the characteristic female hormone estrogen; and PBDE has been appeared to upset thyroid hormones notwithstanding being an anti-androgen. The general population most defenseless against such hormone-disturbing synthetics are kids and woman of reproductive age.",
        "models/world_10.glb",
        "https://www.britannica.com/science/plastic-pollution");

    contentArr.push(object1);
    contentArr.push(object2);
    contentArr.push(object3);
    contentArr.push(object4);
    contentArr.push(object5);

    this.content = contentArr[this.current];
}

ContentArray.prototype.navRight = function() {
    if ((this.current + 1) == this.length) {
        this.current = 0;
    }
    else {
        this.current = this.current + 1;
    }
    this.content = contentArr[this.current];
};

ContentArray.prototype.navLeft = function() {
    if ((this.current - 1) < 0) {
        this.current = this.length - 1;
    }
    else {
        this.current = this.current - 1;
    }
    this.content = contentArr[this.current];
};