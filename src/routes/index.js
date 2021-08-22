import { Route, Switch } from "react-router-dom"
import SignIn from "../pages/Signin";
import SignUp from "../pages/Signup";

export const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <SignIn/>
            </Route>
            <Route exact path="/signup">
                <SignUp/>
            </Route>
        </Switch>
    )
}

export default Routes;