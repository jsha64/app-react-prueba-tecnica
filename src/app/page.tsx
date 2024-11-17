import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col w-[1660px] h-[3123px]">
      <div className="flex flex-row justify-end h-[3%]">
        <div className="flex w-full h-auto justify-center">

        <div className="flex w-2/4 justify-start">
          <Image 
            alt="pet"
            src={'pet.svg'}
            width={20}
            height={20}
            />
        </div>
        <div className="flex w-2/4 justify-center">
          <ul className="flex flex-row space-x-20 items-center">
            <li>dkjllsjlk</li>
            <li>dksjflk</li>
            <li>odkjsfl</li>
            <li>ofjsdlj</li>
            <li>ksflkdjsf</li>
          </ul>
        </div>
        </div>
      </div>

      <div className="flex flex-row h-[15%]">
        <div className="flex flex-col">
          <p>We Get Pet Care!</p>
          <p>For over 17 Years, Fetch! Pet Care has been a trusted partner in keeping pets healthy and happy!</p>
          <div className="flex flex-row">
            <button className="flex border justify-center items-center rounded-full w-48 h-8">Schedule Service</button>
            <p>Or Call 866.338.2463</p>
          </div>
        </div>
        <div className="">
          <div className="w-52 h-52 bg-[#FFE530] rounded-full">
            <Image className="justify-center items-center" alt="pet" src={'pet.svg'} width={20} height={20}/>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center">
        <div className="flex flex-col w-[45%] justify-start">
          <div className="border space-y-12 w-3/5 h-3/5">
            <p>Our Services</p>
            <p>National Brand With a Local Feel. Experience the Fetch! Difference</p>
            <p>Enter Your Location and Fetch Our Services</p>
            <input type="text" />
            <button></button>
          </div>
        </div>
          <div className="flex justify-end">
            <div className="grid gap-x-9 gap-y-10 grid-cols-2 content-center">
              <div className="bg-white w-[249px] h-[249px] rounded-[20px]"></div>
              <div className="bg-white w-[249px] h-[249px] rounded-[20px]"></div>
              <div className="bg-white w-[249px] h-[249px] rounded-[20px]"></div>
              <div className="bg-white w-[249px] h-[249px] rounded-[20px]"></div>
            </div>
          </div>
        
      </div>

      <div className="flex flex-col border-black bg-black w-full h-[800px]">
        <div className="flex justify-center items-center bg-green-500 h-[40%] w-full">
          <h1>Hpaks;lk;fldks;lk</h1>
        </div>

        <div className="flex flex-row justify-center h-[60%] bg-red-600">
            <div className="flex bg-blue-300 justify-center w-[5%] h-full">
              <button></button>
            </div>
            <div className="flex bg-orange-500 w-[82%]">
              <div className="flex w-full h-full bg-blue-500 items-center">
                <div className="flex bg-[#FF6752] w-[40%] h-[90%] rounded-tl-lg rounded-bl-lg"></div>
                <div className="flex bg-blue-800 w-[70%] h-[100%] rounded-lg"></div>
                <div className="flex bg-[#FF6752] w-[40%] h-[90%] rounded-tr-lg rounded-br-lg"></div>
              </div>
            </div>
            <div className="flex justify-end w-[5%] bg-blue-700">
              <button></button>
            </div>
          
        </div>
      </div>

      <section className="relative bg-gray-50 py-16 h-full">
      <div className="container mx-auto px-6 flex h-full flex-col lg:flex-row items-center justify-between">
        {/* Columna izquierda: Pasos */}
        <div className="relative w-full lg:w-1/2 flex justify-center items-center">
          {/* Líneas discontínuas SVG */}
          <svg
            className="absolute w-full h-full max-w-md"
            viewBox="0 0 300 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M75 50 C150 100, 150 200, 225 250"
              stroke="#FF6F61"
              strokeWidth="2"
              strokeDasharray="5 5"
              fill="none"
            />
          </svg>
          {/* Tarjetas */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-lg p-4 flex flex-col items-center w-32">
            <img src="Grupo 69.svg" alt="Reserve" className="w-10 h-10 mb-2" />
            <p className="text-sm font-medium text-gray-700">Reserve</p>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg rounded-lg p-4 flex flex-col items-center w-32">
            <img src="Grupo 70.svg" alt="Match" className="w-10 h-10 mb-2" />
            <p className="text-sm font-medium text-gray-700">Match</p>
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-lg p-4 flex flex-col items-center w-32">
            <img src="Grupo 71.svg" alt="Relax" className="w-10 h-10 mb-2" />
            <p className="text-sm font-medium text-gray-700">Relax</p>
          </div>
        </div>

        {/* Columna derecha: Texto y formulario */}
        <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">How it Works</h2>
          <p className="text-gray-600 mb-6">
            Because finding a good pet sitter shouldn't be a hassle. With Fetch! it's as easy as...
          </p>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Zip Code"
              className="w-full max-w-sm p-3 rounded-lg border border-gray-300"
            />
            <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-red-600">
              →
            </button>
          </div>
        </div>
      </div>

      {/* Fondo amarillo */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary rounded-full mix-blend-multiply opacity-20"></div>
    </section>

      <div>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <p></p>
          <p></p>
          <p></p>
          <input type="text" />
          <button></button>
        </div>
      </div>

      <div>
        <div>
          <p></p>
          <p></p>
          <button></button>
        </div>
      </div>

      <footer>
        <div>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>

        <div>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>

        <div>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>

        <div>
          <p></p>
          <p></p>
          <input type="text" name="" id="" />
          <button></button>
        </div>
        
      </footer>
    </div>
  );
}
