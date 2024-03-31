const asiBilgi = (doz2mi = false) => {
    if (!doz2mi) {
        return `1.Doz>>${gun(0)}\n2.Doz>>${gun(3)}\n3.Doz>>${gun(7)}\n4.Doz>>${gun(14)}-${gun(28)} arası`;
    } else { return `1.Doz>>${gun(0)}\n2.Doz>>${gun(3)}`; }
};
const gun = (gunSayisi) => new Date(Date.now() + 86400000 * gunSayisi).toLocaleDateString().slice(0, -5);
const rigHesap = (hastaKg, insanMi = 0) => hastaKg * (insanMi ? 20 : 40);


// pkkt : Provoke Kanamasız Kedi Tırmalaması
// kepek: KEdi veya köPEK

// kedi veya köpek tarafından yaralanma haricinde bir olay mı?
// kediKopek +/- ?

// ozelDurum: bas-boyun yarası mı, imm. yet. var mı, aşılı(bağışıklı) insan mı, pkkt mi, standart mi ?
// bas yetmez bagisik pkkt standart ?

// hafifYara bir yara mı(kat. 2)?
// hafifYara +/- ?

// gözlem imkanı var mı?
// imkan +/- ?

// hayvan son 1 sene içinde kuduz aşısı olmuş mu?
//  hayvanAsi +/- ?

// gözlem sorunsuz mu gidiyor?
// sorunsuz +/- ?

// ilk aşı yapılalı yedi günden az mı oldu
// yedidenAz +/- ?


// sonuçlar: asi-noasi, ig-noig, gozlem-nogozlem, asi2doz,asivegozlem, hicbirsey


let kediKopek, ozelDurum, hafifYara, imkan, hayvanAsi, sorunsuz, yedidenAz;
let ozelDurumlar = ["bas", "yetmez", "bagisik", "tirmik"];


const display = {
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
}

// HIDE ALL SECTIONS BUT FIRST
function hideAllButFirst() {
    document.querySelectorAll("main>section:not(.first)").forEach((el) => {
        display.off(el)
    })
}

// const inputs = {}
// document.body.parentElement.parentElement

// let cs = document.querySelector("section.kediKopek")
// document.querySelectorAll('button').forEach((btn) => {
//     btn.addEventListener("click", (e) => {
//         let curSec = e.target.parentElement.parentElement
//         let key = curSec.classList[0]
//         inputs[key] = e.target.value
//         console.log(this);
//     })
// })

// function eval(e) {
//     let tar = e.target
//     let surSec = tar.parentElement.parentElement
//     let val = tar.value

// }


/* 
aid 0       
aid 1       
aid 11      // exit
aid 12      // exit
aid 13      // exit
aid 10      
aid 101     
aid 1011    
aid 10111   // exit
aid 10110   // exit
aid 1010    // exit
aid 100     
aid 1001    
aid 10011   
aid 100111  // exit
aid 100110  // exit
aid 1000    
aid 10001   
aid 100011  // exit
aid 100010  
aid 1000101 // exit
aid 100100  // exit
aid 10000   // exit

 */
















function kdz() {

    if (!kediKopek) {
        // aid 0
        alert("developing");
    } else {
        // aid 1
        if (ozelDurum == "bas" || ozelDurum == "yetmez") {
            // aid 11           // exit
            alert("asi,ig");
        } else if (ozelDurum == "bagisik") {
            // aid 12           // exit
            alert("asi2doz");
        } else if (ozelDurum == "tirmik") {
            // aid 13           // exit
            alert("hicbirsey");
        } else {
            // aid 10
            if (hafifYara) {
                // aid 101
                if (imkan) {
                    // aid 1011
                    alert("gozlem");
                    if (sorunsuz) {
                        // aid 10111            // exit
                        alert("noasi,noig");
                    } else {
                        // aid 10110            // exit
                        alert("asi,noig");
                    }
                } else {
                    // aid 1010         // exit
                    alert("asi,noig");
                }
            } else {
                // aid 100
                if (hayvanAsi) {
                    // aid 1001
                    imkan = true; // öyle varsayılıyor
                    // aid 10011
                    alert("noasi,noig,gozlem");
                    if (sorunsuz) {
                        // aid 100111           // exit
                        alert("hicbirsey");
                    } else {
                        // aid 100110           // exit
                        alert("asi,ig");
                    }
                } else {
                    // aid 1000
                    if (imkan) {
                        // aid 10001
                        alert("asi,gozlem");
                        if (sorunsuz) {
                            // aid 100011           // exit
                            alert("hicbirsey");
                        } else {
                            // aid 100010
                            if (yedidenAz) {
                                // aid 1000101          // exit
                                alert("ig");
                            } else {
                                // aid 100100           // exit
                                alert("hicbirsey");
                            }
                        }
                    } else {
                        // aid 10000            // exit
                        alert("asi,ig");
                    }

                }
            }
        }
    }
}

