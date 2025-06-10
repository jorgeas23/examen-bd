import ProductCard from "../components/ProductCard";

const productosHombres = [
  { id: 1, nombre: "Camiseta DryFit", precio: "$299", imagen: "https://images.unsplash.com/photo-1734668486548-c64b0c72e471?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 2, nombre: "Short Deportivo", precio: "$349", imagen: "https://i.pinimg.com/736x/68/ee/a9/68eea98b42e29cdfa6027b887135c1f6.jpg" },
];

export default function Hombres() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Ropa para Hombres</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {productosHombres.map(producto => (
          <ProductCard key={producto.id} {...producto} />
        ))}
      </div>
    </div>
  );
}
