import React from "react";
import Tourss from "./components/Toursss/Toursss";
// import { Route,Routes,Router,outlet } from "react-router-dom";
import Main from "./components/Reviews/Main";
import Navbar from "./components/Toolbar/Toolbar";
import Tab from "./components/Accordion/Accor";
import './App.css';
import { One } from "./components/Hooks/Hooks";
import Array from "./components/Array/Array";
import Effect from "./components/UseEffect/UseEffect";


// import Backdrop from "./components/Backdrop/Backdrop";



function App() {
  
  return (
    <main>
      {/* <Effect></Effect> */}
      {/* <Array></Array> */}
      <One></One>
      {/* <Navbar></Navbar> */}
     {/* <Main></Main> */}
     {/* <Tourss></Tourss> */}
     {/* <Tab></Tab> */}
       </main>
  )
}

export default App;


// class App extends Component {

//   state = {
//     SideDrawerOpen: false
//   };
//   drawerTogglerClickHandler = () => {
//     this.setstate((prevState) => {
//       return { SideDrawerOpen: !prevState.SideDrawerOpen };
//     });
//   };

//   backdropClickHandler=()=>{
//     this.setstate({SideDrawerOpen:false});
//   }
//   render() {
//     // let sideDrawer;
//     let backdrop;


//     if (this.state.SideDrawerOpen) {
//       backdrop = <Backdrop click={this.backdropClickHandler}/>
//     }
//     return (
//       <div className="App" style={{ height: '100%' }}>
//         <Toolbar drawerClickHandler={this.drawerTogglerClickHandler} />
//         <SideDrawer show={this.state.SideDrawerOpen}/>
//         {backdrop}
//         <main style={{ marginTop: '64px' }}>
//           <p>this is the page content</p>
//         </main>

//       </div>
//     );
//   }
// }

// export default App;
