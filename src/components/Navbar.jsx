import { Link } from "react-router-dom";
import { useUser } from "../Context/UserContext";

export default function Navbar() {
  const { usuario } = useUser();

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex gap-4">
        <Link to="/">Inicio</Link>
        <Link to="/hombres">Hombres</Link>
        <Link to="/mujeres">Mujeres</Link>
        <Link to="/accesorios">Accesorios</Link>
        <Link to="/about">Sobre nosotros</Link>
        <Link to="/contact">Contacto</Link>
      </div>
      {usuario ? (
        <div className="flex items-center gap-2">
          <img
            src={usuario.foto}
            alt={usuario.nombre}
            className="w-8 h-8 rounded-full"
          />
          <span>{usuario.nombre}</span>
        </div>
      ) : (
        <Link to="/login" className="bg-blue-600 px-3 py-1 rounded">
          Iniciar sesión
        </Link>
      )}
    </nav>
  );
}
