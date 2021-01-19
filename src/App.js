import './App.css'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './redux'

import Home from './pages/home'
import Splash from './pages/splash'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <Link to="/" className="navbar-brand">
                <img
                    src="/logo.png"
                    width="30"
                    height="30"
                    alt="Logo"
                    style={{ marginRight: '15px' }}
                />
                React App
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                dataToggle="collapse"
                dataTarget="#navbarSupportedContent"
                ariaControls="navbarSupportedContent"
                ariaExpanded="false"
                ariaLabel="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
            >
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">
                            Home
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/dashboard">
                    <Home />
                </Route>
                <Route exact path="/">
                    <Splash />
                </Route>
            </Switch>
        </Router>
    )
}

function AppContainer() {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}

export default AppContainer
