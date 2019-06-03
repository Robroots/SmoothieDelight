import React, {Component} from 'react';

class Newsletter extends Component {
    state = {  
        name:'',
        email:'',
        sent: false
    }

    handleNameChange = (e) => {
        let inputVal = e.target.value.replace(/^[0-9]*$/, "");
        this.setState({
            name: inputVal
        })
    }

    handleEmailChange = (e) => {
        let inputVal = e.target.value;
        this.setState({
            email: inputVal
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const newsletterData = {...this.state};
        fetch('http://some-url-with-email-DB/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newsletterData)
        }).catch(error => {
            console.log(error)
        });
        //This fetch will always fail due to wrong address but I want to make effect like all is valid so:
        this.setState({
            name:'',
            email:'',
            sent: true
        })
    }

    render() {
        if(this.state.sent){
            return(
                <section className='newsletter page' style={{height: '60vh', display: 'flex', justifyContent: 'center'}}>
                    <h2 className='page__header' style={{alignSelf:'center'}}>Thank you for your trust, check your email.</h2>
                </section>
            )
        }
        return (
            <section className='newsletter page'>
                <h1 className='page__header'>Sign up for newsletter</h1>
                <p className='page__text'>
                    Food Factor is dynamically developing brand and if you liked us and our products - please leave us your email address and keep being informed about Smoothie Delight.
                </p>
                <form name='newsletter' onSubmit={this.handleSubmit} className='newsletter__form'>
                    <fieldset className='newsletter__form__fieldset'>
                        <legend>Newsletter</legend>
                        <div className='newsletter__form__fieldset__input-box'>
                            <label className='newsletter__form__fieldset__input-box__label' htmlFor='name'>Name</label>
                            <input 
                                className='newsletter__form__fieldset__input-box__input'
                                id='name' 
                                type='text' 
                                placeholder='Enter your name' 
                                value={this.state.name}
                                onChange={this.handleNameChange} 
                                required/>
                        </div>
                        <div className='newsletter__form__fieldset__input-box'>
                            <label className='newsletter__form__fieldset__input-box__label' htmlFor='email'>E-mail</label>
                            <input 
                                className='newsletter__form__fieldset__input-box__input'
                                id='email' 
                                type='email' 
                                placeholder='Enter your email' 
                                value={this.state.email}
                                onChange={this.handleEmailChange}
                                required/>
                        </div>
                        <div className='newsletter__form__fieldset__input-box'>
                            <input 
                                className='newsletter__form__fieldset__input-box__submit' 
                                id='submit' 
                                type='submit' 
                                value='Sign up!' />
                        </div>
                    </fieldset>
                </form>
            </section>
        )
    }
}

export default Newsletter;