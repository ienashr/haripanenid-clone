import React from "react"
import { useState} from 'react';
import { Link } from "react-router-dom";

const Images = ["https://i.pinimg.com/564x/d0/ca/0e/d0ca0e6bc845731b8e221c7fae3eed29.jpg",
 "https://i.pinimg.com/564x/9a/4b/de/9a4bde6d64a86f80d2b313983c505121.jpg", 
"https://i.pinimg.com/564x/ff/3b/73/ff3b73c09cffc9a878c56811d2b8b3ea.jpg"];
const delay = 2500;

export function Slideshow() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === Images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {Images.map((background, index) => (
          <div
            className="slide"
            key={index}
            style={{ backgroundImage: `url(${background})` }}
          ></div>
        ))}
      </div>

      <div className="slideshowDots">
        {Images.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export function Fiture(){    
  return (
      <div className="Fiture">
          <Link to='/top-seller'>
          <img src="https://i.pinimg.com/564x/6d/1a/fe/6d1afee6eef6636fd21f0a6c5661bb89.jpg" alt="" />
   <p>Foody & Moody</p>   
</Link>
      </div>
  )
}


export function Card(props) { 
const [count, setCount] = useState(0);
const [items, setItems] = useState({
  total: 0,
  price: 0,
});

    function Tambah(){
            setCount(count + 1)
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
     
     return(
      <div className="superCart">
        <div className="cards-list">
            <div className="card">
                <img src={props.item.coverImg} className="card--image" alt=""/>
                <p>{props.item.title}</p>
                <p>{props.item.price}</p>
      
      <section>
        {count === 0 ? <button onClick={() => Tambah(props.item.id)}>Beli</button>:
        <div>
            <button onClick={() => Kurang(props.item.id)}>-</button>
            <p>{count}</p>
            <button onClick={() => Tambah(props.item.id)}>+</button>
        </div>}
      </section>



              </div>
        </div>
{/*       {items.total > 0 && <div> 
<i class="fa fa-shopping-basket" aria-hidden="true"></i>
<p> {items.total > 1 ? "items" : "item"}</p>
Rp.{items.price}
</div>} */}
        </div>
     ) 
}

