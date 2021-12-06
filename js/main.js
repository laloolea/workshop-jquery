$(document).ready(function () {
  let i = 0;
  $("#btnOriginal").one("click", () => {
    var $btnColor = $(
      `<button class = "btn btn-danger " id="btnColor" >Change Background Color</button>`
    );
    var $btnInput = $(
      `<button class = "btn btn-primary " id="btnInput">Create Input</button>`
    );
    $("#container").append($btnColor);
    $("#container").append($btnInput);

    $("#btnColor").on("click", () => {
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      $("body").css("background-color", "#" + randomColor);
    });

    $("#btnInput").on("click", () => {
      var $input = $(`<div class="input-group input-group-sm mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-sm">Number</span>
                    <input type="text" class="form-control cajas" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                </div>`);
      $("#container").append($input);

      $(`input`).on("keydown keyup", (e) => {
        // Get input value
        var inputVal = e.target.value;

        let isValid = false;
        var regex = /^[0-9\s]*$/;
        isValid = regex.test(inputVal);

        if (isValid) {
          $(`.cajas`).blur(function () {
            let $textoInput = "";
            $textoInput += `
                Numero: ${inputVal}
            `;
            $(`.textoCajas`).html(`${$textoInput}`);
            $textoInput = "";
            e.target.value = "";
          });
        } else {
          console.log("No es valida");
          $(`.textoCajas`).html(`No es valida`);
        }
      });
    });
  });
});
