import React, { Component } from 'react'
import ContactList from './contactList/contactList'
// import ContactApp from './contactApp/contactApp';


class App extends Component {
  render() {
    return (
      <>
      <h1 className='text-center'>App Component</h1>
      <ContactList />
      {/* <ContactApp/> */}
      </>
    )};
}

export default App;
