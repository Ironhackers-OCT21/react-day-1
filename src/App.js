import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    < >
      {/* <Header ></Header> */}
      {/* <Header 
        name={'Manish'} 
        age={21}
        address={'Ironhack'}
        isHappy
        isAngry={false}
      /> */}
      <Header name='Jorge' age={21}>
          Hi there
      </Header>  
      
      {/* <Footer lang={'en'} /> 
      <Footer lang={'es'} /> 
      <Footer lang={'fr'} /> 
      <Footer lang={'de'} /> 
      <Footer lang={'pt'} />  */}
    </>
  );
}

let myname = 'manish'

export {myname}

export default App;
