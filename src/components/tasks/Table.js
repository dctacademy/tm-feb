import React from 'react' 
import PropTypes from 'prop-types'

function TasksTable(props) {
    return (
        <div>
            <table border="1">
                <thead>
                    <tr>
                        <th>select</th>
                        <th>title</th>
                        <th>created at</th>
                        <th>due date</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    { props.data.map(task => {
                        return (
                            <tr key={task.id}>
                                <td><input type="checkbox" /></td>
                                <td>{ task.title }</td>
                                <td>{ task.createdAt }</td>
                                <td>{ task.dueDate }</td>
                                <td>
                                    <button>remove</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

TasksTable.propTypes = {
    data: PropTypes.array.isRequired
}

export default TasksTable