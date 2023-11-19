//name, age, username, img, phone, email, company, address
  //address tendrá estos datos como valor: 
  //usuario.address.street, usuario.address.suite, usuario.address.city
  const ponerImagen = document.getElementById('listaUsuarios');
  const img = [
    'assets/img/1.jpeg',
    'assets/img/2.jpeg',
    'assets/img/3.jpeg',
    'assets/img/4.jpeg',
    'assets/img/5.jpeg',
    'assets/img/6.jpeg',
    'assets/img/7.jpeg',
    'assets/img/8.jpeg',
    'assets/img/9.jpeg',
    'assets/img/10.jpeg'
  ];
  
  const edad = [25, 67, 54, 33, 65, 23, 78, 34, 45, 54];
  
  const mostrarUsuario = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('No responde');
        }
        return response.json();
      })
      .then(data => {
        let usuario = [...data];
  
        usuario.forEach((elemento, index) => {
          if (index < img.length) {
            const usuarioConImagenYEdad = {
              ...elemento,
              imagen: img[index],
              edades: edad[index]
            
            };

            
  
            const { name,username, phone, email, company, address, edades, imagen } = usuarioConImagenYEdad;
  
           
            const usuarioTExto = `<div id='container'>
            
                <div id ='uno'>

                        <div id='datos'>
                            <p><span>Nombre: </span>${name}</p>
                            <p><span>Edad: </span>${edades}</p>
                            <p><span>Username: </span>${username}</p>
                            <p><span>Teléfono: </span>${phone}</p>
                            <p><span>Email: </span>${email}</p>
                        </div>

                        <div id='perfil'>
                            <img src='${imagen}' alt='${name}'/>      
                        </div>
                </div>

                <div id ='dos'>
            
                        <p><span>Compañía: </span>${company.name}</p>
                        <p><span>Dirección: </span>${address.street}${address.suite} ${address.city} </p>
                    
                </div>
            
            
            
            </div>`
            
            ponerImagen.innerHTML += usuarioTExto
          
            
          } 
        });
      })
      .catch(function(error) {
       
        console.error('Error en la solicitud Fetch:', error);
      });
  };
  
  mostrarUsuario();
