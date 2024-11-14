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

      <div>
        <p></p>
        <div>
          <button></button>
          <div></div>
          <div></div>
          <div></div>
          <button></button>
        </div>
      </div>

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
