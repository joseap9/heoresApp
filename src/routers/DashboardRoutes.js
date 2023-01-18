import React from 'react';
import { Navbar } from '../components/ui/Navbar';
import { Routes, Route } from "react-router-dom";
import MarvelScreen from '../components/marvel/MarvelScreen';
import DcScreen from '../components/dc/DcScreen';
import SearchScreen from '../components/search/SearchScreen';
import HeroScreen from '../components/hero/HeroScreen';
import AllHeroes from '../components/hero/AllHeroes';

const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container">
            <Routes>
                <Route path="all" element={<AllHeroes />} />
                <Route path="marvel" element={<MarvelScreen />} />
                <Route path="dc" element={<DcScreen />} />
                <Route path="Search" element={<SearchScreen />} />
                <Route path="hero/:heroId" element={<HeroScreen />} />
            </Routes>  
            </div>
        </>
    )
}

export default DashboardRoutes

