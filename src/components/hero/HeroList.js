import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../helpers/getHeroesByPublisher';
import HeroCard from './HeroCard';

const HeroList = ( { publisher = 'marvel' } ) => {
    
    const heroes = useMemo( () => getHeroesByPublisher(publisher) , [publisher]);

    return (
        <div className="row animate__animated animate__fadeIn"> 
            {
                heroes.map( hero => 
                    <HeroCard 
                    key = {hero.id} 
                    {...hero }/>
                 )
            }
              
        </div>
    )
}

export default HeroList
