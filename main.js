const estudiante = [];

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
    const promedio = (nota1 + nota2 + nota3) / 3;
    const nuevoObjeto = {
      nombre:nombre,
      curso:curso,
      genero:genero,
      nota1:nota1, 
      nota2:nota2, 
      nota3:nota3,
      promedio:promedio,
    }
    estudiante.push(nuevoObjeto)

    
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
  
        `
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
localStorage.setItem('estudiante',JSON.stringify(estudiante))
});

function reset() {
  location.reload();
}

const consultar = document.querySelector('#consultar')

consultar.addEventListener('click',(e)=>{
  e.preventDefault()
  const data = JSON.parse(localStorage.getItem('estudiante'))
 
console.log(data)
data.forEach(valor =>{
  tabla.innerHTML += `
        <td>${valor.nombre}</td>
        <td>${valor.genero}</td>
        <td>${valor.curso}</td>
        <td>${valor.nota1}</td>
        <td>${valor.nota2}</td>
        <td>${valor.nota3}</td>
        <td>${valor.promedio}</td>
        <td id ="resultado" >${valor.resultado}</td>

  `
})
 
})
