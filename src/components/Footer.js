import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-2">
              <span className="w-6 h-6 bg-indigo-500 rounded-full"></span>
              <h1 className="text-xl font-bold">Your Brand</h1>
            </div>
            <p className="mt-4 text-gray-400">
              Making the world a better place through constructing elegant hierarchies.
            </p>
            <div className="mt-4 flex space-x-4">
              {/* Social Media Icons */}
              <a href="#" className="text-gray-400 hover:text-white">
              <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
              <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
              <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
              <i className="bi bi-github"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="font-bold">Solutions</h3>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Marketing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Analytics
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Automation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Commerce
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Insights
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold">Support</h3>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Submit ticket
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Guides
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold">Company</h3>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Jobs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Press
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold">Legal</h3>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Terms of service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  License
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-400">
          © 2024 Your Company, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
