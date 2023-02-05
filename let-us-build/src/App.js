// class App{} /*simple es6 clss with no special behaviour of react .
// without that behaviour we are not able to use react for getting that behaviour
//  we extends our class with Component class from the global React . */

/*every react component must require a method known as render takes no argument and
  return some jsx  */
import React from "react";
// import Header from "./Header";
import Indecisionapp from "./Indecisionapp";
// import {BrowserRouter , Routes ,Route} from 'react-router-dom'
// import VisibilityToggle from "./VisibilityToggle";
// class Header extends React.Component{
//   render(){
//   return(<div><h1>hi i am Header</h1></div>) ;
//   }
// }
//                        ^
//actually to render this | gay.  to the screen
// we use > reactDOM.render(element want to render , where we want to render )

class App extends React.Component {
  render() {
    return (
      <div >
        <Indecisionapp />
        {/* <VisibilityToggle/> */}
        {/* <Header/> */}
        {/* <BrowserRouter>
          <Routes>
              <Route path= "/" element = {<Header/>}/>
              <Route path="/indecision" element= {<Indecisionapp/>}/>
              <Route path = "/toggle" element = {<VisibilityToggle/>}/>
              <Route path="*" element = {<h1>this is error page</h1>}/>
          </Routes>
        </BrowserRouter> */}

      </div>
    );
  }
}

export default App;
