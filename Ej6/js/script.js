function dni(){
    var dni = prompt("Introduce el número del DNI");
    var letra = prompt("Indicque la letra en mayusculas");
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    
    // rango
    while ((dni<0)||(dni>99999999)){
      dni = prompt('El número introducido no es correto (debe estar entre 0 y 99999999), vuelva a teclearlo');
    }  
  
    var num = dni % 23;
    var letraReal = letras[num];  
    
    // bucle para pedir la letra correcta
    
    if (letra != letraReal){
      while(letra != letraReal){    
        letra = prompt('La letra es incorrecta, pruebe de nuevo');            
      }
      alert('La letra es correcta');
    }    
    else{
       alert('La letra es correcta');
    }      
  }