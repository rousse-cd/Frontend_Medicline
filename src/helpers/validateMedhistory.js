export const validateForm = (fechaEmision, dni, nombres, apellidoPaterno, apellidoMaterno, estado_civil, telefono, correoElectronico, hora, dia, especialidad, sede) => {
    let isValid = true;
    const newErrors = {
        fechaEmision: '',
        dni: '',
        nombres: '',
        apellidoPaterno: '',
        apellidoMaterno: '',
        estado_civil: '',
        telefono: '',
        correoElectronico: '',
        hora: '',
        dia: '',
        especialidad: '',
        sede: '',
    };




    if (fechaEmision.trim() === '') {
        newErrors.fechaEmision = 'Ingrese su fecha de emisión';
        isValid = false;
    }




    if (dni.trim() === '8') {
        newErrors.dni = 'Ingrese su DNI';
        isValid = false;
    }




    if (nombres.trim() === '') {
        newErrors.nombres = 'Ingrese su nombre';
        isValid = false;
    } else if (nombres.length > 25) {
        newErrors.nombres = 'El nombre debe tener máximo 25 caracteres';
        isValid = false;
    }




    if (apellidoPaterno.trim() === '') {
        newErrors.apellidoPaterno = 'Ingrese su apellido paterno';
        isValid = false;
    } else if (apellidoPaterno.length > 20) {
        newErrors.apellidoPaterno = 'Su apellido paterno debe tener máximo 20 caracteres';
        isValid = false;
    }




    if (apellidoMaterno.trim() === '') {
        newErrors.apellidoMaterno = 'Ingrese su apellido materno';
        isValid = false;
    } else if (apellidoMaterno.length > 20) {
        newErrors.apellidoMaterno = 'Su apellido materno debe tener máximo 20 caracteres';
        isValid = false;
    }




    if (estado_civil.trim() === '') {
        newErrors.estado_civil = 'Ingrese su estado civil';
        isValid = false;
    }




  //  if (telefono.trim() === '') {
   //     newErrors.telefono = 'Ingrese un teléfono';
   //     isValid = false;
   // } else if (telefono.length !== 9) {
   //     newErrors.telefono = 'El teléfono debe tener 9 dígitos';
   //     isValid = false;
   // }
   if (telefono.trim() === '') {
    newErrors.telefono = 'Ingrese su telefono';
    isValid = false;
}




    if (correoElectronico.trim() === '') {
        newErrors.correoElectronico = 'Ingrese un correo';
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(correoElectronico)) {
        newErrors.correoElectronico = 'Ingrese un correo válido';
        isValid = false;
    }




    if (hora.trim() === '') {
        newErrors.hora = 'Ingrese su hora de la cita';
        isValid = false;
    }




    if (dia.trim() === '') {
        newErrors.dia = 'Ingrese su dia de la cita';
        isValid = false;
    }




    if (especialidad.trim() === '') {
        newErrors.especialidad = 'Ingrese su especialidad';
        isValid = false;
    }


       
    if (sede.trim() === '') {
        newErrors.sede = 'Ingrese su sede';
        isValid = false;
    }


    return {
        isValid: isValid,
        errors: newErrors
    };
};
