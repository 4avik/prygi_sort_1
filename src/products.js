const getImg = (name) => {
    const path = `/src/assets/images/${name}`; //your imgfile
    const modules = import.meta.globEager("/src/assets/images/*"); 
    return modules[path].default;
}

export const products = [
    {
        id: 1,
        name: "Hellus Haps marja hapupiimajook 1,0 kg",
        packageType: "Tetra-top",
        wasteType: "Pakendijäätmed",
        image: getImg("hellus_haps.jpg")
    },
    {
        id: 2,
        name: "Hellus keefir 1 kg",
        packageType: "Tetra-top",
        wasteType: "Pakendijäätmed",
        image: getImg("hellus_keefir.png")
    },
    {
        id: 3,
        name: "Hellus väherasvane keefir 1 kg",
        packageType: "Tetra-top",
        wasteType: "Pakendijäätmed",
        image: getImg("hellus_vaherasvane.png")
    },
    {
        id: 4,
        name: "Tere piim D-vitamiiniga 2,5% 1,0 l",
        packageType: "Kile",
        wasteType: "Pakendijäätmed",
        image: getImg("tere_piim.jpg")
    },
    {
        id: 5,
        name: "Emma banaani kohupiimakreem 150 g",
        packageType: "Tops",
        wasteType: "Pakendijäätmed",
        image: getImg("emma_banaan.jpg")
    },
    {
        id: 6,
        name: "Vutimunad, JÄRVEOTSA, 12 tk",
        packageType: "Plastkarp",
        wasteType: "Pakendijäätmed",
        image: getImg("jarveotsa_vutimunad.webp")
    },
    {
        id: 7,
        name: "Mahe kanamuna S, KIKERIKII ÖKOMUNA, 10tk",
        packageType: "Paberist munarest",
        wasteType: "Biojäätmed",
        image: getImg("mahe_kanamuna.webp")
    },
    {
        id: 8,
        name: "Kassiliiv klombistuv, HAPPY, 5 kg",
        packageType: "Paberkott",
        wasteType: "Segaolemajäätmed, Pakendijäätmed",
        image: getImg("kassiliiv_klombistuv.webp")
    },
    {
        id: 9,
        name: "Kassiliiva räniteemandid, KITTYCLEAN, 3,8 l",
        packageType: "Plastik",
        wasteType: "Segaolemajäätmed, Pakendijäätmed",
        image: getImg("raniteemandid.webp")
    },
    {
        id: 10,
        name: "Banaan",
        packageType: "Kilekott",
        wasteType: "Biojääde, Pakendijäätmed",
        image: getImg("Banaan.webp")
    },
    {
        id: 11,
        name: "Perenaise Sai",
        packageType: "Kilekott",
        wasteType: "Pakendijäätmed",
        image: getImg("perenaise_sai.jpg")
    },
    {
        id: 12,
        name: "Must Rukkileib Eesti Pagar 390g",
        packageType: "Kilekott",
        wasteType: "Pakendijäätmed",
        image: getImg("must_rukkileib.jpg")
    },
    {
        id: 13,
        name: "Rakvere Lastevorst",
        packageType: "Kile",
        wasteType: "Pakendijäätmed",
        image: getImg("lastevorst.webp")
    },
]