window.addEventListener("load", function () {
  var form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que se envíe el formulario

    // Obtener los valores de los campos del formulario
    var name =
      document.querySelector('input[type="text"]') &&
      document.querySelector('input[type="text"]').value;
    var email =
      document.querySelector('input[type="email"]') &&
      document.querySelector('input[type="email"]').value;
    var password =
      document.querySelector('input[type="password"]') &&
      document.querySelector('input[type="password"]').value;
    var avatar =
      document.querySelector('input[type="file"]') &&
      document.querySelector('input[type="file"]').value;
    var fecha =
      document.querySelector('input[type="date"]') &&
      document.querySelector('input[type="date"]').value;
    var bio =
      document.querySelector("textarea") &&
      document.querySelector("textarea").value;
    var job =
      document.querySelector("select") &&
      document.querySelector("select").value;
    var interests = [];
    var checkboxes = document.querySelectorAll(
      'input[type="checkbox"]:checked'
    );

    for (var i = 0; i < checkboxes.length; i++) {
      interests.push(checkboxes[i].value);
    }

    var age = document.querySelector('input[type="radio"]:checked');

    // Mostrar los datos por pantalla
    var output = name ? "Nombre: " + name + "\n" : "";
    output += email ? "Correo electrónico: " + email + "\n" : "";
    output += password ? "Contraseña: " + password + "\n" : "";
    output += avatar ? "Foto de perfil: " + avatar + "\n" : "";
    output += fecha ? "Fecha de nacimiento: " + fecha + "\n" : "";
    output += bio ? "Biografía: " + bio + "\n" : "";
    output += job ? "Función: " + job + "\n" : "";
    output +=
      interests.length > 0 ? "Intereses: " + interests.join(", ") + "\n" : "";
    output += age ? "Newsletter: " + age.value + "\n" : "";
    console.log(age);
    output ? alert(output) : alert("debe cargar datos");
  });
});
