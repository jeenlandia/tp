// Desafio 1 //
//  //
const tareas = [
    {
    Titulo: "Estudiar html",
    Estado: "Terminado"
    },
    {
    Titulo: "Estudiar css",
    Estado: "En progreso"
    },
    {
    Titulo: "Estudiar js",
    Estado: "Pendiente"
    },
    {
    Titulo: "Practicar js",
    Estado: "En progreso"
    },
    
    ] 

// Desafio 2 //
// Agregar tarea: //

function agregarTarea(titulo, estado) {
    tareas.push({ Titulo: titulo, Estado: estado });
    return tareas
        ("Exito")
}
console.log(agregarTarea("Estudiar React", "Pendiente"))

// Desafio 3 //
// Listar tareas //

function mostrarTarea(estado) {
    for (const tarea of tareas) {
        if (tarea.Estado === estado) {
            return tarea
        }
    }
    return tareas
}

// Desafio 4 //
// Agregar Verificacion //

const agregarTarea = (titulo, estado) => {
    for (let index = 0; index < tareas - length; index++) {
        if (tareas[index].Titulo === titulo) {
            return "Error: Ya existe"
        }
    }
    tareas.push({ Titulo: titulo, Estado: estado })
    return tareas
}

// Desafio 5 //
// Existe tarea? //

const existeTarea = (str) => {
    const tareasFiltradas = []
    tareas.array.forEach(tareota => {
        if (tareota.Titulo.includes(str)) {
            tareasFiltradas.push(tareota)
        }
    });
    return tareasFiltradas
}


