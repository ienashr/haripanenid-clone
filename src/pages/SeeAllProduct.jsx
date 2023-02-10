import React from "react"
import { useState } from 'react';


export default function SeeAllProduct(props){
    const [count, setCount] = useState(0);
    const [items, setItems] = useState({
        total: 0,
        price: 0,
    });

    function Tambah(){
            setCount(count + 1);
            setItems({
                total: items.total + 1,
                price: items.price + props.item.price,
            })
        }
        
    function Kurang(){
        if(count === 0){
            return
        }
        setCount(count - 1);
        setItems({
            total: items.total - 1,
            price: items.price - props.item.price,
        })
    }
    
    return (
        <div className="AllProduct">
        <div className="card">
                <img src={props.item.coverImg} className="card--image" alt=""/>
                <div>
                <p>{props.item.title}</p>
                <p>{props.item.price}</p>
                </div>

                <section>
        {count === 0 ? <button onClick={() => Tambah(props.item.id)}>Beli</button>:
        <div>
            <button onClick={() => Kurang(props.item.id)}>-</button>
            <p>{count}</p>
            <button onClick={() => Tambah(props.item.id)}>+</button>
        </div>}
      </section>

{/*
{items.total > 0 && <div> 
<i class="fa fa-shopping-basket" aria-hidden="true"></i>
<p> {items.total > 1 ? "items" : "item"}</p>
Rp.{items.price}
</div>}
*/}
                </div>
        </div>
    )
}

//cart bakal muncul klo count > 0, trus semua count itu jadi satu -> price tambah jadi satu semua
//total pricenya yg bakal muncul,