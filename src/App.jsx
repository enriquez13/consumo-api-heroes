
import { useEffect, useState } from "react"


function App() {
const [heroes, setHeroes] = useState([])

  useEffect(() => {
  fetchData()
  }, [])
  const fetchData = async() =>{
    const response = await fetch('http://localhost:4000/superheroes')
    const data = await response.json()
    setHeroes(data)
    console.log(data)
  }  
  
  return (
    <>
    <h1 className=" bg-dark text-muted text-center py-5 mb-5">Súper héroes</h1>

      <div class="container input-group  justify-content-center mb-4">
        <div class="form-outline w-50 mx-2">
          <input type="search" placeholder="Buscar por nombre o top" id="form1" class=" form-control" />
         
        </div>
        <button type="button" class="rounded btn btn-primary">
          <i class="fas fa-search">Buscar</i>
        </button>
      </div>
    
      <div className="row">

        {heroes.map(heroe => (
          
          <div className=" col-sm-2 col-xs-12 mt-3 align-middle" 
          key={heroe.id}>
            <div className=" p-2 border border-dark rounded shadow-lg ">
            <img className="bg-dark img-fluid img-thumbnail px-auto " src={heroe.imagen} alt={heroe.imagen} />
            <h4 className="w-100 fs-5  pt-2 text-center">{heroe.nombre}</h4>
            <h5 className="w-100 fs-6 text-center"><b>Top:</b> {heroe.top}</h5>
            <hr/>
            <h5 className="w-100 fs-6"><b>Estreno:</b> {heroe.estreno}</h5>
            <h5 className="w-100 fs-6"><b>Poderes:</b> {heroe.poderes}</h5>
            <h5 className="w-100 fs-6"><b>Descripción:</b> {heroe.descripcion}</h5>
            <h5 className="w-100 fs-6"><b>Editorial:</b> {heroe.editorial}</h5>
            <h5 className="w-100 fs-6"><b>Tipo:</b> {heroe.tipo}</h5>
</div>
            </div>
          
          

        ))}
      </div>
      </>

  )
}

export default App
