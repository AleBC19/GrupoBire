const Service = ({ titulo, descripcion }) => {
  return (
    <div className="p-5 shadow-lg m-3">
        <p className="font-bold text-2xl text-center">{ titulo }</p>
        <p>{ descripcion }</p>
    </div>
  )
}

export default Service