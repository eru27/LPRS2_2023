import './hero.css'
import heroImage from'../src/resources/delivery.png';
import MyJson from './jsonComponent';
import GraphComponent from './graphComponent';

function Hero() {
    const MovingDiv = () => {
        return <div className="moving-div">
            <img className="heroImage" src={heroImage} alt='truck proto'></img>
        </div>;
      };
    
        return (
            <section className='section heroSection'>
                <div className='container heroContainer'>
                <MovingDiv/>
                <MyJson/>
                <GraphComponent/>
                </div>
            </section>
    
        );
    }
  
  export default Hero;