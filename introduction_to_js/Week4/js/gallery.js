/*Name this external file gallery.js*/
function loadingfunction(){
   console.log("on load ");
   var data = document.querySelectorAll(".flex img");
   for(var i=0;i<data.length-1;i++){
      data[i].setAttribute("tabindex",i+1);
   }
   data[data.length - 1].setAttribute("tabindex",0);
}
function upDate(previewPic){
    /* In this function you should 
       1) change the url for the background image of the div with the id = "image" 
       to the source file of the preview image
       
       2) Change the text  of the div with the id = "image" 
       to the alt text of the preview image 
    */
   document.getElementById('image').style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(' " + previewPic.src + "')";
   document.getElementById('image').style.backgroundSize = "cover";
   document.getElementById('image').style.backgroundPosition = "center";
   document.getElementById('image').innerText = previewPic.alt;
    
}
   
function unDo(){
    /* In this function you should 
       1) Update the url for the background image of the div with the id = "image" 
       back to the orginal-image.  You can use the css code to see what that original URL was
       
       2) Change the text  of the div with the id = "image" 
       back to the original text.  You can use the html code to see what that original text was
   */
   document.getElementById('image').style = ("background-image : url(''); ")  
   document.getElementById('image').innerText = "Hover over an image below to display here."  
}
