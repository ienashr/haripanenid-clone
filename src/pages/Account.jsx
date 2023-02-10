import React from "react"
import {Link } from "react-router-dom";


export default function Account(){    
    return (
        <div className="makeAccount">

<nav>  
        <div className="goBack">
        <Link to="/"><i className="fa fa-arrow-left" aria-hidden="true"></i></Link>
        <h4>Masuk Akun</h4>
        </div>
</nav> 

<div>
        <i className="fa fa-user-circle"></i>
        <h3>Masuk</h3>
        <p>Nikmati kepuasan dan kenyamanan kualitas belanja kebutuhan sehari - hari dengan Warungshop</p>
        
        <div className="sign-in-google">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK5q0FP74VV9wbfwP378_7kj7iDomHuKrxkXsxDdUT28V9dlVMNUe-EMzaLwaFhneeuZI&usqp=CAU" alt="google"/>
        <h5>Masuk dengan Google</h5>
        </div>
        
        <div className="sign-in-email">
        <i className="fa fa-envelope" aria-hidden="true"></i>
        <h5>Masuk dengan Email</h5>
        </div>
</div>

<section>
<h6>Dengan masuk dan mendaftar, Anda menyetujui</h6>
<h6>Syarat Penggunaan dan Kebijakan Privasi</h6>
</section>

        </div>
    )
}