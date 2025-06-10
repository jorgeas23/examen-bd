import { motion } from "framer-motion";
import homebg from "../assets/homegym.jpg";


export default function Home() {
  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${homebg})` }}
    >
      <motion.div
        className="bg-white bg-opacity-90 rounded-2xl shadow-lg p-6 m-4 border border-gray-200 max-w-md text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-3xl font-bold mb-2">Página Home</h2>
        <p className="text-lg">Bienvenido a nuestra tienda en línea GymFit.</p>
      </motion.div>
    </div>
  );
}
