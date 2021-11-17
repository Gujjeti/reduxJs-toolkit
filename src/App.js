import './App.css';
import AddStudent from './components/AddStudent';
import StudentsList from './components/StudentsList';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import EditStudent from './components/EditStudent';
function App() {
  return (
   <>
   <Router>
     <Switch>
       <Route exact path="/" component={StudentsList}/>
        <Route exact path="/addstudent" component={AddStudent}/>
        <Route exact path="/editstudent/:id" component={EditStudent} />

        <Route path="">
            <h1>404 Not Found</h1>
          </Route>
     </Switch>
   </Router>
   
   </>
  );
}

export default App;
