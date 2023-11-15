import React from "react";
import { Image, Link, Button } from "@nextui-org/react";

export const Catering = () => {
  return (
    <div className="flex items-center justify-center flex-col p-4 mx-auto mb-64 font-marcellus">
      <div className="mx-auto h-auto">
          <h2 className="mx-auto text-center w-40 py-1.5 pt-8 px-4 text-4xl text-gray-800">CATERING</h2>
          <h3 className="text-center py-6 mx-80 text-lg text-gray-800">Si ya cuentas con un espacio para celebrar tu evento o boda, no renuncies
          a la gastronomía y sorprende a tus invitados.</h3>
          <p className="text-center px-4 text-2xl text-gray-800">TE DAMOS 3 MOTIVOS PARA QUE TU EVENTO SEA INOLVIDABLE</p>
        </div>

      {/* Información de la cocina */}
      <div className="mx-auto h-auto w-1/2 z-0">
        <div className="flex items-center justify-center flex-col mt-8">
          <h2 className="mx-auto text-center w-40 text-4xl text-gray-800">1</h2>
          <h3 className="mb-4 text-center text-2xl text-gray-800">COCINA</h3>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-2/5">
            <p className="mb-3 text-gray-800">
              En nuestro restaurante, la cocina es más que un lugar de creación, es 
              un santuario donde los ingredientes se convierten en poesía y los 
              sabores en emociones. Cada plato es una historia que se narra con 
              ingredientes frescos y técnicas maestras, donde la pasión se mezcla 
              con la creatividad.              
            </p>
            <p className="text-gray-800">
              En nuestro santuario culinario, cada visita es una experiencia 
              culinaria única, donde los deseos más exquisitos se hacen realidad en 
              cada bocado.
            </p>
          </div>

          <div className="mx-10 w-4 flex justify-center">
            <img className="w-0.4" src="/src/images/linea-vertical1.png" alt="Linea separadora" />
          </div>

          <div className="w-2/5">
            <Image
              width={3170}
              src="/src/images/imagen-catering1.jpg"
              radius="none"
            />
          </div>
        </div>
      </div>

      {/* Información de los detalles */}
      <div className="mx-auto h-auto w-1/2 z-0">
        <div className="flex items-center justify-center flex-col mt-8">
          <h2 className="mx-auto text-center w-40 text-4xl text-gray-800">2</h2>
          <h3 className="mb-4 text-center text-2xl text-gray-800">LOS DETALLES</h3>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-2/5">
            <Image
              width={3170}
              src="/src/images/imagen-catering2.jpg"
              radius="none"
            />
          </div>

          <div className="mx-10 w-4 flex justify-center">
            <img className="w-0.4" src="/src/images/linea-vertical1.png" alt="Linea separadora" />
          </div>

          <div className="w-2/5">
            <p className="mb-1 text-gray-800">
              En nuestro restaurante, los eventos se elevan a un nivel 
              superior. Cada detalle ha sido cuidadosamente diseñado para 
              que cada ocasión sea verdaderamente inolvidable. Desde la 
              elegante decoración hasta la atención personalizada, 
              transformamos cada evento en una experiencia que perdurará 
              en la memoria.
            </p>
          </div>
        </div>
      </div>

      {/* Información de los extras */}
      <div className="mx-auto h-auto w-1/2 z-0">
        <div className="flex items-center justify-center flex-col mt-8">
          <h2 className="mx-auto text-center w-40 text-4xl text-gray-800">3</h2>
          <h3 className="mb-4 text-center text-2xl text-gray-800">EXTRAS</h3>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-2/5">
            <p className="mb-2 text-gray-800">
              Llevamos los eventos a un nivel completamente 
              nuevo gracias a una serie de extras garantizando que cada 
              ocasión sea memorable.            
            </p>
            <p className="mb-2 text-gray-800">
              Maridaje de Bebidas Especiales: Nuestra selección de bebidas 
              es la pareja perfecta para la carne al pastor. 
            </p>
            <p className="mb-2 text-gray-800">
              Entretenimiento en Vivo: Ofrecemos una variedad de entretenimiento 
              en vivo.
            </p>
            <p className="text-gray-800">
              Regalos y Recuerdos: Ofrecemos regalos temáticos y recuerdos 
              personalizados para conmemorar la ocasión.
            </p>
          </div>

          <div className="mx-10 w-4 flex justify-center">
            <img className="w-0.4" src="/src/images/linea-vertical1.png" alt="Linea separadora" />
          </div>

          <div className="w-2/5">
            <Image
              width={3170}
              src="/src/images/imagen-catering3.jpg"
              radius="none"
            />
          </div>
        </div>
      </div>

      <div>
       <Button as={Link} color="primary"  href="/servicios/solicitud-de-servicio" variant="flat" className="active:scale-95 hover:scale-105 mt-28 shadow-xl rounded-lg py-3 px-10 text-white transition duration-500 bg-[#092A3A]">
            <h3>Reservar</h3>
        </Button>
        {/* <button href="#" className="active:scale-95 hover:scale-105 mt-28 shadow-xl rounded-lg py-3 px-10 bg-sky-950 text-white transition duration-500">Reservar</button> */}
      </div>
    </div>
  );
};

export default Catering
