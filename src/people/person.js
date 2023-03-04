import React, {useEffect,useState}from 'react'
import { useParams,} from 'react-router-dom'
import { peopleData } from './people-data'

function Person() {
    const params = useParams()

    const [person, setPerson] = useState({})

    useEffect(() => {
      getPerson()
    }, [])
    

    const getPerson = () => {
        const p = peopleData.filter(item => item.id == params.personid)
        setPerson(p[0])
        
    }
  return (
    <div className='person'>
       <h1>This is {person.first_name}'s page</h1>
       <h4>First name : {person.first_name}</h4>
       <h4>Last name : {person.last_name}</h4>
       <h4>Email : {person.email}</h4>
       <h4>Gender:{person.gender}</h4>
    </div>
  )
}
 
export default Person