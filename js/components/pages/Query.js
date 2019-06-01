import React, {Component} from "react";
import { throws } from "assert";

class Query extends Component {
    state = {  
        voted: this.props.voted
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            voted: nextProps.voted
        })
    }

    handleVoteBtn = (e) => {
        this.props.didVote()
        const data = e.target.value;
        fetch('http://some-url-with-voting-DB/',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(resp => console.log(resp.json()))
    }

    newSmoothies = [
        {name: 'Mind', desc: "Smoothie Delight Mind will aid your focus ability and will help you concentrate due to its special ingredients", iconUni: '🧠'},
        {name: 'Purify', desc: "The goal of Smoothie Delight Purify is to clean your organism from too much acids and keep your immune system as healthy as it could be", iconUni:'🌿'},
        {name: 'Ice', desc: "If you ever had a problem with heartburn or reflux - Smoothie Delight Ice will take care of you and apply pleasant cooling effect in your throat (also great for hot days!)", iconUni:'❄️'},
        {name: 'Stress', desc: "Everybody has gone through stressful situation. Smoothie Delight Stress will calm you down and help you relax.", iconUni:'🗱'},
    ]

    render() {
        let jsxSmoothies = this.newSmoothies.map(( smoothie, i) => 
            <li key={smoothie.name} className='query__list__item'>
                <div className='query__list__item__up-half'>
                    <span className='query__list__item__up-half__icon'>{smoothie.iconUni}</span>
                    <h3 className='query__list__item__up-half__header'>{smoothie.name}</h3>
                </div>
                <div className='query__list__item__down-half'>
                    <p className='query__list__item__down-half__text'>{smoothie.desc}</p>
                    <button 
                        value={i} 
                        name={smoothie.name} 
                        onClick={this.handleVoteBtn} 
                        className={'query__list__item__down-half__btn'}>Vote!
                    </button>
                </div>


            </li>
        )
        if(this.state.voted){
            return(
                <section className='query' style={{height: '60vh', display: 'flex', justifyContent: 'center'}}>
                    <h1 className='query__header' style={{alignSelf:'center'}}>Thank you for your vote!</h1>
                </section>
            )
        }
        return (
            <section className='query'>
                    <h1 className='query__header'>Be a part of Food Factor and decide</h1>
                    <p className='query__text'>Our company tries to keep up with customer's desires and that is why we kindly ask you for favor - take a minute of your time and decide which line of Smoothie Delight should we develop now:</p>
                    <ul className='query__list'>
                        {jsxSmoothies}
                    </ul>
            </section>
        );
    }
}

export default Query;