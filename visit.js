function myFunction() {
    document.body.style.backgroundColor = "lightgreen";
  }


  function SetNewImage(){
      document.getElementById("image1").src="cn tower2.jpg"
  }

  function SetOldImage(){
    document.getElementById("image1").src="cn tower.jpg"
}

function SetNewImage2(){
    document.getElementById("image2").src="nathan11.jpg"
}

function SetOldImage2(){
  document.getElementById("image2").src="Nathan22.jpg"
}

function SetNewImage3(){
    document.getElementById("image3").src="royal2.jpg"
}

function SetOldImage3(){
  document.getElementById("image3").src="RoyalMuseum.JPG"
}

function changeText(id) {
    id.innerHTML = "Tour CN";
  }

  function mOver(obj) {
    obj.innerHTML = "Mouse is in."
  }
  
  function mOut(obj) {
    obj.innerHTML = "2. Nathan Phillips Square"
  }