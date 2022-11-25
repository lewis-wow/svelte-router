import { Route, Router, link, links, Link } from 'svelte-routing'
import { navigate, back, forward } from './navigate'
import Redirect from "./Redirect.svelte"
import ProtectedRoute from "./ProtectedRoute.svelte"

export { Route, Router, Link, link, links, navigate, back, forward, Redirect, ProtectedRoute }
