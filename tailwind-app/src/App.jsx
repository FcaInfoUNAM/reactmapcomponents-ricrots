
import './App.css';
import Nav from './Nav';
import Card from './Card';



function App() {

  const products = [
    {
      id: 1,
      image: 'https://placehold.co/600x400/E97451/white?text=Producto+1',
      title: 'Producto Increíble 1',
      paragraph: 'Descripción detallada del primer producto. Es fantástico y muy útil para tus necesidades diarias.',
      productRef: '/producto/1'
    },
    {
      id: 2,
      title: 'Producto Asombroso 2',
      paragraph: 'Este segundo producto complementa al primero. ¡Una oferta que no te puedes perder en nuestra tienda!',
      productRef: '/producto/2'
    },
    {
      id: 3,
      image: 'https://placehold.co/600x400/50C878/white?text=Producto+Verde',
      title: 'Producto Ecológico 3',
      paragraph: 'Nuestro tercer producto es amigable con el medio ambiente, sostenible y de alta calidad.',
      productRef: '/producto/3'
    },
    {
      id: 4,
      image: 'https://placehold.co/600x400/1E90FF/white?text=Producto+Azul',
      title: 'Innovación Azul 4',
      paragraph: 'La última tecnología azul, diseñada para mejorar tu eficiencia y productividad.',
      productRef: '/producto/4'
    }
  ];

  return (
    <>
      <Nav />

      <div className="pt-20 min-h-screen bg-gray-100 dark:bg-gray-800 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-orange-600 dark:text-orange-400">
            Nuestros Productos Destacados
          </h1>
        </header>

        <div className="container mx-auto px-4 flex flex-wrap justify-center items-stretch gap-6 mb-12">
          <Card
            image="https://placehold.co/600x400/F28C28/white?text=Naranja+Mecánica"
            title="Producto Naranja Especial"
            paragraph="Una descripción vibrante para nuestro producto estrella de color naranja."
            productRef="/producto/naranja"
          />
        </div>

        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-700 dark:text-gray-300 mb-8 text-center">
            Catálogo Completo
          </h2>
          <div className="flex flex-wrap justify-center items-stretch gap-6">
          
            {products.map(product => (
              <Card
                key={product.id}
                image={product.image}
                title={product.title}
                paragraph={product.paragraph}
                productRef={product.productRef}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
