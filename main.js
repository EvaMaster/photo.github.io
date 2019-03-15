$(document).ready(function(){
    $(".album-photo").magnificPopup({
        type:"image",
        removalDelay: 1000,
        mainClass: 'my-mfp-zoom-in',
        
    });
    
    
    $('.open-popup-link').magnificPopup({
  type:'inline',
  midClick: true,
        removalDelay: 1000,
        mainClass: 'my-mfp-zoom-in'
});

   $('.video-play').magnificPopup({
  items: {
	     src: 'https://www.youtube.com/watch?v=7eo8XpT4CmM'
     },
  type: 'iframe',
  iframe: {
	    	markup: '<div class="mfp-iframe-scaler">'+
            		'<div class="mfp-close"></div>'+
            		'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
            		'</div>', 
        patterns: {
            youtube: {
	              index: 'youtube.com/', 
	              id: 'v=', 
	              src: 'https://www.youtube.com/embed/2xDgGCDwRFc' 
		        }
		     },
		     srcAction: 'iframe_src', 
     }
}); 
  
  $(".video-button").click(function(){
      $(".video_hidden").show("slow");
  });
$(".video-button_hidden").click(function(){
      $(".video_hidden").hide("slow");
  });
    
    
   
    $(".album-button").click(function(){
      $(".album-list_hidden").show("slow");
  });
$("#album-button_close").click(function(){
      $(".album-list_hidden").hide("slow");
  });
    
    
    $(".content-wrapper-header").click(function(){
      $(".services-wrapper-menu").show("slow");
  });
    
    
    
    
    
    });

const album_btn = document.getElementById("album-button"),
      album_btn_close = document.getElementById("album-button_close"),
      video_btn = document.getElementById("video-button"),
      video_btn_close = document.getElementById("video-button_hidden");


let album = document.getElementsByClassName("photo-contain");

album_btn.addEventListener("click", ()=>{
    for(i=3; i<=album.length-1;i++){
        //album[i].classList.add("d-f"),
        //album[i].classList.remove("d-none"),
        album_btn.classList.remove("d-f"), 
        album_btn.classList.add("d-none"),
        album_btn_close.classList.remove("d-none"),
        album_btn_close.classList.add("d-f");
    }
    });

album_btn_close.addEventListener("click", ()=>{
    for(i=3; i<=album.length-1;i++){
        //album[i].classList.add("d-none"),
        //album[i].classList.remove("d-f"),
        album_btn_close.classList.remove("d-f"),
        album_btn_close.classList.add("d-none"),
        album_btn.classList.add("d-f"),
        album_btn.classList.remove("d-none"); 
    }
    });

video_btn.addEventListener("click", ()=>{
        video_btn.classList.remove("d-f"), 
        video_btn.classList.add("d-none"),
        video_btn_close.classList.remove("d-none"),
        video_btn_close.classList.add("d-f");
    });

video_btn_close.addEventListener("click", ()=>{
        video_btn_close.classList.remove("d-f"),
        video_btn_close.classList.add("d-none"),
        video_btn.classList.add("d-f"),
        video_btn.classList.remove("d-none"); 
    });