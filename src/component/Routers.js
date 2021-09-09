import { Route, Switch } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import AddUser from './AddUser';
import ShowUser from './ShowUser';
import EditUser from './EditUser';
import Login from "./Login";

function Routerss() {
    return (
        <>
            <div>
                <Switch>
                    <Route exact path="/"><ShowUser></ShowUser></Route>
                    <Route exact path="/showuser"><ShowUser></ShowUser></Route>
                    <Route path="/addUser"><AddUser></AddUser></Route>
                    <Route path="/editUser/:id"><EditUser></EditUser></Route>
                    <Route path="/login"><Login></Login></Route>
                    <Route path="*"><PageNotFound></PageNotFound></Route>
                </Switch>
            </div>
        </>
    )
}
export default Routerss