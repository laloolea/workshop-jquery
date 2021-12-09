var regex = /^[0-9\s]*$/;
let totalPoints = 0;
let id = 0;

$(document).ready(function () {
  //evento para el boton que crea los dos botones extras
  $("#btnOriginal").one("click", () => {
    //Se crean las variables que contienen los botones
    var $btnColor = $(
      `<button class = "btn btn-danger " id="btnColor" >Change Background Color</button>`
    );
    var $btnInput = $(
      `<button class = "btn btn-primary " id="btnInput">Create Input</button>`
    );
    //Se insertan los botones en el container
    $("#container").append($btnColor);
    $("#container").append($btnInput);

    //evento que cambia de color del background aleatoriamente
    $("#btnColor").on("dblclick", () => {
      const colorBackground = Math.floor(Math.random() * 16777215).toString(16);
      $("body").css("background-color", "#" + colorBackground);
    });
    //evento que crea los input fields
    $("#btnInput").on("click", () => {
      let $input = $(`
                    <input type="text" class="form-control cajas" id="${id}" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" onblur="suma()" onkeydown="return keyispressed(event);">
                `);
      id++;
      $("#texto").append($input);
    });
  });
});

//Función para comprobar cosas
function keyispressed(e) {
  var charValue = String.fromCharCode(e.keyCode);
  if (isNaN(charValue) && e.which != 8 && e.which != 189) {
    // BSP KB code is 8
    e.preventDefault();
  }
  return true;
}
//Funcion Suma
function suma() {
  totalPoints = 0;
  $("#texto input").each(function () {
    let prev = parseFloat($(this).val());
    if (isNaN(prev)) {
      prev = 0;
    }
    totalPoints = prev + totalPoints;
  });
  let paragraph = `<p class="result">${totalPoints}</p>`;
  $(".result").remove();
  $("#texto").append(paragraph);
}
