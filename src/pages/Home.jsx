import { useEffect, useState } from "react";
import ProductSection from "../components/ProductSection";

export default function Home() {

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const API = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${API}/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        const dataCategories = new Set()
        data.map(product => dataCategories.add(product.category))
        setCategories([...dataCategories])
        
      })
      .catch((err) => console.error(err));
  }, [API]);

  useEffect(() => {
      console.log(categories);
      
  }, [categories])

  useEffect(() => {
      console.log(products);
      
  }, [products])
  
  return (
    <div>
        <h2 className="text-2xl font-bold mb-4">Bem-vindo ao Fiap Commerce!</h2>
        {categories.map(category => 
          <ProductSection category={category} products={products.filter(product => product.category === category)} key={category}/>
        )}
    </div>
  );
}
