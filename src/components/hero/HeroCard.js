import React from 'react'
import { Link } from 'react-router-dom';


const HeroCard = ( {
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
    
} ) => {

        const imagePath = `/assets/${id}.jpg`;
    
        return (

            <div className="card card-primary" style={{width: "18rem"}}>
                <img className="card-img-top" src={imagePath} alt={superhero}/>
                <div className="card-body">
                    <h5 className="card-title">{superhero}</h5>
                    <p className="card-text">{alter_ego}</p>
                    {
                        ( alter_ego !== characters ) 
                            && <p className="text-muted">{ characters }</p>
                    }
                    <Link className = "btn btn-primary" to={`/hero/${id}`}>
                                Más...
                    </Link>

                    { /*<div className="card">
                
                <div className="row no-gutter">
                    <div className="col-4">
                        <img src={ imagePath } className="card-img" alt={superhero} />
                    </div>
                    <div className="col-8">

                        <div className="card-body">

                            <h5 className="card-title">{superhero}</h5>
                            <p className="card-text">{alter_ego}</p>

                            {
                                ( alter_ego !== characters ) 
                                    && <p className="text-muted">{ characters }</p>
                            }

                            <p className="card-text">
                                <small className="text-muted">{ first_appearance }</small>
                            </p>

                            
                            <Link to={`/hero/${id}`}>
                                Más...
                            </Link>

                        </div>

                    </div>
                </div>

            </div>
                        */}

                </div>
            </div>

        
    )
}

export default HeroCard
