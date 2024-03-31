const sayfa = {
    sect: document.querySelector(".adim"),
    konu: document.querySelector(".konu"),
    soru: document.querySelector(".soru"),
    siklar: document.querySelector(".siklar")
}

let sonucMetin1 = `Kedi/köpek 10 gün boyunca gözlem altında tutulur. Hayvanın kaçması, ölmesi, hastalık belirtisi göstermesi durumunda ilk aşıdan itibaren 7 gün geçmedi ise aşı ve Ig uygulanır.`
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
                                                sonraki: {
                                                    konu:"gozlem",
                                                    soru: `Kedi/köpek 10 gün boyunca gözlem altında tutulur. Hayvanın kaçması, ölmesi, hastalık belirtisi göstermesi durumunda aşı uygulanır.`,
                                                    siklar: {
                                                        hayvanSag: {
                                                            etiket:"hayvan iyi",sonraki:{
                                                                konu:"SON",
                                                                soru:"Herhangi bir ek işleme gerek yok.",
                                                                siklar:{son:{etiket: "son"}}
                                                            }, 
                                                        },
                                                        hayvanSag$: {
                                                            etiket:"Aksi halde",sonraki:{
                                                                konu:"",
                                                                soru:"",
                                                                siklar:{}
                                                            }, 
                                                        },
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
                                                                    hayvanSag: "hicbirsey",
                                                                    hayvanSag$: { gozSonuc: "asi + ig" },
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
                                                                    hayvanSag: { gozSonuc: "hicbirsey" },
                                                                    hayvanSag$: {
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


function ileri(obje) {

    let { konu, soru, siklar } = obje
    while (sayfa.siklar.children.length) { sayfa.siklar.children.item(0).remove() }
    [sayfa.konu.innerText, sayfa.soru.innerText] = [konu, soru]


    Object.keys(siklar).forEach((sikKey) => {
        let sik = siklar[sikKey]

        let btn = document.createElement("button")
        btn.innerText = sik.etiket
        btn.addEventListener("click", (e) => {

            if (sik?.sonraki) {
                ileri(sik.sonraki)

            } else {
                let sonuc = sik.sonuc
                sayfa.konu = 
                console.log(sik);
            }
        })
        sayfa.siklar.append(btn)
    })
}

ileri(algObj3)


