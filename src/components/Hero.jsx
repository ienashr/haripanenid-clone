import React from 'react';
import {Link } from "react-router-dom";

export default function Hero() {
    return (
        <div>
        <section className="hero">

          <div className="voucher">
          <section>
          <i className="fa fa-fax"></i>
          <p>  Voucher kamu</p>
          </section>
          <Link to='/account'><p className="forAccount">Masuk akun</p></Link>
          </div>
          
          <div className="point">
           <section>
          <i className="fa fa-star"></i>
          <p>  Point kamu</p>
          </section>
          <Link to='/account'><p className="forAccount">Masuk akun</p></Link>
          </div>
          
        </section>
        
        <section className="newInfo">
        <h3>Informasi Terbaru</h3>
        <p>Informasi terbaru hanya untukmu!</p>
        </section>
        </div>
    )
}