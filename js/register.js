let btnLogin = document.querySelector('#btnLogin')

btnLogin.addEventListener('click', (e) => {
    window.location.href = "login.html";
})

let formRegistro = document.querySelector('#formRegister')
formRegistro.addEventListener('submit', (e) => {
    e.preventDefault()

    const nombre = document.querySelector("#nombre").value
    const telefono = document.querySelector("#telefono").value
    const correo = document.querySelector("#correo").value
    const password = document.querySelector("#password").value

    const datosRegistro = JSON.parse(localStorage.getItem('datosRegistro')) || []
    const validaRegistro = datosRegistro.find(infoReg => infoReg.correo === correo)

    if(validaRegistro){
        Swal.fire({
            icon: 'error',
            title: 'Error de datos',
            text: 'El correo ingresado ya existe.',
        })
        return
    }
    datosRegistro.push({nombre,telefono,correo,password})
    localStorage.setItem('datosRegistro', JSON.stringify(datosRegistro))

    Swal.fire({
        icon: 'success',
        title: 'Registro exitoso',
        text: 'Tu registro se ha realizado con éxito',
    })
    .then(() => {
        window.location.href = 'login.html'
    })
})