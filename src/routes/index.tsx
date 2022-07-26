import { RouteObject, useRoutes } from "react-router-dom"
import Home from "./home"
import Login from "./login"

const routes: RouteObject[] = [
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/login',
        element: <Login />
    },
]

function Component() {
    return useRoutes(routes)
}
export default Component