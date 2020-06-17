import React from 'react' 
import PropTypes from 'prop-types'

function EmployeesTable(props) {
    return (
        <table border="1">
            <thead>
                <tr>
                    <th> id </th>
                    <th> name </th>
                    <th> email </th>
                    <th> gender </th>
                </tr>
            </thead>
            <tbody>
                {
                    props.data.map(function (emp) {
                        return (
                            <tr key={emp.id}>
                                <td> {emp.id} </td>
                                <td> {emp.name} </td>
                                <td> { emp.email }</td> 
                                <td> {emp.gender} </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table> 
    )
}

EmployeesTable.propTypes = {
    data: PropTypes.array.isRequired
}

export default EmployeesTable