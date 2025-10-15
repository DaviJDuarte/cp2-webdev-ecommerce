import { useEffect, useState } from "react";

export default function Home() {

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const API = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${API}/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => console.error(err));
  }, [API]);
  
  return (
    <div>
        <h2 className="text-2xl font-bold mb-4">Bem-vindo ao Fiap Commerce!</h2>
        {products.map((product) => <p key={product.id}>{product.id}</p>)}
    </div>
  );
}
