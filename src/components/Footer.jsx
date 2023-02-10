import React from "react"
import {Link } from "react-router-dom";


export default function Footer() {
    return(
        <div className="Footer">
        
        <Link to="/">
        <div>
        <i className="fa fa-shopping-bag"></i>
        <p>Belanja</p>
        </div>
        </Link>
        
        <Link to="/account">
        <div>
        <i className="fa fa-sticky-note"></i>
        <p>Transaksi</p>
        </div>
        </Link>
        
        <Link to="/help">
        <div>
        <i className="fa fa-question-circle"></i>
        <p>Bantuan</p>
        </div>
        </Link>
        
        <Link to="/account">
        <div>
        <i className="fa fa-user-circle"></i>
        <p>Profil</p>
        </div>
        </Link>
        
        </div>
    )
}