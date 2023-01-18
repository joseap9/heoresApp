import React from 'react'
import HeroList from './HeroList'


const AllHeroes = (  ) => {
    return (
        <div>
            <h1 className="mt-3">Heroes</h1>
            <hr/>
            <HeroList publisher="Marvel Comics" />
            <HeroList publisher="DC Comics" />
        </div>
    )
}

export default AllHeroes