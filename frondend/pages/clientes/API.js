const urlClientes = "http://localhost/clase2/backend/controler.php?op=GetAll";
const urlNuevoCliente = "http://localhost/clase2/backend/controler.php?op=insert";
const urlClienteBorrar= "http://localhost/clase2/backend/controler.php?op=delete";

export const getClientes = async()=>{
    try {
          const clientes =await fetch(urlClientes);
          const datosClientes = clientes.json();
          return datosClientes;
    } catch (error) {
        console.log(error);
    }
  
}

export const nuevoCliente = async (resgistro)=>{
    try {
        await fetch(urlNuevoCliente,{
            method:"POST",
            body:JSON.stringify(resgistro),
            headers:{
                'Content-Type':'application/json'
            }
        })

        
    } catch (error) {
        console.log('holi');
    }
}
export const deleteCliente = async idCliente =>{
    try {
        await fetch(`${urlClienteBorrar}&id=${idCliente}`,{
            method : 'DELETE'
        })
    } catch (error) {
        console.log(error);
    }
}