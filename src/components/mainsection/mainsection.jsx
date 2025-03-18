import React, {useEffect, useState} from 'react';
import '../../scss/style.css'
import Left from '../../assets/icon/Left.svg'
import Right from '../../assets/icon/Right.svg'
import { mainsectionAPI } from '../../API/api';
import Preloader from '../../assets/preloader/Preloader';

export default function Mainsection() {
    const [getLocks, setLocks] = useState([]);
const [currentindexLock, setCurrentindexlock] = useState(0);

const nextLock = () => {
    setCurrentindexlock((currentindexLock + 1) % getLocks.length);
  
}
const prevLock = () => {
    setCurrentindexlock((currentindexLock - 1 + getLocks.length) % getLocks.length);
   
}

console.log(currentindexLock)

const currentLock = getLocks.length > 0 ? getLocks[currentindexLock] : null;
console.log(currentLock)

const [currentindexIMG, setCurrentindexIMG] = useState(0);
const nextIMG = () => {
    if (currentLock?.imageUrl?.length > 0) {
    setCurrentindexIMG((currentindexIMG + 1) % currentLock.imageUrl.length);
   
    }
}
const prevIMG = () => {
    if (currentLock?.imageUrl?.length > 0) {
    setCurrentindexIMG((currentindexIMG - 1 + currentLock.imageUrl.length) % currentLock.imageUrl.length);
   
    }
}

useEffect(() => {
    (async ()=> {
        const data = await mainsectionAPI.getLocks();
        setLocks(data);
    })()
  
}, []);


  return (
    
      <section className="product">
        <button className="arrow left" onClick={prevLock}>
                        <img src={Left} alt="Left"/>
                    </button>
      <div className="product-image">
            
           {getLocks.length > 0 ? <><img src={getLocks[currentindexIMG].imageUrl} alt="Golden Soft GS-200Z-5" />
           <div className="pagination_img">
                <button className="arrow left" onClick={prevIMG}>
                        <img src={Left} alt="Left"/>
                    </button>
                <button className="arrow right" onClick={nextIMG}>
                        <img src={Right} alt="Right"/>
                    </button>
                    </div>
           </> :
        
        <Preloader />
    }
     </div>
{getLocks.length > 0 ? 
            <div className="product-info">
              
                <h2 className="product-name">
                  {getLocks[currentindexLock].name} </h2>
                  <h2 className="product-for">
                  {getLocks[currentindexLock].for} </h2>
                  <br/>

                <p className="product-text">{getLocks[currentindexLock].description}
                </p>
                <p className="product-text">{getLocks[currentindexLock].features}</p>

                <br/>
                <p className="product_price">Цена</p>
               
                <div className="price">
                    
                    <span className="current-price">{getLocks[currentindexLock].price.current}</span>
                    <span className="old-price">{getLocks[currentindexLock].price.old}</span>
                </div>
                <br/>
                <button className="buy-button">Добавить в корзину</button>
            
                <div className="pagination">
                </div>
        </div> : <Preloader />
}
        <button className="arrow right" onClick={nextLock}>
                        <img src={Right} alt="Right"/>
                    </button>
        </section>
   
  );
}