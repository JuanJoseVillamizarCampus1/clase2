import {getClientes,nuevoCliente,deleteCliente} from "./API.js";


addEventListener('DOMContentLoaded',()=>{
    cargarClientes()
})

async function cargarClientes() {
    const clientes= await getClientes();
    const tablaCliente = document.querySelector('#datosClientes');
    clientes.forEach(element => {
        const {id_constructora ,	nombre_constructora ,nit_constructora, nombre_representante, email_contacto, telefono_contacto}=element
        tablaCliente.innerHTML+=`
        <tr>
        <th scope="row">${id_constructora}</th>
        <td>${nombre_constructora}</td>
        <td>${nit_constructora}</td>
        <td>${nombre_representante}</td>
        <td>${email_contacto}</td>
        <td>${telefono_contacto}o</td>
        <td><button id="${id_constructora}" class="btn btn-danger delete">Eliminar</button></td>
      </tr>`
    });
    console.log(clientes);
}

const formulario=document.getElementById('registrar')
formulario.addEventListener('submit',nuevoClientes)
function nuevoClientes(e) {
    e.preventDefault();

    const id_constructora = document.querySelector('#id').value
    const nombre_representante = document.querySelector('#representante').value
    const nombre_constructora = document.querySelector('#constructora').value
    const nit_constructora = document.querySelector('#nit').value
    const email_contacto = document.querySelector('#email').value
    const telefono_contacto = document.querySelector('#celular').value
    console.log(id);

    const registro={
        id_constructora,
        nombre_representante,
        nombre_constructora,
        nit_constructora,
        email_contacto,
        telefono_contacto
    }
    console.log(registro);
    if (validation(registro)) {
        alert("Todos lo datos son obligatorios")
    }return nuevoCliente(registro)
}
function validation(Objeto) {
    return !Object.values(Objeto).every(element=>element=='')
}

const eliminar = document.getElementById('datosClientes')
eliminar.addEventListener('click',borrar)
function borrar(e) {
    if (e.target.classList.contains('delete')) {
        
        const idCliente= e.target.getAttribute('id')
        console.log(idCliente);
        const confir=confirm("Desea eliminarlo")
        if (confir) {
            deleteCliente(idCliente)
        }
    }
}