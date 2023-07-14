export const validateForm = (codigo, nombres, apellidoPaterno, apellidoMaterno, especialidad, fecha, horaInicio, horaFin) => {
    let isValid = true;
    const newErrors = {
        codigo: '',
        nombres: '',
        apellidoPaterno: '',
        apellidoMaterno: '',
        especialidad: '',
        fecha: '',
        horaInicio: '',
        horaFin: ''

    };

    if (codigo.length !== 5) {
        newErrors.codigo = 'Ingrese su codigo';
        isValid = false;
    }

    if (nombres.trim() === '') {
        newErrors.nombres = 'Ingrese sus nombres';
        isValid = false;
    } else if (nombres.length > 25) {
        newErrors.nombres = 'Ingrese su nombres';
        isValid = false;
    }

    if (apellidoPaterno.trim() === '') {
        newErrors.apellidoPaterno = 'Ingrese su apellidoPaterno';
        isValid = false;
    } else if (apellidoPaterno.length > 20) {
        newErrors.fecha = 'Ingrese su apellidoPaterno';
        isValid = false;
    }

    if (apellidoMaterno.trim() === '') {
        newErrors.apellidoMaterno = 'Ingrese su apellidoMaterno';
        isValid = false;
    } else if (apellidoMaterno.length > 20) {
        newErrors.apellidoMaterno = 'Ingrese su apellidoMaterno';
        isValid = false;
    }

    if (especialidad.trim() === '') {
        newErrors.especialidad = 'Seleccione una especialidad';
        isValid = false;
    } else if (especialidad.length > 20) {
        newErrors.especialidad = 'La especialidad debe tener menos de 20 caracteres';
        isValid = false;
    }


    if (fecha.trim() === '') {
        newErrors.fecha = 'Ingrese un fecha';
        isValid = false;
    } else if (fecha.length !== 10) {
        newErrors.fecha = 'El fecha debe tener 10 dígitos';
        isValid = false;
    }


    if (horaInicio.trim() === '') {
        newErrors.horaInicio = 'Ingrese un horaInicio';
        isValid = false;
    } else if (horaInicio.length > 7) {
        newErrors.horaInicio = 'El horaInicio debe tener máximo 7 caracteres';
        isValid = false;
    }

    if (horaFin.trim() === '') {
        newErrors.horaFin = 'Ingrese un horaFin';
        isValid = false;
    } else if (horaFin.length > 7) {
        newErrors.horaFin = 'El horaFin debe tener máximo 7 caracteres';
        isValid = false;
    }

    return {
        isValid: isValid,
        errors: newErrors
    };
};
