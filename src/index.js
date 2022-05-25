import React from 'react'
import ReactDOM from 'react-dom/client'
import { RootCmp } from './root-cmp.jsx'
import './styles/main.scss'
// import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RootCmp />)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
// serviceWorkerRegistration.unregister();
