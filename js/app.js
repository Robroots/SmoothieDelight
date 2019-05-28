import React from "react";
import ReactDOM from 'react-dom';
import '../styles/style.css';

import {HashRouter} from 'react-router-dom';

import Header from './components/Header';
import PagesRouter from "./components/PagesRouter";
import Footer from "./components/Footer";

const App = () => (
    <HashRouter>
        <>
            <Header />
            <PagesRouter />
            <Footer />
        </>
    </HashRouter>
);

ReactDOM.render(
    <App />,
    document.querySelector('#app')
)
