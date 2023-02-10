import React from "react"
import {Link } from "react-router-dom";


export default function Help(){    
    return (
        <div className="help">
   
<nav>  
        <div className="goBack">
        <Link to="/"><i className="fa fa-arrow-left" aria-hidden="true"></i></Link>
        <h4>Pusat Bantuan</h4>
        </div>
</nav>
      
<div>
<h3>Kamu Perlu Bantuan</h3>
<h6>Masih butuh bantuan atau ada hal lain yang ingin ditanyakan?HUBUNGI KAMI</h6>

<section>
<i className="fa fa-info-circle" aria-hidden="true"></i>
<h6>Layanan Pelanggan 24 Jam, Senin s/d Minggu, tidak termasuk Hari Libur Nasional.</h6>
</section>
</div>
      
        </div>
    )
}