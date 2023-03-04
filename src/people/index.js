import React from 'react'
import { Link } from 'react-router-dom'
import { peopleData } from './people-data'

function PeopleInfo() {
    return (
        <div className='data'>
            <div className='page-landing'>
                <h1>PEOPLE INFORMATION</h1>
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
                        </tr>
                    </thead>
                    <tbody>
                        {
                            peopleData?.map((item) => (
                                <tr key={item.id}>
                                    <td><img src={item.avatar} alt="avatar" /></td>
                                    <td><Link to={`/database/people/${item.id}`}>{item.first_name}</Link></td>
                                    <td>{item.last_name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.gender}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PeopleInfo