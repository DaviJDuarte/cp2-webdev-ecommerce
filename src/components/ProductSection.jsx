import ProductCard from "./ProductCard";

export default function ProductSection({category, products}){

    return (
      <div className="mb-4">
        <div className="text-yellow-400 bg-black font-bold text-center py-2 ">{category}</div>
        <h1 className="text-center font-bold my-4">Popular Products</h1>
        <div className="grid grid-cols-4 gap-y-16">
          {products.map((product) => (
            <ProductCard
              title={product.title}
              price={product.price}
              image={product.image}
              rating={product.rating}
              key={product.id}
            />
          ))}
        </div>
      </div>
    );
}