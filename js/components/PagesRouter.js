import React, {Component} from 'react';

import {Route} from 'react-router-dom'
import Home from './pages/Home';
import AddMuscle from './pages/AddMuscle';
import HealthyDelicous from './pages/HealthyDelicous';
import LoseWeight from './pages/LoseWeight';
import Query from './pages/Query';
import Newsletter from './pages/Newsletter';

import SwitchWithSlide from "./Slider/SwitchWithSlide";

class PagesRouter extends Component {
    state = {  
        voted: false
    }

    handleVoteEvent = () => {
        this.setState({
            voted:true
        })
    }

    render() {
        return (
            <section className="container pages">
                <SwitchWithSlide>
                    <Route exact path="/" component={Home} />
                    <Route path="/add-muscle" component={AddMuscle} />
                    <Route path="/healthy-delicious" component={HealthyDelicous} />
                    <Route path="/lose-weight" component={LoseWeight} />
                    <Route path="/query" render={(props) => <Query {...props} didVote={this.handleVoteEvent} voted={this.state.voted} />} />
                    <Route path="/newsletter" component={Newsletter} />
                </SwitchWithSlide>
            </section>  
        );
    }
}

export default PagesRouter;