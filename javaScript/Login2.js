 // loging


 /*  // document.getElementById('myForm').addEventListener('submit', function(event) {
     //   event.preventDefault(); // Evita el envío del formulario
        
     const nombre = document.querySelector('input[name="nombre"]').value;
     const apellido = document.querySelector('input[name="apellido"]').value;
     const apodo = document.querySelector('input[name="apodo"]').value;
     const mail = document.querySelector('input[name="mail"]').value;
     const repeatMail = document.querySelector('input[name="repeatMail"]').value;
     const password = document.querySelector('input[name="password"]').value;
     const repeatPassword = document.querySelector('input[name="repeatPassword"]').value;
     
     if (nombre && apellido && apodo && mail && repeatMail && password && repeatPassword) {
         if (mail !== repeatMail) {
             Swal.fire({
                 icon: 'error',
                 title: 'Error',
                 text: 'Los correos electrónicos no coinciden'
             });
         } else if (password !== repeatPassword) {
             Swal.fire({
                 icon: 'error',
                 title: 'Error',
                 text: 'Las contraseñas no coinciden'
             });
         } else {
             Swal.fire({
                 icon: 'success',
                 title: 'Formulario enviado',
                 text: 'Tu formulario ha sido enviado exitosamente'
             });
             // Aquí puedes añadir el código para enviar el formulario al servidor
         }
     } else {
         Swal.fire({
             icon: 'error',
             title: 'Error',
             text: 'Por favor, completa todos los campos'
         });
     }*/

async function iniciarSesion(event) {
            event.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
        
            const response = await fetch('http://localhost:3001/login2', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
        
            const data = await response.json();
            alert(data.message);
}
        
 