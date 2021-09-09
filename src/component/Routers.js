import { Route, Switch } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import AddUser from './AddUser';
import ShowUser from './ShowUser';
import EditUser from './EditUser';
import Login from "./Login";
import ProtectedRoute from "./ProtectedRoute";

function Routerss() {
    return (
        <>
            <div>
                <Switch>
                    <Route exact path="/"><ProtectedRoute com={ShowUser}/></Route>
                    <Route path="/showuser"><ProtectedRoute com={ShowUser}/></Route>
                    <Route path="/addUser"><ProtectedRoute com={AddUser}/></Route>
                    <Route path="/editUser/:id"><ProtectedRoute com={EditUser}/></Route>
                    <Route path="/login"><Login></Login></Route>
                    <Route path="*"><PageNotFound></PageNotFound></Route>
                </Switch>
            </div>
        </>
    )
}
export default Routerss