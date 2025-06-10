import { Link } from "react-router-dom";
import { useUser } from "../Context/UserContext";

export default function Navbar() {
  const { usuario } = useUser();

  return (
    <nav className="bg-gray-900 text-white px-8 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Menú principal */}
        <div className="flex space-x-6 text-lg font-medium">
          <Link to="/" className="hover:text-blue-400">Inicio</Link>
          <Link to="/hombres" className="hover:text-blue-400">Hombres</Link>
          <Link to="/mujeres" className="hover:text-blue-400">Mujeres</Link>
          <Link to="/accesorios" className="hover:text-blue-400">Accesorios</Link>
          <Link to="/about" className="hover:text-blue-400">Sobre nosotros</Link>
          <Link to="/contact" className="hover:text-blue-400">Contacto</Link>
        </div>

        {/* Usuario */}
        {usuario ? (
          <div className="flex items-center gap-3">
            <img
              src={usuario.foto}
              alt={usuario.nombre}
              className="w-9 h-9 rounded-full border-2 border-white"
            />
            <span className="text-sm">{usuario.nombre}</span>
          </div>
        ) : (
          <Link
            to="/login"
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-semibold"
          >
            Iniciar sesión
          </Link>
        )}
      </div>
    </nav>
  );
}
