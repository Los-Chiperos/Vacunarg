document.getElementById("vaccineForm").addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var cuil = document.getElementById("cuil").value;
    var fechaNacimiento = document.getElementById("fechaNacimiento").value;
    var loteVacuna = document.getElementById("loteVacuna").value;
    var fechaAplicacion = document.getElementById("fechaAplicacion").value;
    var centroSalud = document.getElementById("centroSalud").value;
    var vacuna = document.getElementById("vacuna").value;
    var dosis = document.getElementById("dosis").value;

    if (!isValidCuil(cuil)) {
        document.getElementById("cuilError").classList.remove("hidden");
        return;
    }

    // POST request to API
    fetch('https://api.vacunarg.site/agregar_paciente', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nombre: name,
            apellido: surname,
            cuil: cuil,
            fecha_nacimiento: fechaNacimiento,
            dosis: dosis,
            fecha_aplicacion: fechaAplicacion,
            centro_salud: centroSalud,
            nombre_vacuna: vacuna,
            lote_vacuna: loteVacuna
        })
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                Swal.fire({
                    title: 'Éxito!',
                    text: 'Su vacuna ha sido registrada correctamente.',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                }).then((result) => {
                    if (result.isConfirmed) {
                        location.reload();
                    }
                })
            } else {
                Swal.fire({
                    title: 'Error!',
                    text: 'Ocurrió un error al registrar la vacuna.',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                })
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            Swal.fire({
                title: 'Error!',
                text: 'Ocurrió un error al registrar la vacuna.',
                icon: 'error',
                confirmButtonText: 'Ok'
            })
        });
});

function isVaElidCuil(cuil) {
    var re = /^([20|23|24|27]{2})-([0-9]{8})-([0-9]{1})$/;
    return re.test(cuil);
}