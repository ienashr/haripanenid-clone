import React from "react"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import {Slideshow, Fiture, Card} from "./components/Slideshow"
import Product from "./components/Product"
import Footer from "./components/Footer"
import data from "./data"

import Location from "./pages/Location"
import Account from "./pages/Account"
import Help from "./pages/Help"
import SeeAllProduct from "./pages/SeeAllProduct"

import { Switch, Route, Link } from "react-router-dom";

export default function App() {

    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                item={item}
            />
        )
    })    
    
    const products = data.map(item => {
        return (
            <SeeAllProduct
                key={item.id}
                item={item}
            />
        )
    }) 
    
            
    return (
<div className="App">   
    <Switch>
        <Route exact path="/">
            <Navbar />
            <Hero/>
            <Slideshow/>
            <Fiture/>
            <Product/>
            <section className="cards-list">
                {cards}
            </section>
       
        </Route>
          
        <Route path='/account'>
           <Account />
        </Route>
        
        <Route path='/market'>
           <Location />
        </Route>
        
        <Route path='/help'>
           <Help />
        </Route>
        
        <Route path='/top-seller'>
        <section className="AllProduct">
            <nav>  
                <div className="goBack">
                    <Link to="/"><i className="fa fa-arrow-left" aria-hidden="true"></i></Link>
                    <h4>Produk Pilihan</h4>
                </div>
            </nav> 
                {products}
            </section>
        </Route>
        
    </Switch>
    <Footer/>    
        
</div>
    )
}