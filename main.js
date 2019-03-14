
const album_btn = document.getElementById("album-button");
let photo = document.getElementsByClassName("photo-contain");


album_btn.addEventListener("click", ()=>{
    if(photo[3].style="display:none",
        photo[4].style="display:none",
        photo[5].style="display:none"){
            photo[3].style="display:flex";
            photo[4].style="display:flex";
            photo[5].style="display:flex";
            album_btn.innerText="Cкрыть альбомы";}
    
    else{
            photo[3].style="display:none";
            photo[4].style="display:none";
            photo[5].style="display:none";
            album_btn.innerText="Смотреть все альбомы";}
    });















/*const lines = btn.querySelectorAll(".line");
const cls = { open: "open", close: "close" };
let btnClass = cls.open;

 btn.addEventListener("click", () => {
  if (btn.classList.contains(cls.open)) {
    btn.classList.remove(btnClass);
    btnClass = cls.close;
  } else if (btn.classList.contains(cls.close)) {
    btn.classList.remove(btnClass);
    btnClass = cls.open;
  }

  void btn.offsetWidth;
  btn.classList.add(btnClass);
});*/