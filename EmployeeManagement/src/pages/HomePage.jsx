import React from "react"
import Squares from "../components/Particles/Squares"
import TextPressure from "../components/TextPressure/TestPressure";
import image from "../assets/insta.png"
import linkedin from "../assets/linkedin.png"
import github from "../assets/github.png"
import x from "../assets/xlogo.png"


export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-black text-white font-poppins overflow-hidden">

      <div className="absolute inset-0 z-0">
        <Squares
          direction="diagonal"
          speed={0.4}
          squareSize={50}
          borderColor="#333"
          hoverFillColor="#111"
        />
      </div>


      <div className="relative z-10">

        <header className="border-b border-emerald-500">
          <div className="container mx-auto px-6 py-4">
            <nav className="flex items-center justify-between">
              <div className="text-xl font-semibold">

                <TextPressure
                  text="Coordinet"
                  fontFamily="Compressa VF"
                  fontUrl="https://res.cloudinary.com/dr6lvwubh/raw/upload/v1529908256/CompressaPRO-GX.woff2"
                  width={true}
                  weight={true}
                  italic={true}
                  alpha={false}
                  flex={true}
                  stroke={true}
                  scale={true}
                  textColor="#ffffff"
                  strokeColor="#34D399"

                  strokeWidth={1.5}
                  minFontSize={100}
                  className="text-8xl md:text-15xl"
                />


              </div>
              <div className="flex items-center space-x-8">
                <a href="/about" className=" text-white hover:bg-gray-900 hover:text-black bg-transparent px-4 py-2 rounded-md transition-colors">
                  About Us
                </a>
                <a href="/contact" className=" text-white hover:bg-gray-900 hover:text-black bg-transparent px-4 py-2 rounded-md transition-colors">
                  Contact Us
                </a>
                <a href="/login" className=" text-white hover:bg-gray-900 hover:text-black bg-transparent px-4 py-2 rounded-md transition-colors">
                  Login
                </a>
                <a
                  href="/signup"
                  className=" text-white hover:bg-gray-900 hover:text-black bg-transparent px-4 py-2 rounded-md transition-colors"
                >
                  Sign Up
                </a>
              </div>
            </nav>
          </div>
        </header>


        <main className="container mx-auto px-6 py-20 text-center">


          <h1 className="text-7xl font-light mb-8 leading-tight">
            Personnel
            <br />
            <span className="font-semibold">Management  </span>
          </h1>




          <p className="text-2xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed mb-12">
            Shared goals . Clear roles . One thriving team .
          </p>









          <div className="flex gap-4 justify-center items-center">
            <a
              href="/signup"
              className="text-white  hover:bg-gray-900 px-8 py-3 text-lg rounded-md transition-colors"
            >
              Get Started
            </a>
            <a
              href="/about"
              className="text-white hover:bg-gray-900 px-8 py-3 text-lg rounded-md transition-colors"
            >
              Learn More
            </a>
          </div>
        </main>





        <footer className="border-t border-emerald-500 mt-20">
          <div className="container mx-auto px-6 py-8">
            <div className="grid grid-cols-3 items-center text-center">
             
             <div className="text-left text-gray-400"></div>


              <div className="flex justify-center space-x-6">
                <a
                  href="https://www.linkedin.com/in/sanskar-srivastava-9986b030b/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedin} alt="LinkedIn" className="w-8 h-8" />
                </a>
                <a
                  href="https://www.instagram.com/sanssskarr?igsh=b2owNDJhbGwyeHNt"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={image} alt="Instagram" className="w-8 h-8" />
                </a>

                <a
                  href="https://x.com/38_sanskar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={github} alt="Github" className="w-8 h-8" />
                </a>


<a
                  href="https://github.com/Sanskar2298"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={x} alt="Twitter" className="w-8 h-8" />
                </a>




              </div>



            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}