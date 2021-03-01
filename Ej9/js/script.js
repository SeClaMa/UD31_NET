function minMay(cadena){
  
    // son mayusculas
    if(cadena==cadena.toUpperCase()){
      return 'son mayúsculas';
    }
    // son minusculas
    else if(cadena==cadena.toLowerCase()){
      return 'son minúsculas';
    }
    // son mayusculas y minusculas
    else{
      return 'son mayúsculas y minúsculas';
    }
  }
  
  function pedirFrase(){
    var otro = 'y';
    var cadena = prompt ("Introduce una palabra o frase");
    var valor = minMay(cadena);
    
    while((otro!='n') || (otro!='N') || (otro!='no') || (otro!='No') || (otro!='NO')){
      alert('Las letras de la cadena '+valor);
      otro = prompt("¿Deseas escribir algo más? (y o n) ");
      if ((otro=='n') || (otro=='N') || (otro=='no') || (otro=='No') || (otro=='NO')){
        break;
      }
      else{
        cadena = prompt ("Introduce otra palabra o frase");
        valor = minMay(cadena);
      }
    }    
  }