import React,{Component} from 'react';

class Footer extends Component {
    contact = [
        'Food Factor Inc.',
        'City: Baltimore',
        'State Full: Maryland',
        'Zip Code: 21201',
        'Phone Number: 351-248-1866',
        'Mobile Number: 351-225-9843'
    ]
    links = [
        'Careers',
        'Our principles',
        'FAQ',
        'International Support',
        'Business clients',
        'Distributors'
    ]
    social = [
        'Facebook',
        'Instagram',
        'Pinterest',
        'Snapchat',
        'Twitter',
        'YouTube'
    ]
    
    render() {
        let jsxContact = this.contact.map((item,i) => 
            <li key={i} className='footer__section__list__item'>{item}</li>
        )
        let jsxLinks = this.links.map((link,i) => 
            <li key={i} className='footer__section__list__item'>
                <a className='footer__section__list__item__link' href=''>{link}</a>
            </li>
        )
        let jsxSocial = this.social.map((item,i) =>
            <li key={i} className='footer__section__list__item'>
                <img className='footer__section__list__item__img' src={`../images/social/${item}.svg`} />
            </li>
        )
        return (
            <footer id='footer' className="container footer">
                <section className='footer__section'>
                    <h4>Contact</h4>
                    <ul className='footer__section__list contact'>
                        {jsxContact}
                    </ul>
                </section>
                <section className='footer__section'>
                    <h4>Can we help?</h4>
                    <ul className='footer__section__list help'>
                        {jsxLinks}
                    </ul>
                </section>
                <section className='footer__section'>
                    <ul className='footer__section__list social'>
                        {jsxSocial}
                    </ul>
                </section>
            </footer>
        );
    }
}

export default Footer;