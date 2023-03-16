const btnLoad = document.getElementById(load);
const btnLoadsecondary = document.getElementById(loadSecondary);
const callUrl = "https://api.pexels.com/v1/search?query=man-s-best-friend";

const request = fetch(callUrl, {
  headers: {
    Authorization: "OSISV3iEIIzj4pjGTpRCWrmvk2CQACd5dhwoAAtAqizL1KjmsL0bOz6v",
  },
})
  .then(resp => resp.json())
  .then(img => {
    const photo = img.photos;
    photo.forEach(element => {
        
    });
  });
btnLoad.addEventListener("click", event => {
    const col = document.createElement("div");
    col.className = "col";
    col.innerHTML = 

});
