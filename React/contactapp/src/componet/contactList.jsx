import React, { Component } from 'react';
import Axios from 'axios';

export class ContactList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: [],
            errorMessage: null
        }
    }

    componentDidMount() {
        const URl = 'https://jsonplaceholder.typicode.com/comments';
        Axios.get(URl)
            .then((response) => {
                this.setState({
                    profile: response.data

                })
                console.log(this.state.profile)
            })
            .catch((err) => {
                this.setState({
                    errorMessage: err
                })
            })
    }
    render() {
        return (
            <>
                <h1>contactlist</h1>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-3'>
                            {this.state.profile !== 0 ? (<>
                                {this.state.profile.map((data) => {
                                    return (
                                            <h4>{data.name}</h4>
                                )
                                })}
                            </>) : null}

                        </div>

                        

                    </div>
                </div>
            </>
        )
    }
}

export default ContactList
