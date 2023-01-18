import React from 'react';
import { useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getHeroByName } from '../../helpers/getHeroesByName';
import { useForm } from "../../hooks/useForm";
import HeroCard from '../hero/HeroCard'; 
import queryString from 'query-string';


const SearchScreen = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);
    
    const [ formValues, handleInputChange ] = useForm({
        searchText: q,
    });

    const { searchText } = formValues;

    const heroesFileted = useMemo( () => getHeroByName(q), [q] );


    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`?q=${ searchText }`)
    }


    return (
        <>
            <h1 className = "mt-3">Búsquedas</h1>
            <hr />

            <div className="row">

                <div className="col-5">
                    <h4>Buscar</h4>
                    <hr />

                    <form onSubmit={ handleSearch }>
                        <input 
                            type="text"
                            placeholder="Buscar un héroe"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={ searchText }
                            onChange={ handleInputChange }
                        />


                        <button 
                            className="btn btn-outline-primary mt-1"
                            type="submit">
                            Buscar...
                        </button>

                    </form>


                </div>

                <div className="col-7">
                    <h4>Resultados</h4>
                    <hr />

                    {
                        (q === '')
                            ? <div className="alert alert-info"> Buscar un héroe </div>
                            : ( heroesFileted.length === 0 ) 
                                && <div className="alert alert-danger"> No hay resultados: { q } </div>
                    }


                    {
                        heroesFileted.map(hero => (
                            <HeroCard 
                                key={ hero.id }
                                { ...hero }
                            />
                        ))
                    }


                </div>

            </div>

        </>
    )
}

export default SearchScreen