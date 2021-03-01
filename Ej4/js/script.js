function determinar(){
    var valores = [true, 5, false, 'hola', 'adios', 2];
    var valor1 = valores[1];
    var valor2 = valores[5];
    var texto1 = valores[3];
    var texto2 = valores[4];
    var bool1 = valores[0];
    var bool2 = valores[2];
    var resultado;
    
    // texto
    resultado = texto1 > texto2;
    alert(texto1+ ' > ' +texto2+ ' = '+resultado);  
    
    resultado = texto1 < texto2;
    alert(texto1+ ' < ' +texto2+ ' = '+resultado);
    
    // operaciones booleanas
    
    resultado = bool1 || bool2;
    alert(bool1+ ' OR ' +bool2+ ' = '+resultado);
  
    resultado = bool1 && bool2;
    alert(bool1+ ' AND ' +bool2+ ' = '+resultado);
    
    // operaciones matematicas    
    
    resultado = valor1 + valor2;
    alert('La suma de '+valor1+ ' y '+valor2+ ' es = '+resultado);
    
    resultado = valor1 - valor2;
    alert('La resta de '+valor1+ ' y '+valor2+ ' es = '+resultado);
  
    resultado = valor1 * valor2;
    alert('La multiplicacion de '+valor1+ ' y '+valor2+ ' es = '+resultado);
  
    resultado = valor1 / valor2;
    alert('La division de '+valor1+ ' y '+valor2+ ' es = '+resultado);
  
    resultado = valor1 % valor2;
    alert('El resto de '+valor1+ ' y '+valor2+ ' es = '+resultado);
    
  } 