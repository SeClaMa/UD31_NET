function palindromo(cadena){
  
    // convierto en minusculas
    cadena = cadena.toLowerCase();
    // convierto en array
    var letrasEspacios = cadena.split("");
    
    // eliminar espacios en blanco
    
    var cadenaSinEspacios = "";
    
    for (i in letrasEspacios){
      if(letrasEspacios[i] != " "){
        cadenaSinEspacios += letrasEspacios[i];
      }
    }
    
    var letras = cadenaSinEspacios.split("");
    var letrasReves = cadenaSinEspacios.split("").reverse();
    var igual = true;
    
    for(i in letras){
      if (letras[i] != letrasReves[i]){
        igual = false;
        break;
      }
      else{
        igual = true;
      }      
    }
    
    if(igual){
      return 'ES palindromo';    
    }
    else{
      return 'NO es palindromo';
    }
  }
  
  function pedirCad(){
    var otro = 'y';
    var cadena = prompt ("Introduce una palabra o frase");
    var valor = palindromo(cadena);
    
    while((otro!='n') || (otro!='N') || (otro!='no') || (otro!='No') || (otro!='NO')){
      alert('esta cadena '+valor);
      otro = prompt("¿Deseas escribir algo más? (y o n) ");
      if ((otro=='n') || (otro=='N') || (otro=='no') || (otro=='No') || (otro=='NO')){
        break;
      }
      else{
        cadena = prompt ("Introduce otra palabra o frase");
        valor = palindromo(cadena);
      }
    }    
  }