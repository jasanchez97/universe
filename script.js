// Crear un arreglo para almacenar los datos
var datos = [];

// Función para crear un nuevo registro
function crearRegistro() {
  var nombre = $("#nombre").val();
  var edad = $("#edad").val();
  var registro = { nombre: nombre, edad: edad };
  datos.push(registro);
  mostrarLista();
}

// Función para mostrar la lista de registros
function mostrarLista() {
  var html = "";
  for (var i = 0; i < datos.length; i++) {
    html += "<p>" + datos[i].nombre + " - " + datos[i].edad + "</p>";
  }
  $("#lista").html(html);
}

// Función para actualizar un registro
function actualizarRegistro(index) {
  var nombre = $("#nombre").val();
  var edad = $("#edad").val();
  datos[index].nombre = nombre;
  datos[index].edad = edad;
  mostrarLista();
}

// Función para eliminar un registro
function eliminarRegistro(index) {
  datos.splice(index, 1);
  mostrarLista();
}

// Eventos
$("#btn-create").click(function() {
  crearRegistro();
});

// Mostrar la lista de registros al cargar la página
mostrarLista();