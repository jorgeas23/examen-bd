import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg p-6 m-4 border border-gray-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-2xl font-bold mb-2">Acerca de Nosotros</h2>
      <p>somos una tienda en linea la cual se dedica a vender la mejor ropa para el gimnasio y activades deportivas, ven y conocenos.</p>
    </motion.div>
  );
}
