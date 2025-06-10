import ProductCard from "../components/ProductCard";

const accesorios = [
  { id: 1, nombre: "Guantes de Gimnasio", precio: "$199", imagen: "https://cdn1.coppel.com/images/catalog/mkp/5415/3000/54151465-1.jpg?iresize=width:400,height:320" },
  { id: 2, nombre: "Cinturón de Levantamiento", precio: "$299", imagen: "https://www.ironside.com.mx/cdn/shop/files/CinturondeLevantamientoIRONSIDE_2_9ff2f6bc-b215-47cd-9f67-9bdee17ce51e.jpg?v=1744235192&width=1214" },
];

export default function Accesorios() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Accesorios</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {accesorios.map(producto => (
          <ProductCard key={producto.id} {...producto} />
        ))}
      </div>
    </div>
  );
}
