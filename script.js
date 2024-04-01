import { algObj } from "./data.js";
import { turler } from "./data.js";
import { fonk } from "./kucukFonk.js";

const syf = {
  sect: document.querySelector(".adim"),
  baslik: document.querySelector(".baslik"),
  metin: document.querySelector(".metin"),
  siklar: document.querySelector(".siklar"),
  ekmek: document.querySelector(".ekmek"),
  yeniden: document.querySelector(".yeniden"),
  farkliTemas: document.querySelector(".farkliTemas"),
  turler : document.querySelector("#tur"),
}

fonk.display.off(syf.farkliTemas)

turler.forEach(({ tur, risk }) => { syf.turler.append(new Option(tur, risk)) })

const rapor = []


const kontrol0 =  ( anaSik, baslik, metin, siklar) => {
  if (metin.length > 31 ) { syf.metin.style.fontSize = "1.25rem"
    // console.log(metin,metin.length);
  }
}


const kontrol1 = (btn, anaSik, cocukSik) => {
  if (btn.innerText.length > 50) { btn.style.fontSize = "1rem" }
  else if (btn.innerText.length > 10) { btn.style.fontSize = "1.25rem" }
  if (btn.innerText.length > 50) { btn.style.fontSize = "1rem" }
  else if (btn.innerText.length > 10) { btn.style.fontSize = "1.25rem" }


}

const kontrol2 = (anaSik, cocukSik) => {
  document.getElementById("sesButon").play()
  syf.ekmek.textContent += cocukSik.etiket.slice(0,32) + " >>"
  rapor.push([anaSik.konu, cocukSik.etiket])
}

const sonFn = (sonSik) => {
  fonk.cocuklariOldur(syf.siklar)


  syf.siklar.append(fonk.yenidenBtn())
  syf.sect.style.color = "darkorange"

  rapor.unshift(["Tarih: ", new Date().toLocaleString()])
  console.log('rapor :>> ', rapor);
}


const ileri = (anaSik) => {
  console.clear()
  console.log('anaSik :>> ', anaSik);

    let { baslik, metin, siklar } = anaSik
    while (syf.siklar.children.length) { syf.siklar.children.item(0).remove() }
    [syf.baslik.innerText, syf.metin.innerText] = [baslik, metin]
  
    kontrol0( anaSik, baslik, metin, siklar)
  
    Object.keys(siklar).forEach((sikKey) => {
      let cocukSik = siklar[sikKey]
      console.log('cocukSik :>> ', cocukSik);
      if (cocukSik.hasOwnProperty("catal")) {
        cocukSik.catal.fn("cocuk")
      } else {}
  
  
  
      let btn = document.createElement("button")
      btn.innerText = cocukSik.etiket
  
      kontrol1(btn, anaSik, cocukSik)
  
      btn.addEventListener("click", (e) => {
        kontrol2(anaSik, cocukSik)
  
        if (cocukSik?.sonraki) {
          ileri(cocukSik.sonraki)
  
        } else {
          sonFn(cocukSik)
        }
      })
  
      syf.siklar.append(btn)
  
    })


}

ileri(algObj)















