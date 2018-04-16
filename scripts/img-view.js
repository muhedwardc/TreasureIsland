const img = document.querySelector('.materialboxed');
const materialBoxOverlay = document.querySelector('.material-box-overlay');

const imgOptions = {
    inDuration: 300,
    outDuration: 200
}
const media = M.Materialbox.init(img, imgOptions);