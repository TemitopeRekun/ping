function errorMessage() {
   let message = document.getElementById("email");
   let text;

   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(message.value)) {
      text = "";
      message.className = "";
   } else if (message.value == "") {
      text = "Whoops! It looks like you forgot to add your email";
      message.className = "color";
   } else {
      text = "Please provide a valid email address";
      message.className = "color";
   }
   document.getElementById("error").innerHTML = text;
}
