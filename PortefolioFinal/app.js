let main = document.getElementById('main')
let p2 = document.getElementById('p2')
let p3 = document.getElementById('p3')

p2.addEventListener("click", e =>{
    e.preventDefault();
    main.innerHTML = `        <h2>Parcial 2</h2>
    <a href="../Parcial 2/animaciones/index.html"><button class="skewX" type="button">Ejercicio 1</button></a>
    <a href="../Parcial 2/CSS/ejercicio1.html"><button class="skewX" type="button">Ejercicio 2</button></a>
    <a href="../Parcial 2/CSS/ejercicio2.html"><button class="skewX" type="button">Ejercicio 3</button></a>
    <a href="../Parcial 2/CSS/ejercicio3.html"><button class="skewX" type="button">Ejercicio 4</button></a>
    <a href="../Parcial 2/corrigeerrores/index.html"><button class="skewX" type="button">Ejercicio 5</button></a>
    <a href="../Parcial 2/Ejerciciosmodelocaja/index2.html"><button class="skewX" type="button">Ejercicio 6</button></a>
    <a href="../Parcial 2/Ejerciciosmodelocaja/INDEX3.html"><button class="skewX" type="button">Ejercicio 7</button></a>
    <a href="../Parcial 2/Ejerciciosmodelocaja/index.html"><button class="skewX" type="button">Ejercicio 8</button></a>
    <a href="../Parcial 2/galerias/index.html"><button class="skewX" type="button">Ejercicio 9</button></a>
    <a href="../Parcial 2/galeriaplanetas/index.html"><button class="skewX" type="button">Ejercicio 10</button></a>
    <a href="../Parcial 2/galerias/index2.html"><button class="skewX" type="button">Ejercicio 11</button></a>
    <a href="../Parcial 2/maquetacion/index.html"><button class="skewX" type="button">Ejercicio 12</button></a>
    <a href="../Parcial 2/maquetacion/index2.html"><button class="skewX" type="button">Ejercicio 13</button></a>
    <a href="../Parcial 2/archivosexamen/leyes-informatica.html"><button class="skewX" type="button">Ejercicio 14</button></a>`
})

p3.addEventListener("click", e => {
    e.preventDefault()
    main.innerHTML = `        <h2>Parcial 3</h2>
    <a href="../Parcial 3/arreglos/index.html"><button class="skewX" type="button">Ejercicio 1</button></a>
    <a href="../Parcial 3/Nomofobiatest/index.html"><button class="skewX" type="button">Ejercicio 2</button></a>
    <a href="../Parcial 3/practica1/index.html"><button class="skewX" type="button">Ejercicio 3</button></a>
    <a href="../Parcial 3/practica2/index.html"><button class="skewX" type="button">Ejercicio 4</button></a>
    <a href="../Parcial 3/practica2/index.html"><button class="skewX" type="button">Ejercicio 5</button></a>
    <a href="../Parcial 3/practica3/index.html"><button class="skewX" type="button">Ejercicio 6</button></a>
    <a href="../Parcial 3/practica3/index2.html"><button class="skewX" type="button">Ejercicio 7</button></a>
    <a href="../Parcial 3/reto3/index.html"><button class="skewX" type="button">Ejercicio 8</button></a>`
})