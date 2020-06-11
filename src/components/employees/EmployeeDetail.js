import React, { useState, useEffect } from 'react'
import DataManager from '../../modules/DataManager'

const EmployeeDetail = props => {
    const [employee, setEmployee] = useState({})

    useEffect(() => {
        DataManager.getWithExpand("employees", props.employeeId, "location")
            .then(employee => {
                setEmployee({
                    name: employee.name,
                    address: employee.address,
                    phone: employee.phone,
                    location: employee.location.name
                })
            })
    }, [props.employeeId])

    return (
        <div className="card">
            <div className="card-content">
                <h3>{employee.name}</h3>
                <p>Address: {employee.address}</p>
                <p>Phone: {employee.phone}</p>
                <p>Location: {employee.location}</p>
            </div>
        </div>
    )
}

export default EmployeeDetail