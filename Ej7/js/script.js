function factorial(){
    var num = prompt("Introduce un número para saber su factorial");
    var resultado = 1;
  
    for(var i=num; i>0; i--){
      resultado *= i;       
    }
    
    alert('El factorial de '+num+ ' es = '+resultado);
  }
  