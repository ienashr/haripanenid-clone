import React from "react"
import {Link } from "react-router-dom";

export default function Product(){    
    return (
<div>
  <section className="productHead">
    <h3>Produk Pilihan</h3>
    <Link to='/top-seller'><p>Lihat Semua</p></Link>
</section>
    <p className="productPil">Produk pilihan terbaik, hanya untukmu!</p> 
</div>
    )
}