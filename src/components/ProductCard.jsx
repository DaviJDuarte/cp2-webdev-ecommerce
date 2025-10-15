export default function ProductCard({title, price, image, rating}){

    return (
      <div>
        <img className="" src={image} alt={"Product Image for " + title} />
        <h1>{title}</h1>
        <p>${price}</p>
        <button>Ver detalhes</button>
      </div>
    );
}