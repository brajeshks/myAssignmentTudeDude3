   function changeColor(element,color) {
      element.style.backgroundColor = color;  // changes box background color
      element.style.color = "white";
    }


      function greet() {
      const name = document.getElementById("nameInput").value;
      const greeting = document.getElementById("greeting");

      if (name.trim() !== "") {
        greeting.innerText = "Hello, " + name;
      } else {
        greeting.innerText = " Hello" ;
      
      }
    }