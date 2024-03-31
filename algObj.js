const sayfa = {
    sect: document.querySelector(".adim"),
    konu: document.querySelector(".konu"),
    soru: document.querySelector(".soru"),
    siklar: document.querySelector(".siklar")
}


const algObj3 = {
    konu: "Temas Türü",
    soru: "Kedi veya köpek yaralanması mı?",
    siklar: {
        kediKopek: {
            etiket: "evet",
            sonraki: {
                konu: "Özel Durum",
                soru: "Hangi özel durum mevcut?",
                siklar: {
                    ozelDurum$: {
                        etiket: "hicbiri",
                        sonraki: {
                            konu: "Yara ciddiyeti",
                            soru: "Yara hangi tarife uyuyor?",
                            siklar: {
                                hafifYara: {
                                    etiket: "Kategori2 tarifleri",
                                    sonraki: {
                                        konu: "Gözlem İmkanı",
                                        soru: "Hayvanı gözetim altında tutma imkanı var mı?",
                                        siklar: {
                                            imkan: {
                                                etiket: "evet",
                                                sonuc: {
                                                    gozlem: {
                                                        sorunsuz: { gozSonuc: "hicbirsey" },
                                                        sorunsuz$: { gozSonuc: "asi" },
                                                    }
                                                }
                                            },
                                            imkan$: {
                                                etiket: "hayır",
                                                sonuc: "asi"
                                            },
                                        },

                                    }
                                },
                                hafifYara$: {
                                    etiket: "Kategori3 tarifleri",
                                    sonraki: {
                                        konu: "Hayvan Aşı Durumu",
                                        soru: "İgili hayvan son 1 sene içinde kuduz aşısı olmuş mu?",
                                        siklar: {
                                            hayvanAsi: {
                                                etiket: "evet",
                                                sonraki: {
                                                    konu: "Gözlem İmkanı",
                                                    soru: "Hayvanı gözetim altında tutma imkanı var mı?",
                                                    siklar: {
                                                        imkan: {
                                                            sonuc: {
                                                                gozlem: {
                                                                    sorunsuz: "hicbirsey",
                                                                    sorunsuz$: { gozSonuc: "asi + ig" },
                                                                }
                                                            }
                                                        },
                                                    }

                                                }
                                            },
                                            hayvanAsi$: {
                                                etiket: "hayır",
                                                sonraki: {
                                                    konu: "Gözlem İmkanı",
                                                    soru: "Hayvanı gözetim altında tutma imkanı var mı?",
                                                    siklar: {
                                                        imkan: {
                                                            sonuc: {
                                                                asiVeGozlem: {
                                                                    sorunsuz: { gozSonuc: "hicbirsey" },
                                                                    sorunsuz$: {
                                                                        gozSonuc: {
                                                                            yedidenAz: "asi + ig", yedidenAz$: "asi"
                                                                        }
                                                                    },
                                                                }
                                                            }
                                                        },
                                                        imkan$: {
                                                            sonuc: "asi + ig"
                                                        },
                                                    },
                                                }

                                            },
                                        },
                                    }

                                },
                            },
                        }

                    },
                    bas: { etiket: "Baş-boyun yaralanması", sonuc: "2doz" },
                    yetmez: { etiket: "İmmunyetmezlik", sonuc: "asi + ig" },
                    bagisik: { etiket: "Daha önce de aşılanmış", sonuc: "asi + ig" },
                    tirmik: { etiket: "pkkkt", sonuc: "hicbirsey" },
                },

            }
        },
        kediKopek$: {
            etiket: "hayır",
            sonraki: {
                konu: "Farklı Temaslar",
                soru: "Temas hangisine uyuyor?",
                siklar: {} // sonra eklenecek
            }
        },

    },
}


/*  konu: "Temas Türü",
    soru: "Kedi veya köpek yaralanması mı?",
    siklar: {
        kediKopek: {
            etiket: "evet",
            sonraki: {
                konu: "Özel Durum",
                soru: "Hangi özel durum mevcut?",
                siklar: {
                    ozelDurum$: {
                        etiket: "hicbiri",
                        sonraki: {
 */


function ileri(obje = {}) {
    [sayfa.konu.innerText, sayfa.soru.innerText] = [obje.konu, obje.soru]
    while (sayfa.siklar.children.length) { sayfa.siklar.children.item(0).remove() }

    let siklar = obje.siklar
    let a = 0
    console.clear()
    Object.keys(siklar).forEach((key) => {
        let but = document.createElement("button")
        let sik = siklar[key]
        but.innerText = a + " | " + sik.etiket

        but.addEventListener("click", (e) => { ileri(sik.sonraki) })
        console.log(a++, "sonraki şıklar>>>", sik.sonraki?.siklar);
        sayfa.siklar.append(but)
    })
}

ileri(algObj3)