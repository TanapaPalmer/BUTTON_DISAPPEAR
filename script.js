function bringBackButton1() {
    const button1 = document.createElement("button");
    button1.setAttribute("id", "button_1");
    button1.textContent = "Button 1";
  
    button1.onclick = function () {
      this.remove();
    };
  
    const buttonsDiv = document.getElementById("buttons");
    buttonsDiv.appendChild(button1);
  }
  
  
  