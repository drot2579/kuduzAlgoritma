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
// kedikopek +/- ?

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


let [kedikopek, ozelDurum, hafifYara, imkan, hayvanAsi, sorunsuz, yedidenAz,] = [null];
let ozelDurumlar = ["bas", "yetmez", "bagisik", "tirmik"];
function kdz() {

    kedikopek = confirm("kedikopek ?");
    if (!kedikopek) {
        alert("developing");
    } else {
        ozelDurum = prompt(ozelDurumlar.join(", ") + "?");
        if (ozelDurum == "bas" || ozelDurum == "yetmez") {
            // exit2
            alert("asi,ig");
        } else if (ozelDurum == "bagisik") {
            // exit3
            alert("asi2doz");
        } else if (ozelDurum == "tirmik") {
            // exit4
            alert("hicbirsey");
        } else {
            hafifYara = prompt("hafifYara?");
            if (hafifYara) {
                imkan = prompt("gözlem imkanı?");
                if (imkan) {
                    alert("gozlem");
                    sorunsuz = prompt("sorunsuz?");
                    if (sorunsuz) {
                        // exit4
                        alert("noasi,noig");
                    } else {
                        // exit5
                        alert("asi,noig");
                    }
                } else {
                    // exit6
                    alert("asi,noig");
                }
            } else {
                hayvanAsi = prompt("hayvanAsi?");
                if (hayvanAsi) {
                    imkan = true; // öyle varsayılıyor
                    alert("noasi,noig,gozlem");
                    sorunsuz == confirm("sorunsuz?");
                    if (sorunsuz) {
                        // exit7
                        alert("hicbirsey");
                    } else {
                        // exit8
                        alert("asi,ig");
                    }
                } else {
                    imkan = confirm("imkan?");
                    if (imkan) {
                        alert("asi,gozlem");
                        sorunsuz = confirm("sorunsuz?");
                        if (sorunsuz) {
                            // exit9
                            alert("hicbirsey");
                        } else {
                            yedidenAz = prompt("yedidenAz?");
                            if (yedidenAz) {
                                // exit10
                                alert("ig");
                            } else {
                                // exit11
                                alert("hicbirsey");
                            }
                        }
                    } else {
                        // exit12
                        alert("asi,ig");
                    }

                }
            }
        }
    }
}


