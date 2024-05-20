
function validarInputs() {

  
    // Obtener los valores ingresados por el usuario
   
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    

    // Verificar si algún campo está en blanco

    if (firstName === "" || lastName === "" || email === "") {
      alert("Por favor, complete todos los campos marcados con *.");
      return false;
    }

    /* Verificar si el nombre contiene solo caracteres alfabéticos y espacios: 
    un bucle for recorre cada carácter de la cadena de nombre. 
    Se utiliza la función charCodeAt para obtener el código Unicode del carácter en la 
    posición actual y se verifica si es un carácter alfabético (A-Z o a-z) o un espacio ( )  */
    
    
    
    for (var i = 0; i < firstName.length; i++) {
      var charCode = firstName.charCodeAt(i);
      if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32)) {
        alert("El campo 'Nombre' solo puede contener caracteres alfabéticos y espacios.");
        return false;
      }
    }


    // Verificar si el apellido contiene solo caracteres alfabéticos y espacios
    for (var i = 0; i < lastName.length; i++) {
        var charCode = lastName.charCodeAt(i);
        if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32)) {
          alert("El campo 'Apellido' solo puede contener caracteres alfabéticos y espacios.");
          return false;
        }
    }


    // Validar Email
  
           
      
       expReg=/\S+@\S+\.\S+/
       validation = expReg.test(email)


        if (!validation)
        {
            alert("Por favor ingrese un correo electrónico válido" );
            return false;                  
        }
        
                
       //Si todas las validaciones son exitosas, enviar el formulario
    alert("Formulario enviado correctamente.");
    return true;
}

