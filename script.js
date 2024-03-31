import { algObj } from "./data.js";
import { turler } from "./data.js";
import { fonk } from "./kucukFonk.js";

const syf = {
  sect: document.querySelector(".adim"),
  konu: document.querySelector(".konu"),
  soru: document.querySelector(".soru"),
  siklar: document.querySelector(".siklar"),
  ekmek: document.querySelector(".ekmek"),
  yeniden: document.querySelector(".yeniden"),
  farkliTemas: document.querySelector(".farkliTemas"),
  turler : document.querySelector("#tur"),
}

fonk.display.off(syf.farkliTemas)

turler.forEach(({ tur, risk }) => { syf.turler.append(new Option(tur, risk)) })

const rapor = []





const kontrol1 = (btn, anaSik, cocukSik) => {
  if (cocukSik.etiket.length > 50) { btn.style.fontSize = "1rem" }
}

const kontrol2 = (anaSik, cocukSik) => {
  document.getElementById("sesButon").play()
  syf.ekmek.textContent += cocukSik.etiket.slice(0,32) + " >>"
  rapor.push([anaSik.konu, cocukSik.etiket])
}

const sonFn = (sonSik) => {
  fonk.cocuklariOldur(syf.siklar)


  syf.siklar.append(fonk.yenidenBtn())


  rapor.unshift(["Tarih: ", new Date().toLocaleString()])
  console.log('rapor :>> ', rapor);
}





/* 
siklar: {
    kediKopek: {
      etiket: "evet",
      sonraki: {
        konu: "Özel Durum",
        soru: "Hangi özel durum mevcut?",
        siklar: {
*/

const ileri = (anaSik) => {

  let { konu, soru, siklar } = anaSik
  while (syf.siklar.children.length) { syf.siklar.children.item(0).remove() }
  [syf.konu.innerText, syf.soru.innerText] = [konu, soru]


  Object.keys(siklar).forEach((sikKey) => {
    let cocukSik = siklar[sikKey]

    if (sikKey == "son") {console.info("son sikKey e ulaştın")  }


    let btn = document.createElement("button")
    btn.innerText = cocukSik.etiket

    kontrol1(btn, anaSik, cocukSik)

    btn.addEventListener("click", (e) => {
      kontrol2(anaSik, cocukSik)

      if (cocukSik?.sonraki) {
        ileri(cocukSik.sonraki)

      } else {
        sonFn(cocukSik)
        console.info("Baska sik kalmadi")
      }
    })

    syf.siklar.append(btn)

  })
}

ileri(algObj)















