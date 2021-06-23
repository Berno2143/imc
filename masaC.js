var kg=parseFloat(prompt("ingresa tu peso en KG"));
var Estatura=parseFloat(prompt("ingresa tu estatura en metros"));
masac=(kg/Estatura^2).toFixed(2);
document.write("hola tu indice de masa corporal es: " + masac); 


/* var n = parseInt(prompt("Introduce un número entero: "))
var suma = n * (n + 1) / 2
document.write("La suma de los primeros números enteros desde 1 hasta " + str(n) + " es " + str(suma)) */
