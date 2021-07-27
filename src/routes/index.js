import { Route, Switch } from "react-router-dom"

export const Routes = () => {
    return (
        <Switch>
            <Route exact path="/login"></Route>
            <Route exact path="/signup"></Route>
        </Switch>
    )
}