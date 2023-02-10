import React from "react"
import {Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
        <p>Kamu berbelanja di</p>
        <section>
        <div className="kedai">
            <i className="fa fa-shopping-bag"></i>
<p>Semarang</p>
            </div>
            
            <div className="ubah">
            <Link to='/market'><p>Ubah</p></Link>
<i className="fa fa-sign-in"></i>
</div>
            </section>
            
            <div className="input_container">
            <i className="fa fa-search"></i>
            <input type="text" placeholder="  Cari produk"/>
        </div>
        </nav>
    )
}