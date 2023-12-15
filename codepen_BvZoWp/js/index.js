const jsmediatags = window.jsmediatags;

function  a(content){
  jsmediatags.read(content.files[0], {
    onSuccess: function(tag) {
      console.log(tag);
      const picture = tag.tags.picture;
      let base64String = "";
      const ly = document.getElementById("lyrics");
      const ar = document.getElementById("artist");
      const al = document.getElementById("album");
      ///ly.innerHTML=tag.tags.lyrics.lyrics.replace(/\n/gi,"<br>");
      ar.innerText=tag.tags.artist;
      al.innerText=tag.tags.album;
      
      
      if(picture){
        const img = document.getElementById("img");
        for (let i = 0; i < picture.data.length; i++) { 
            base64String += String.fromCharCode(picture.data[i]); 
        } 
        const imageUri = "data:" + picture.format + ";base64," + window.btoa(base64String); 
        img.src=imageUri;
      }
      else{
        img.style.display=none;
      }
    },
    onError: function(error) {
      console.log(error);
    }
  });
  
  
  const sound = document.getElementById('audio');
  sound.src = URL.createObjectURL(content.files[0]);
  sound.onend = function(e) {
	    URL.revokeObjectURL(this.src);
	}
  
  
}

function file(){
  var inputs = document.querySelector('#input');
  inputs.click();
}
function file2(){
  var inputs = document.querySelector('#input');
  console.log(inputs.name);
  var name = document.querySelector('#in');
  name.textContent=inputs.files[0].name;
}