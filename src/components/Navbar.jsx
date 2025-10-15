import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-yellow-400 text-black px-6 py-4 flex justify-between items-center">
      <h1 className="font-bold text-xl">Fiap Commerce</h1>
      <div className="flex gap-4">
        <NavLink to={'/'} className="hover:underline">Home</NavLink>
        <NavLink to={'/perfil'} className="hover:underline">Perfil</NavLink>
        <NavLink to={'/carrinho'} className="hover:underline">Carrinho</NavLink>
      </div>
    </nav>
  );
}
