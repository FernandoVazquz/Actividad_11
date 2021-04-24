const todo = (tarea, duracion, callback) => {
    setTimeout(()=>{
         callback(tarea)
    }, duracion)
}

todo("levantarse",5000, (tarea) => {
    console.log(`Realizando la tarea ${tarea}`)
    todo("tender la cama",5000, (tarea) => {
        console.log(`Realizando la tarea ${tarea}`)
            todo("bañarse",3000, (tarea) => {
                console.log(`Realizando la tarea ${tarea}`)
                  todo("clase de paradigmas y jugar ",3000, (tarea) => {
                        console.log(`Realizando la tarea ${tarea}`)
                         todo("desayunar ",8000, (tarea) => {
                                console.log(`Realizando la tarea ${tarea}`)

                            })
                    })
            })
    })
})