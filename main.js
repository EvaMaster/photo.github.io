$(document).ready(function(){
    $(".album-photo").magnificPopup({
        type:"image",
        removalDelay: 300,
    });
});


















/*const album_btn = document.getElementById("album-button"),
      album_btn_close = document.getElementById("album-button_close"),
      photo = document.getElementsByClassName("album-photo"),
      album_hidden = document.getElementsByName("album"),
      galery_hidden = document.getElementsByClassName("galery-hidden")[0],
      galery_hidden_photo = document.getElementsByClassName("galery-hidden_photo");
let album = document.getElementsByClassName("photo-contain");




album_btn.addEventListener("click", ()=>{
    for(i=3; i<=album.length-1;i++){
        album[i].classList.add("d-f"),
        album[i].classList.remove("d-none"),
        album_btn.classList.remove("d-f"),    
        album_btn.classList.add("d-none"),
        album_btn_close.classList.remove("d-none"),
        album_btn_close.classList.add("d-f");
    }
    });

album_btn_close.addEventListener("click", ()=>{
    for(i=3; i<=album.length-1;i++){
        album[i].classList.add("d-none"),
        album[i].classList.remove("d-f"),
        album_btn_close.classList.remove("d-f"),
        album_btn_close.classList.add("d-none"),
        album_btn.classList.add("d-f"),
        album_btn.classList.remove("d-none"); 
    }
    });


    photo[0].addEventListener("click", ()=>{
        galery_hidden.classList.remove("d-none");
        galery_hidden.classList.add("d-f");
        galery_hidden_photo[0].classList.add("d-f");
        galery_hidden_photo[0].classList.remove("d-none");
        });


    photo[1].addEventListener("click", ()=>{
        galery_hidden.classList.remove("d-none");
        galery_hidden.classList.add("d-f");
        galery_hidden_photo[1].classList.add("d-f");
        galery_hidden_photo[1].classList.remove("d-none");
        });
    photo[2].addEventListener("click", ()=>{
        galery_hidden.classList.remove("d-none");
        galery_hidden.classList.add("d-f");
        galery_hidden_photo[2].classList.add("d-f");
        galery_hidden_photo[2].classList.remove("d-none");
        });
    photo[3].addEventListener("click", ()=>{
        galery_hidden.classList.remove("d-none");
        galery_hidden.classList.add("d-f");
        galery_hidden_photo[3].classList.add("d-f");
        galery_hidden_photo[3].classList.remove("d-none");
        });
    photo[4].addEventListener("click", ()=>{
        galery_hidden.classList.remove("d-none");
        galery_hidden.classList.add("d-f");
        galery_hidden_photo[4].classList.add("d-f");
        galery_hidden_photo[4].classList.remove("d-none");
        });
    photo[5].addEventListener("click", ()=>{
        galery_hidden.classList.remove("d-none");
        galery_hidden.classList.add("d-f");
        galery_hidden_photo[5].classList.add("d-f");
        galery_hidden_photo[5].classList.remove("d-none");
        });


galery_hidden.addEventListener("click", ()=>{
    galery_hidden.classList.remove("d-f");
    galery_hidden.classList.add("d-none");
    galery_hidden_photo[0].classList.add("d-none");
    galery_hidden_photo[0].classList.remove("d-f");
    galery_hidden_photo[1].classList.add("d-none");
    galery_hidden_photo[1].classList.remove("d-f");
    galery_hidden_photo[2].classList.add("d-none");
    galery_hidden_photo[2].classList.remove("d-f");
    galery_hidden_photo[3].classList.add("d-none");
    galery_hidden_photo[3].classList.remove("d-f");
    galery_hidden_photo[4].classList.add("d-none");
    galery_hidden_photo[4].classList.remove("d-f");
    galery_hidden_photo[5].classList.add("d-none");
    galery_hidden_photo[5].classList.remove("d-f");

});
*/