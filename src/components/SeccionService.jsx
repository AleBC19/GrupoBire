import info from "../utils/info"
import Service from "./Service"

const SeccionService = () => {
  return (
    <>
        <h2 className="text-center font-bold">¿En que podemos ayudarte?</h2>
        <section className="grid md:grid-cols-3"> 
            {
                info.map( data => (
                    <Service
                        key={ data.id } 
                        titulo={ data.titulo }
                        descripcion={ data.contenido }               
                    />
                ))
            }
        </section>
    </>
  )
}

export default SeccionService