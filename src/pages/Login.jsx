import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase/config";
import { useUser } from "../Context/UserContext";

export default function Login() {
  const navigate = useNavigate();
  const { setUsuario } = useUser();

  const loginConGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setUsuario({
        nombre: user.displayName,
        email: user.email,
        foto: user.photoURL,
      });
      navigate("/"); // redirigir al home
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      alert("Error al iniciar sesión: " + error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">Inicia sesión en GymFit</h2>
      <button
        onClick={loginConGoogle}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Iniciar sesión con Google
      </button>
    </div>
  );
}
