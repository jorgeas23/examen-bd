import ProductCard from "../components/ProductCard";

const productosMujeres = [
  { id: 1, nombre: "Top Deportivo", precio: "$249", imagen: "https://ss205.liverpool.com.mx/xl/1124309430.jpg" },
  { id: 2, nombre: "Leggings de Compresión", precio: "$399", imagen: "https://i5.walmartimages.com/asr/e9738910-c90d-414a-bfd8-461a7e0182ca.d53a7b9d75bc557ace9442a7a504479c.jpeg" },
];

export default function Mujeres() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Ropa para Mujeres</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {productosMujeres.map(producto => (
          <ProductCard key={producto.id} {...producto} />
        ))}
      </div>
    </div>
  );
}
