import React ,{useEffect,useState} from 'react'
import { useParams,} from 'react-router-dom'
import { carData } from './Car-data'

function Cars() {
  const params = useParams()

  const [cars, setCars] = useState({})

  useEffect(() => {
    getCars()
  }, [])
  

  const getCars=() =>{
    const p = carData.filter(item => item.id == params.carid)
    setCars(p[0])
  }
  return (
    <div className='person'>
      <h1>This is {cars.first_name}'s page</h1>
      <h4>First name : {cars.first_name}</h4>
       <h4>Last name : {cars.last_name}</h4>
       <h4>Email : {cars.email}</h4>
       <h4>Gender : {cars.gender}</h4>
       <h4>Car make : {cars.car_make}</h4>
       <h4>Car model : {cars.car_model}</h4>
       <h4>Car model year : {cars.car_model_year}</h4>
       <h4>Car vin : {cars.car_vin}</h4>
    </div>
  )
}

export default Cars