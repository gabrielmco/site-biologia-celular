import person1 from '../assets/images/person1.webp';
import person2 from '../assets/images/person2.webp';
import person3 from '../assets/images/person3.webp';
import person4 from '../assets/images/person4.webp';
import person5 from '../assets/images/person5.webp';
import person6 from '../assets/images/person6.webp';
import person7 from '../assets/images/person7.webp';
import person8 from '../assets/images/person8.webp';
import person9 from '../assets/images/person9.webp';
import person10 from '../assets/images/person10.webp';
import person11 from '../assets/images/person11.webp';
import person12 from '../assets/images/person12.webp';
import person13 from '../assets/images/person13.webp';
import person14 from '../assets/images/person14.webp';
import person15 from '../assets/images/person15.webp';

import PropTypes from 'prop-types';

function Row({ translateClass, direction }) {

    const items = [
        { text: "vital", image: person1 },
        { text: "intuitivo", image: person2 },     
        { text: "regenerativo", image: person3 },     
        { text: "vital", image: person4 },     
        { text: "regenerativo", image: person5 },
        { text: "intuitivo", image: person6 },
        { text: "vital", image: person7 },     
        { text: "regenerativo", image: person8 },
        { text: "intuitivo", image: person9 },     
        { text: "regenerativo", image: person10 },
        { text: "vital", image: person11 },      
        { text: "regenerativo", image: person12 },
        { text: "regenerativo", image: person13 },
        { text: "intuitivo", image: person14 },
        { text: "vital", image: person15 },
    ]

  return (
    <div 
        className={`${translateClass} ${direction} row w-full flex 
        items-center  
        gap-8 
        whitespace-nowrap mb-2`}
    >
        {items.map((item, index) => {
            return (
                <div 
                    key={index} 
                    className='elem flex items-center gap-8'
                >
                    <h1 
                        className='font-[SansitaBold] text-[6vh] sm:text-[8.4vh] 
                        leading-[6vh] sm:leading-[9vh]'
                    >
                        {item.text}
                    </h1>
                    <div className='imgdiv w-[5vh] h-[5vh] rounded-full overflow-hidden flex-shrink-0 border border-white/20'>
                        <img 
                            className='w-full h-full object-cover'
                            src={item.image} 
                            alt="Retrato"
                        />
                    </div>
                </div>
            )
        })}
    </div>
  )
}

Row.propTypes = {
    translateClass: PropTypes.string.isRequired,
    direction: PropTypes.string.isRequired
  };

export default Row
