import React, { useState, useEffect } from 'react';
import EmployeeCard from './EmployeeCard'
import DataManager from '../../modules/DataManager'

const EmployeeList = props => {
    const [employees, setEmployees] = useState({});

    const getEmployees = () => {
        return DataManager.getAll()
                .then(APIemployees => setEmployees(APIemployees));
    };

    useEffect(() => {
        getEmployees();
    }, []);

    return (
        <div className="contatiner-cards">
            {employees.map(employee =>
                <EmployeeCard 
                    key={employee.id}
                    employee={employee}
                    {...props}
                />
            )}
        </div>
    );
};

export default EmployeeList