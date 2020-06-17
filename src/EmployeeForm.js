import React from 'react' 
import PropTypes from 'prop-types'

class EmployeeForm extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            gender: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    handleGenderChange = (gender) => {
        this.setState({ gender })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            id: Number(new Date()),
            name: this.state.name, 
            email: this.state.email,
            gender: this.state.gender
        }
        this.props.addEmployee(formData)

        // reset a form
        this.setState({ 
            id: '',
            name: '',
            email: '',
            gender: ''
        })
    }

    render(){
        return (
            <div>
                <h2>Add Employee</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>name</label>
                    <input type="text" value={this.state.name} name="name" onChange={this.handleChange} /> <br/> 

                    <label>email</label>
                    <input type="text" value={this.state.email} name="email" onChange={this.handleChange} /> <br /> 

                    <label>gender</label>
                    <input type="radio" name="gender" checked={this.state.gender == 'male'} onChange={() => {
                        this.handleGenderChange("male")
                    }} /> male 
                    <input type="radio" name="gender" checked={this.state.gender == 'female'} onChange={() => {
                        this.handleGenderChange('female')
                    }}/> female <br/>

                    <input type="submit" value="add employee details" />
                </form>
            </div>
        )
    }
    
}

EmployeeForm.propTypes = {
    addEmployee: PropTypes.func.isRequired
}


export default EmployeeForm