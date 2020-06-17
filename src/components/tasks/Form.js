import React from 'react' 
import PropTypes from 'prop-types'
import axios from 'axios'

class TaskForm extends React.Component {
    constructor() {
        super()
        this.state = {
            title: '',
            description: '',
            completed: false, 
            dueDate: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    handleComplete = (e) => {
        const completed = e.target.checked 
        this.setState({ completed })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            id: Number(new Date()), 
            title: this.state.title, 
            description: this.state.description, 
            completed: this.state.completed, 
            dueDate: this.state.dueDate, 
            createdAt: new Date()
        }
      
        axios.post('http://localhost:3033/tasks', formData)
            .then((response) => {
                const task = response.data
                this.props.addTask(task) 
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render(){
        return (
            <div>
                <h2>Add Task</h2>
                <form onSubmit={this.handleSubmit}>
                <input 
                    type="text"                     
                    value={this.state.title}
                    onChange={this.handleChange}
                    name="title"
                    placeholder="title"
                />  <br/>

                <textarea 
                    value={this.state.description}
                    onChange={this.handleChange}    
                    name="description"
                    placeholder="description"
                >
                </textarea> <br/>

                <input 
                    type="checkbox" 
                    checked={this.state.completed} 
                    onChange={this.handleComplete }
                /> <label> Complete </label> <br/>

                <label>Due Date </label> 
                <input 
                    type="date" 
                    value={this.state.dueDate} 
                    onChange={this.handleChange} 
                    name="dueDate"    
                /> <br/> 

                <input type="submit" value="add task" />

                </form>
            </div>
        )
    }
}

TaskForm.propTypes = {
    addTask: PropTypes.func.isRequired
}

export default TaskForm