function recibir(){
    let form = document.forms["form"];
    var x = form["entero"];
    entero= (x.value);

    console.log("numero entero ingresado: " + entero);
    document.write("numero entero ingresado: "+ entero + " ");

    var suma=0;

    for(var i=1;i<=entero;i++){
        suma= suma + i;
    }
    console.log("suma total del numero ingresado: " + suma);
    document.write("suma total del numero ingresado: "+ suma);
}