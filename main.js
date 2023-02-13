const estudiante = {};

function crearEsudante() {
  const nombre = document.getElementById("nombre").value;
  const curso = document.querySelector("#curso").value;
  const genero = document.querySelector("#genero").value;
  const nota1 = +document.querySelector("#nota1").value;
  const nota2 = +document.querySelector("#nota2").value;
  const nota3 = +document.querySelector("#nota3").value;

  if (
    nombre === "" ||
    genero === "" ||
    curso === "" ||
    nota1 === "" ||
    nota2 === "" ||
    nota3 === ""
  ) {
    alert("Diligencie todos los datos");
  } else {
    estudiante.nombre = nombre;
    estudiante.curso = curso;
    estudiante.genero = genero;
    estudiante.nota1 = nota1;
    estudiante.nota2 = nota2;
    estudiante.nota3 = nota3;

    const promedio = (nota1 + nota2 + nota3) / 3;
    if (promedio >= 3.5 && promedio <= 5) {
      const resultado = "aprobado";
      tabla.innerHTML += `
          <td>${nombre}</td>
        <td>${genero}</td>
        <td>${curso}</td>
        <td>${nota1}</td>
        <td>${nota2}</td>
        <td>${nota3}</td>
        <td>${promedio}</td>
        <td id = "resultado2">${resultado}</td>
  
        `;
    } else if (promedio < 3.5 && promedio >= 0) {
      const resultado = "Reprobado";
      tabla.innerHTML += `
          <td>${nombre}</td>
        <td>${genero}</td>
        <td>${curso}</td>
        <td>${nota1}</td>
        <td>${nota2}</td>
        <td>${nota3}</td>
        <td>${promedio}</td>
        <td id ="resultado" >${resultado}</td>
  
        `;
    } else {
      alert("rango de notas de 0 a 5 unidades");
      reset();
    }
  }
}

const crear = document.querySelector("#crear");
crear.addEventListener("click", (e) => {
  e.preventDefault();
  crearEsudante();
});

function reset() {
  location.reload();
}
