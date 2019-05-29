import React from 'react';

import {Route} from 'react-router-dom'
import Home from './pages/Home';
import AddMuscle from './pages/AddMuscle';
import HealthyDelicous from './pages/HealthyDelicous';
import LoseWeight from './pages/LoseWeight';
import Query from './pages/Query';
import Newsletter from './pages/Newsletter';

const PagesRouter = () => (
    <section className="container pages">
        <Route path="/home" component={Home} />
        <Route path="/add-muscle" component={AddMuscle} />
        <Route path="/healthy-delicious" component={HealthyDelicous} />
        <Route path="/lose-weight" component={LoseWeight} />
        <Route path="/query" component={Query} />
        <Route path="/newsletter" component={Newsletter} />
    </section>  
);

export default PagesRouter;