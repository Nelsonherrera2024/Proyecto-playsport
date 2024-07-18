let btnRegister = document.querySelector('#btnRegister')
btnRegister.addEventListener('click', (e) => {
    window.location.href = "register.html";
})

let formLogin = document.querySelector('#formLogin')

formLogin.addEventListener('submit', (e) => {
    e.preventDefault()

    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value

    const dataLogin = JSON.parse(localStorage.getItem('datosRegistro')) || []

    const validarUser = dataLogin.find(user => user.correo === email && user.password === password)

    if(!validarUser){
        Swal.fire({
            icon: 'error',
            title: 'Error de datos',
            text: 'El usuario y/o contraseña son incorrectos',
        })
        return
    }
    Swal.fire({
        icon: 'success',
        title: 'Inicio sesión exitosamente',
        text: `Bienvenido ${validarUser.nombre}`
    })

    localStorage.setItem('loginSuccess', JSON.stringify(validarUser))
    window.location.href = 'home.html'
})