var popup = document.querySelector(".popup");
    var dismiss = document.querySelector(".popup__dismiss");
    var shop = document.querySelector(".popup__shop");

    setTimeout(function(){
      popup.classList.add("popup--show");
    },3000);

    dismiss.addEventListener("click",function(){
      console.log("kil dismiss");
      popup.classList.remove("popup--show");
      popup.classList.add("popup--close");
    })

    shop.addEventListener("click",function(){
      console.log("kil shop");
      popup.classList.remove("popup--show");
      popup.classList.add("popup--close");
      alert("Selamat anda dapat diskon");
    })