import React from 'react'
import { withRouter } from 'react-router-dom'

class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            title: '',
            
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = { 
            title: this.state.title,
        }
        if(true) {
            this.props.history.push('/contact')
        }
    }

    render() {
        console.log('form component', this.props)
        return (
            <div>
                <h2>Submit form</h2>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.title}
                        onChange={this.handleChange}
                        name="title"
                        placeholder="title"
                    />  <br />

                    <input type="submit" />

                </form>
            </div>
        )
    }
}

export default withRouter(Form)