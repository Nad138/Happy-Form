function validarFormulario(){
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var edad = document.getElementsByClassName("edad").value;
  var residencia = document.getElementsByClassName("residencia").value;
  var regNacimiento = document.getElementsByClassName("nacimiento".value);,

  var correcto = /^[A-Z]{1}[a-z]+$/;
  if(!correcto.test(nombre)){
  alert("Debe ingresar sus datos de manera correcta");
 }
}
