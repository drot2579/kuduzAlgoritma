
export const algObj = {
  baslik: "Temas Türü",
  metin: "Kedi veya köpek yaralanması mı?",
  siklar: {
    kediKopek: {
      etiket: "evet",
      sonraki: {
        baslik: "Özel Durum",
        metin: "Hangi özel durum mevcut?",
        siklar: {
          ozelDurum$: {
            etiket: "hicbiri",
            sonraki: {
              baslik: "Temas Biçimi",
              metin: "Temas biçimi hangi gruba giriyor?",
              siklar: {
                hafifYara: {
                  etiket: `Çıplak derinin hafifçe sıyrılması (deri altına geçmeyen yaralanmalar)\nKanama olmadan küçük tırmalama veya zedeleme `,
                  sonraki: {
                    baslik: "Gözlem İmkanı",
                    metin: "Hayvanı gözetim altında tutma imkanı var mı?",
                    siklar: {
                      imkan: {
                        etiket: "evet",
                        sonraki: {
                          baslik: "gozlem",
                          metin: `Kedi/köpek 10 gün boyunca gözlem altında tutulur. Hayvanın kaçması, ölmesi, hastalık belirtisi göstermesi durumunda aşı uygulanır.`,
                          siklar: {
                            hayvanSag: {
                              etiket: "hayvan iyi",
                              sonraki: {
                                baslik: "SON",
                                metin: "Herhangi bir ek işleme gerek yok.",
                                siklar: { son: { etiket: "son" } }
                              },
                            },
                            hayvanSag$: {
                              etiket: "Kayıp, hasta, ölü",
                              sonraki: {
                                baslik: "Aşı",
                                metin: "Aşı uygulanır.Ig uygulanmaz.",
                                siklar: { son: { etiket: "son" } }
                              },
                            },
                          }
                        }
                      },
                      imkan$: {
                        etiket: "hayır",
                        sonraki: {
                          baslik: "Aşı",
                          metin: "Aşı uygulanır. Ig uygulanmaz.",
                          siklar: { son: { etiket: "son" } },
                        }
                      },
                    },

                  }
                },
                hafifYara$: {
                  etiket: `Deriyi zedeleyen tek veya çok sayıda ısırma ve tırmalamalar\nMukozaların, açık cilt yaralarının hayvanın salyası ile temas etmesi\nLezyonun kafa, boyun, parmak uçları gibi sinir uçlarının yoğun olduğu bölgelerde olması`,
                  sonraki: {
                    baslik: "Hayvan Aşı Durumu",
                    metin: "İgili hayvan son 1 sene içinde kuduz aşısı olmuş mu?",
                    siklar: {
                      hayvanAsi: {
                        etiket: "evet",
                        sonraki: {
                          baslik: "Gözlem",
                          metin: `Kedi/köpek 10 gün boyunca gözlem altında tutulur. Hayvanın kaçması, ölmesi, hastalık belirtisi göstermesi durumunda aşı ve Ig uygulanır.`,
                          siklar: {
                            hayvanSag: {
                              etiket: "hayvan sağlıklı",
                              sonraki: {
                                baslik: "SON",
                                metin: "Herhangi bir ek işleme gerek yok.",
                                siklar: { son: { etiket: "son" } }
                              },
                            },
                            hayvanSag$: {
                              etiket: "Kayıp, hasta, ölü",
                              sonraki: {
                                baslik: "Aşı ve Ig",
                                metin: "Aşı ve Ig uygulanır.",
                                siklar: { son: { etiket: "son" } }
                              },
                            },
                          }

                        }
                      },
                      hayvanAsi$: {
                        etiket: "hayır",
                        sonraki: {
                          baslik: "Gözlem İmkanı",
                          metin: "Hayvanı gözetim altında tutma imkanı var mı?",
                          siklar: {
                            imkan: {
                              etiket: "evet",
                              sonraki: {
                                baslik: "Gözlem",
                                metin: "`Aşı uygulanır.Kedi/köpek 10 gün boyunca gözlem altında tutulur. Hayvanın kaçması, ölmesi, hastalık belirtisi göstermesi durumunda Ig uygulanır(ilk aşıdan sonra 7 gün geçtiyse uygulanmaz).`,",
                                siklar: {
                                  hayvanSag: {
                                    etiket: "hayvan sağlıklı",
                                    sonraki: {
                                      baslik: "SON",
                                      metin: "Herhangi bir ek işleme gerek yok.",
                                      siklar: { son: { etiket: "son" } },
                                    },
                                  },
                                  hayvanSag$: {
                                    etiket: "Kayıp, hasta, ölü",
                                    sonraki: {
                                      baslik: "Ig",
                                      metin: "İlk aşıdan sonra 7 gün geçmediyse Ig uygulanır.",
                                      siklar: { son: { etiket: "son" } }
                                    },
                                  },
                                }
                              },
                            },
                            imkan$:{
                              etiket: "hayır",
                              sonraki: {
                                baslik: "Aşı ve Ig",
                                metin: "Aşı ve Ig uygulanır.",
                                siklar: { son: { etiket: "son" } },
                              }
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
          bas: { 
            etiket: "Baş-boyun yaralanması", 
            sonraki:{
              baslik: "Aşı ve Ig",
              metin: "Aşı ve Ig uygulanır",
              siklar: { son: { etiket: "son" } },
            },
           },
          yetmez: { 
            etiket: "İmmünyetmezlik var", 
            sonraki:{
              baslik: "Aşı ve Ig",
              metin: "Aşı ve Ig uygulanır",
              siklar: { son: { etiket: "son" } },
            },
           },
          bagisik: { 
            etiket: "Daha önce de kuduza karşı aşılanmış", 
            sonraki:{
              baslik: "2 doz Aşı",
              metin: "0. ve 3. günlerde 2 doz aşı uygulanır.",
              siklar: { son: { etiket: "son" } },
            },
           },
          tirmik: { 
            etiket: "Provoke, küçük, kanamasız kedi tırmalaması", 
            sonraki:{
              baslik: "Profilaksi yok",
              metin: "Kuduz profilaksisi önerilmez.",
              siklar: { son: { etiket: "son" } },
            },
           },
        },

      }
    },
    kediKopek$: {
      etiket: "hayır",
      sonraki:
      {
        baslik: "Farklı Temaslar",
        metin: "Temas hangisine uyuyor?",
        get siklar() { display.on(sayfa.farkliTemas); return "" }  // sonra eklenecek
      }
    },

  },
}

export const turler = [
  { tur: "köpek", risk: true },
  { tur: "kedi", risk: true },
  { tur: "sığır", risk: true },
  { tur: "koyun", risk: true },
  { tur: "keçi", risk: true },
  { tur: "at", risk: true },
  { tur: "eşek", risk: true },
  { tur: "kurt", risk: true },
  { tur: "tilki", risk: true },
  { tur: "çakal", risk: true },
  { tur: "domuz", risk: true },
  { tur: "ayı", risk: true },
  { tur: "sansar", risk: true },
  { tur: "kokarca", risk: true },
  { tur: "gelincik", risk: true },
  { tur: "fare", risk: false },
  { tur: "sıçan", risk: false },
  { tur: "sincap", risk: false },
  { tur: "hamster", risk: false },
  { tur: "kobay", risk: false },
  { tur: "gerbil", risk: false },
  { tur: "tavşan", risk: false },
  { tur: "maymun", risk: true },
  { tur: "yılan", risk: false },
  { tur: "kaplumbağa", risk: false },
  { tur: "kertenkele", risk: false },
  { tur: "tavuk", risk: false },
  { tur: "horoz", risk: false },
  { tur: "hindi", risk: false },
  { tur: "yarasa(ev)", risk: false },
]