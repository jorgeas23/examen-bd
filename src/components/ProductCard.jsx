export default function ProductCard({ nombre, precio, imagen }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img src={imagen} alt={nombre} className="w-full h-40 object-cover rounded mb-2" />
      <h3 className="text-lg font-semibold">{nombre}</h3>
      <p className="text-gray-600">{precio}</p>
    </div>
  );
}
