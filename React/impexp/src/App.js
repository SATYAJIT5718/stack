import Hello from './hello';
import Test from './test';


function Welcome(props) {
  return (
    <h5>
      User Data...{props.user} {props.user2}
     
    </h5>
  );
}
function App() {
  // let name = "Satya";
  return (
    <>
      <h1> Welcome to PSA</h1>
      <Test Fname="Satyajit" Lname="Mahakud"/>
      {/* <Welcome user={name} user2="Jeet" /> */}
      <Welcome user='Satya' user2='zit' />
      <Welcome />
      <Hello />
    </>
  );
}

export default App;
