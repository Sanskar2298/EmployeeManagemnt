import React from "react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
     
      <header className="border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="text-xl font-semibold">
              <a href="/" className="hover:text-gray-300 transition-colors">
                WorkLoom
              </a>
            </div>
            <div className="flex items-center space-x-8">
              <a href="/about" className="text-white font-medium">
                About Us
              </a>
              <a href="/contact" className="text-gray-300 hover:text-white transition-colors">
                Contact Us
              </a>
              <a href="/login" className="text-gray-300 hover:text-white transition-colors">
                Login
              </a>
              <a
                href="/signup"
                className="border border-white text-white hover:bg-white hover:text-black bg-transparent px-4 py-2 rounded-md transition-colors"
              >
                Sign Up
              </a>
            </div>
          </nav>
        </div>
      </header>

     
      <main className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
         
          <div className="text-center mb-20">
            <h1 className="text-6xl font-light mb-6">About Us</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
              We're dedicated to revolutionizing how businesses manage their most valuable asset - their people.
            </p>
          </div>

     
          <div className="mb-20">
            <h2 className="text-3xl font-light mb-8 text-center">Our Mission</h2>
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-8">
              <p className="text-lg text-gray-300 leading-relaxed text-center">
                To empower organizations with intuitive, powerful tools that simplify employee management, enhance
                productivity, and create better workplace experiences for everyone.
              </p>
            </div>
          </div>

         
          <div className="mb-20">
            <h2 className="text-3xl font-light mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-8 h-8 bg-black rounded"></div>
                </div>
                <h3 className="text-xl font-medium mb-4">Simplicity</h3>
                <p className="text-gray-400 leading-relaxed">
                  We believe powerful software should be simple to use. Complex problems deserve elegant solutions.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-8 h-8 bg-black rounded"></div>
                </div>
                <h3 className="text-xl font-medium mb-4">Security</h3>
                <p className="text-gray-400 leading-relaxed">
                  Your data is sacred. We implement industry-leading security measures to protect your information.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-8 h-8 bg-black rounded"></div>
                </div>
                <h3 className="text-xl font-medium mb-4">People First</h3>
                <p className="text-gray-400 leading-relaxed">
                  Every feature we build is designed with real people and real workplace challenges in mind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-800 mt-20">
        <div className="container mx-auto px-6 py-8">
          <div className="flex justify-between items-center">
            <div className="text-gray-400">© {new Date().getFullYear()} Employee Management</div>
            <div className="flex space-x-6">
              <a href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">
                About Us
              </a>
              <a href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
