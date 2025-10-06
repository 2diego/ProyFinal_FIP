import { useState, useEffect} from "react";
import CardPro from "./CardPro";
import "./Cards.css";


function Cards(){
     const [productos ,setProductos] = useState([]);
     const [loading , setLoading] = useState(true);
     const [error , serError] = useState (null);


     useEffect(() => { 
        fetch("/public/data/listaProductos.json")
        .then((res)=>{
          if (!res.ok) throw new Error("Error al cargar los productos")
            return res.json();
        
     })
     .then((data)=> {
      setProductos(data);
      setLoading(false);
     })
     .catch((error)=> {
     setError(error.message);
     setLoading(false)
     })
    },[]);

    


return (
    
        <section className="seccion-productos" id="listaProductos">
        <div className="sub-productos">
          <h1>Rinde al maximo,luce increible. Todo lo que necesites esta aquí.</h1>
        </div>
        <div className="cards-container" id="productosContainer">
        {productos.map((p ,index)=>(
        <CardPro
        key={index}
        img={p.img}
        nombre ={p.nombre}
        precio ={p.precio}
        stock ={p.stock}
        descripcion={p.descripcion}  
        ></CardPro>
        ))}
        </div>
        </section>
        
        

)
}
export default Cards;