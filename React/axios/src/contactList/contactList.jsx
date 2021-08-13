import React, { Component } from 'react';
import Axios from '../../../listrendering/node_modules/axios';

export class ContactList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contactList: {},
            errorMessage: null,
        }
    }
    componentDidMount() {
        // const EmpURL = "https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist";
        const DataURL = "https://api.covid19india.org/data.json";
        Axios.get(DataURL)
            .then((response) => {
                this.setState({ contactList: response.data })
                console.log(this.state.contactList);
            })
            .catch((err) => {
                this.setState({ errorMessage: err })
            })
    }
    render() {
        // let {contactList}= this.state;
        return (
            <>

                <pre>{JSON.stringify(this.state.contactList.statewise)}</pre>
                <div className='row'>
                    <div className='col'>
                        <table className='table table-hover table-striped'>

                            <thead><tr>
                                <th>Date</th>
                                <th>state</th>
                                <th>Image</th>
                                <th>Employee Age</th>
                                <th>Gender</th>
                                <th>Email</th>
                                <th>Location</th>
                            </tr></thead>
                            <tbody>
                                {Object.keys(this.state.contactList).length > 0 ?
                                    <React.Fragment>
                                        {this.state.contactList.statewise.map((covid) => {
                                            if (covid.state == 'Assam') {
                                                return (
                                                    <tr>
                                                        <td>{covid.lastupdatedtime}</td>
                                                        <td>{covid.state}</td>
                                                    </tr>
                                                )
                                            } else if(covid.state == 'Odisha')
                                                return (
                                                    <tr>
                                                        <td>{covid.lastupdatedtime}</td>
                                                        <td>{covid.state}</td>
                                                    </tr>
                                                )
                                        })}
                                    </React.Fragment> : null
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

            </>
        )
    }
}

export default ContactList;

