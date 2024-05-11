function obtenerDatos(){
let nombre = document.getElementById('nombre').value;
let celular = document.getElementById('celular').value;
let email = document.getElementById('email').value;
let pais = document.getElementById('pais').value;
let ciudad = document.getElementById('ciudad').value;

    if(nombre=== null || nombre===''){
        alert('Ingresa tu nombre');  
       
    }
    if(celular=== null || celular===''){
        alert('Ingresa tu celular');
      
    }
    if(celular.length<12){
        alert('Ingresa tu celular completo');
        
    }
    if(email=== null || email===''){
        alert('Ingresa tu email');
      
    }
    if(pais=== null || pais===''){
          alert('Ingresa tu pais');
        
    }
    if(ciudad=== null || ciudad===''){
            alert('Ingresa tu ciudad');
            
    }
         

    arroba = email.indexOf("@");
    punto =  email.lastIndexOf(".");
  
    
    if (arroba < 1 || ( punto - arroba < 2 )||email===""){
       console.log("correo invalido");
       alert('correo invalido');
       
    }else{
      console.log("correo valido");
      
    }
        
    if(nombre.length>1 && pais.length>1 && arroba===1 && celular.length===12){
        alert('ingresado Correctamente');
    }  
}  
 


