import Addcar from './add-cars'
import {carData} from './Car-data'
import React ,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
function CarInfo() {
    const [isVisible, setIsVisible] = useState(false)
    const [carDatas, setCarDatas] = useState(carData)
    const [filtered, setFiltered,] = useState(carDatas)
    const [filterBy, setFilterBy] = useState("0")
    const [searchText, setSearchText] = useState("")

    useEffect(() => {
      filterEntries()
    }, [searchText])
    

    const handleDelete = (id) =>{
        setFiltered(filtered.filter((item) => item.id !==id))
    }

    const filterEntries = () =>{
        switch (filterBy) {
            case "1":
                setFiltered(carDatas.filter((item) => item.car_make.toLowerCase().includes(searchText.toLowerCase())))
                break;
             case "2":
                 setFiltered(carDatas.filter((item) => item.car_model.toLowerCase().includes(searchText.toLowerCase())))
                break;
    
        
            default:
                setFiltered(carDatas.filter((item) => item.email.toLowerCase().includes(searchText.toLowerCase())))
                break;
        }
    }
    return (
        < div className='cars'>
            <div className='page-heading'>
                <h1>PEOPLE AND THEIR CARS</h1>
            </div>
            <div className='search'>
                <select onChange={(e) => setFilterBy(e.target.value)} value={filterBy}>
                    <option value="0">Email</option>
                    <option value="1">Car Make</option>
                    <option value="2">Car Model</option>
                </select>
                <input placeholder='search...' value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
            </div>

            <div>
                <button id="button"onClick={() => setIsVisible(current => !current)}>{isVisible ? "Hide Form":"Show Form"}</button><br/><br/>
                { isVisible &&<Addcar data={carDatas} setData ={(val) => setCarDatas(val)}/>}
                
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Avatar</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Car Make</th>
                            <th>Car Model</th>
                            <th>Car Model Year</th>
                            <th>Car Vin</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filtered.map((item) =>(
                                <tr key={item.id}>
                                   <td><img src={item.avatar} alt="img"/></td> 
                                   <td><Link to={`/database/car-info/ ${item.id}`}>{item.first_name}</Link></td>
                                   <td>{item.last_name}</td>
                                   <td>{item.email}</td>
                                   <td>{item.gender}</td>
                                   <td>{item.car_make}</td>
                                   <td>{item.car_model}</td>
                                   <td>{item.car_model_year}</td>
                                   <td>{item.car_vin}</td>
                                   <td><button onClick={() => handleDelete(item.id)}>Delete</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CarInfo