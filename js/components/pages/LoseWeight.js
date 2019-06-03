import React, {Component} from 'react';

class LoseWeight extends Component {
    state = {  
        imgClass: 'fit__sign',
        signSize: null,
        boxSize:null
    }

    imgOnLoad = () => {
        //Have to set delay because of sliding effect
        setTimeout(() => {
            this.setState({
                imgClass: 'fit__sign fit__sign--loaded',
            })
        }, 250);
    }

    handleResize = () => {
        if(innerWidth>1200){
            this.setState({
                signSize: '55.5px',
                boxSize: '15.8px'
            })
        }else{
            this.setState({
                signSize: null,
                boxSize: null
            })
        }
    }

    componentDidMount() {
        // Prevent font to be bigger than image
        innerWidth>1200 && this.setState({signSize:'55.5px', boxSize:'15.8px'});
        window.addEventListener('resize', this.handleResize)
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize)
    }

    render() {
        return (
            <section className='fit'>
                <img 
                    className='fit__img' 
                    src="../images/be-fit2.jpg" 
                    alt='lorema-ipsumova-image' 
                    onLoad={this.imgOnLoad} 
                />
                <span 
                    style={{fontSize: this.state.signSize }} 
                    className={this.state.imgClass}>{'Lorema Ipsumova :)\n I like it!'}
                </span>
                <div className='box--absolute' style={{fontSize: this.state.boxSize}}>
                    <article className='box_article'>
                        <h2 className='box__header'>Why Lorema Ipsumova recommends Smoothie Delight?</h2>
                        <p className='box__article__text'>
                            Our product is loved by most influent modeling stars. It earned their trust because of our pledge to quality and indgredients freshness. Check recommendation made by Lorema - the top figure in modeling business:
                        </p>
                        <p className='box__article__text--quote'>"Hi dears! I have started to use Smoothie Delight few weeks ago and I can't get amazed how cool it is! I've noticed that it greatly affect my skin condition making it smoother and more soft. What is most important it helped me to get down with my weight! Just try it!"</p>
                        <span className='box__article__text'>Lorema Ipsumova</span>
                    </article>
                </div>

            </section>
        );
    }
}

export default LoseWeight;