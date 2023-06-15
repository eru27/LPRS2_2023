import './hero.css'
import heroImage from'../src/resources/delivery.png';
import MyJson from './jsonComponent';
import GraphComponent from './graphComponent';
import './jsonComponent.css'
import '\\wsl.localhost\\Ubuntu\\home\\anja\\LPRS2\\LPRS2_2023\\FW\\resources\\Automotive\\Mini_Tacho\\PC_Handler\\data.json'

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
                {/* <MyJson/> */}
                <div className='data'>
                <div className='col leftColumn'>
                    <p className='jsonItem' >Duzina trajanja</p>
                    <p className='jsonItem' >Maksimalna brzina</p>
                    <p className='jsonItem' >Predjena daljina</p>
                    <p className='jsonItem' >Prosecna brzina</p>
                
                </div>
                <div className='col rightColumn'>
                    <p className='jsonItem' >{time}</p>
                    <p className='jsonItem' >{max_speed}</p>
                    <p className='jsonItem' >{distance}</p>
                    <p className='jsonItem' >{avg_speed}</p>
                
                </div>
                </div>
                <GraphComponent/>
                </div>
            </section>
    
        );
    }
  
  export default Hero;