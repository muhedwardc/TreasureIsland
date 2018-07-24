let listPaket = new Array();
let listPaketHeight = new Array();
let deskripsiPaket = document.querySelectorAll(".deskripsi-paket");

for (let i = 1; i < deskripsiPaket.length; i+=3) {
    listPaket.push(deskripsiPaket[i]);
    listPaketHeight.push(deskripsiPaket[i].clientHeight);
}

listPaketHeight.sort();
let maxHeight = listPaketHeight[listPaketHeight.length - 1];

for (let paket of listPaket) {
    paket.style.height = maxHeight + 'px';
}     