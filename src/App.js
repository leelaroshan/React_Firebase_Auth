
import './App.css';
import {BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import Forgotpassword from './Components/Forgotpassword';
import Signup from './Components/Signup'
import Signin from './Components/Signin';

import {Container} from 'react-bootstrap';
import AuthContextProvider from './contexts/AuthContext';


function App() {
  return (
    <AuthContextProvider>  
    <div className="App">

      <Container className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }} > 
     <div className="w-100" style={{ maxWidth: "500px" }}>
     {/* <Signup /> */}
     <Router> 
     <Switch>
     <Route  exact path="/">
         <Signup />
         </Route>
       <Route   path="/signin">
         <Signin />
         </Route>
         <Route  exact  path="/forgot-password">
         <Forgotpassword />
         </Route>
     </Switch>
     </Router>
     </div>
     </Container>
    
    </div>
    </AuthContextProvider>
  )
}

export default App;
