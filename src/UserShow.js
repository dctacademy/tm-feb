import React from 'react' 
import axios from 'axios'

class UserShow extends React.Component {
    constructor() {
        super()
        this.state = {
            user: {}
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id 
        axios.get(`http://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) => {
                // console.log(response.data)
                const user = response.data 
                this.setState({ user })
            })
    }
    
    render() {
        console.log('user show component', this.props)
        return (
            <div>
                <h1>information of user id  { this.props.match.params.id } </h1>
                <p>username - { this.state.user.username }</p>
                <p>email - {this.state.user.email}</p>
            </div>
        )
    }
}

export default UserShow