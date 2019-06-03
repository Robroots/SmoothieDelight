import React, {Component} from 'react';

class HealthyDelicous extends Component {

    advantages = [
        {text: "Always fresh ingredients - every day product delivery", iconUni: '🍒'},
        {text: "Local suppliers - your drinks are made of products from your area", iconUni:'🚜'},
        {text: "Tested for desired effects - independent laboratories tests Smoothie Delight ", iconUni:'🔬'},
        {text: "Best price-quality relation (based on last month survey)", iconUni:'💰'},
    ]

    render() {
        const jsxAdvantages = this.advantages.map((adv, i) =>
            <li className='healthy__box__article__list__item' key ={i}>
                <div className='healthy__box__article__list__item__icon'>{adv.iconUni}</div>
                <div className='healthy__box__article__list__item__text'>{adv.text}</div>
            </li>    
        )
        return (
            <section className='healthy page'>
            <div className='box--left'>
                <article className='box__article'>
                    <h2 className='box__header'>Healthy body with Smoothie Delight</h2>
                    <h3 className='box__article__subheader'>
                        Health is most important thing.
                    </h3>
                    <p className='box__article__text'>
                        Smoothie Delight provides your organism bomb of vitamins and minerals - check the advantages of our product:
                    </p>
                    <ul className='healthy__box__article__list'>
                        {jsxAdvantages}
                    </ul>
                </article>
            </div>
        </section>
        );
    }
}

export default HealthyDelicous;