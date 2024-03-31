

export const fonk = {

    gun: (gunSayisi) => new Date(Date.now() + 86400000 * gunSayisi).toLocaleDateString().slice(0, -5),

    asiBilgi: (doz2mi = false) => {
        if (!doz2mi) {return `1.Doz>>${gun(0)}\n2.Doz>>${gun(3)}\n3.Doz>>${gun(7)}\n4.Doz>>${gun(14)}-${gun(28)} arası`
      } else { return `1.Doz>>${gun(0)}\n2.Doz>>${gun(3)}` }
    },
    rigHesap: (hastaKg, insanMi = 0) => hastaKg * (insanMi ? 20 : 40),
    display: {
        framesOff: [{ display: "none" }],
        timingOff: { fill: "forwards" },
        framesOn: [{ display: "" }],
        timingOn: { fill: "forwards" },
        on(elem) {
            elem.animate(this.framesOn, this.timingOn)
        },
        off(elem) {
            elem.animate(this.framesOff, this.timingOff)
        }
    },
    yenidenBtn: () => {
        let btn = document.createElement("button")
        btn.innerText = "tekrar başla"
        btn.addEventListener("click", () => window.location.reload())
        return btn
    },
    cocuklariOldur : (baba) => {
        while (baba.children.length) { baba.children.item(0).remove() }
      }

}