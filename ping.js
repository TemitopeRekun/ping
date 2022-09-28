function errorMessage() {
   let message = document.getElementById("email");
   let text;

   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(message.value)) {
      text = "";
      message.className = "";
   } else {
      text = "Please provide a valid email address";
      message.className = "color";
   }
   document.getElementById("error").innerHTML = text;
}
