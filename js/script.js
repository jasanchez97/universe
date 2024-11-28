// Crear un arreglo para almacenar los datos
var data = [];

// Función para crear un nuevo registro
function createRegister() {
  var name = $("#nombre").val();
  var age = $("#edad").val();
  var register = { nombre: nombre, edad: edad };
  data.push(register);
  showList();
}

// Función para mostrar la lista de registros
function showList() {
  var html = "";
  for (var i = 0; i < data.length; i++) {
    html += "<p>" + data[i].name + " - " + data[i].age + "</p>";
  }
  $("#lista").html(html);
}

// Función para actualizar un registro
function updateRegister(index) {
  var name = $("#nombre").val();
  var age = $("#edad").val();
  data[index].name = name;
  data[index].age = age;
  showList();
}

// Función para eliminar un registro
function deleteRegister(index) {
  data.splice(index, 1);
  showList();
}

// Eventos
$("#btn-create").click(function() {
  createRegister();
});

// Mostrar la lista de registros al cargar la página
showList();