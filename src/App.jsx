import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
const [data, setData] = useState([])

 const api = `https://timbu-get-all-products.reavdev.workers.dev/products?organization_id=93a5c854eb9240839418fd208082bb09&reverse_sort=false&size=10&Appid=LU7NL4AXRFDNJQW&Apikey=${import.meta.env.VITE_APP_KEY}`

 useEffect(()=> {


    fetch(api)
     .then(response => response.json())
     .then(json => setData(json.items))
     .catch(error => {
      setData(error)
     });
    },[api])
   
  return (
    <div className="App">
      {data.map(item =>{
      return(
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <img src={`https://api.timbu.cloud/images/${item.photos[0].url}`} alt={item.name} height={200} width={200} />
          <h4>{item.current_price[0].NGN}</h4>
          <h4>{item.categories[0].name}</h4>
        </div>
      )

      })}
    </div>
  );
}

export default App;
