import React from "react"
import {Link } from "react-router-dom";


export default function Location(){    
    return (
        <div className="location">
        
        <nav>  
        <div className="goBack">
        <Link to="/"><i className="fa fa-arrow-left" aria-hidden="true"></i></Link>
        <h4>Pilih Lokasi</h4>
        </div>
        
         <div className="input_container">
            <i className="fa fa-search"></i>
            <input type="text" placeholder="  Cari lokasi terdekat"/>
         </div>
        </nav>
    
    <section>

    <div>

    <div>
    <h5>Jogja</h5>
    <i className="fa-sharp fa-solid fa-award"></i>
    </div>

    <p>Lokasi Jogja</p>
    <h6>Alamat:</h6>
    <p>Jalan Timuran No 95</p>
    
    </div>
    </section>
    
    </div>
    )
}