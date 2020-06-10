import React from 'react';

const EmployeeCard = props => {
    return (
        <div className="card">
            <div className="card-content">
                <h3>
                    Employee: <span className="card-employeename">
                        {props.employee.name}
                    </span>
                </h3>
                <button
                    type="button"
                    onClick={() => {props.history.push(`/employees/${props.employee.id}/details`)}}
                >Details</button>
            </div>
        </div>
    );
};

export default EmployeeCard