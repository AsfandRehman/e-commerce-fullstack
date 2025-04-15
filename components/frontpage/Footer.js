import React from 'react';
import { MdEmail } from 'react-icons/md'; // Import email icon
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaInstagram } from 'react-icons/fa';
import { IoLanguageOutline } from 'react-icons/io5';

const Footer = () => {
  return (
    <>
    <div className="bg-gray-100 text-black py-8 px-4 text-center">
      <h2 className="text-xl font-semibold mb-2">Subscribe on our newsletter</h2>
      <p className="text-sm text-gray-600 mb-4">
        Get daily news on upcoming offers from many suppliers all over the world
      </p>
      <div className="flex justify-center">
        <div className="flex border rounded-md overflow-hidden">
          <div className="bg-gray-200 px-4 py-2 flex items-center">
            <MdEmail className="text-gray-500 mr-2" />
            <span className="text-gray-500">Email</span>
          </div>
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 focus:outline-none"
          />
          <button className="bg-blue-600 text-white px-6 py-2">
            Subscribe
          </button>
        </div>
      </div>
    </div>

    {/* section footer */}
    <footer className="bg-white text-black py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        {/* Left Section (Logo, Info, Social) */}
        <div className="mb-8 md:mb-0">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 rounded-lg p-2">
              <img src='https://media-hosting.imagekit.io/dd68f55b45c24400/screenshot_1743960964618.png?Expires=1838568965&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=YwofXpMsnfzzcLA8T5fyjLPbhmuzv7WuBTcuj3cHarQH6L48P~~qXseQ~HIMEGMC1BE9KIN3zKe25qOyEFRk71eCyadrmb3V5xZafC6lBZ5ixUQ2aakwZEWJA8K3KyN1t23Yfs4vlF8JstHYmI~DS9NnrI8jIw8xgUtjgUvnV-p4oNn7fWT6vCWmT0u3YAyAM2pu7ywuKFlqkW7Yimwc4z34~n-tgxBHij5cse-MM3yotip~LMMcKOJvOxl1sAUzPF02grRk1sUOjI1k8Uwpzalmbc-X8-14KjtDqNrLcIDkLi-Ul01f0XiwbiPLhuYA3u0qJJpKi2qnqZvPqcLMRg__' className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"/>
            </div>
            <span className="text-xl font-semibold ml-2">Brand</span>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Best information about the company goes here but now Lorem ipsum is
          </p>
          <div className="flex space-x-4">
            <FaFacebook className="text-gray-500" />
            <FaTwitter className="text-gray-500" />
            <FaLinkedin className="text-gray-500" />
            <FaYoutube className="text-gray-500" />
            <FaInstagram className="text-gray-500" />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center md:justify-start">
          <div className="mx-10 mb-4">
            <h3 className="font-semibold mb-2">About</h3>
            <ul className="text-sm text-gray-600">
              <li>About Us</li>
              <li>Find store</li>
              <li>Categories</li>
              <li>Blogs</li>
            </ul>
          </div>
          <div className="mx-10 mb-4">
            <h3 className="font-semibold mb-2">Partnership</h3>
            <ul className="text-sm text-gray-600">
              <li>About Us</li>
              <li>Find store</li>
              <li>Categories</li>
              <li>Blogs</li>
            </ul>
          </div>
          <div className="mx-10 mb-4">
            <h3 className="font-semibold mb-2">Information</h3>
            <ul className="text-sm text-gray-600">
              <li>Help Center</li>
              <li>Money Refund</li>
              <li>Shipping</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className="mx-10 mb-4">
            <h3 className="font-semibold mb-2">For users</h3>
            <ul className="text-sm text-gray-600">
              <li>Login</li>
              <li>Register</li>
              <li>Settings</li>
              <li>My Orders</li>
            </ul>
          </div>

          {/* App Download Buttons */}
          <div className="mb-4 ">
            <h3 className="font-semibold mb-2">Get app</h3>
            <a href="#" className="flex items-center bg-black text-white rounded-lg px-3 py-2 mb-2">
              <img src="https://media-hosting.imagekit.io/58642caa3110418f/type=Appstore.png?Expires=1838569766&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=lzbj3EQ6LXO85KwAq1Mp5XIAioUaO~ZwEtDP7EXohIFxx3RaTCivu-zOL~UxhqxVIW6~rjX3UVIppGSP2BDI--RUuUOu0pCdNK5WUtfoYWDb~9SwipKVxMsM5DNEKAMikhlzkq-Q83oZmyXWat~6sFewhl61OiRWE7K1CRYHvMb1bf2cnqedSVjqfnicYBfgVuSvcVSjvsnz5DH4bpmkmtGzagTqxWEUXym0fMZfuCHtU5Dac8AUPg0x21QS9MGunsk7ti-kTFzfuHh45cAOw4PBvleJa6PQcKLJty0ZDZVn~VR-lS~jdtmjXPpbEel2Psv61qIufFuQthbRz9bw8g__" alt="App Store" className="h-6 w-25 mr-2" />
             
            </a>
            <a href="#" className="flex items-center bg-black text-white rounded-lg px-3 py-2">
              <img src="https://media-hosting.imagekit.io/7f8ca64e69e14cdb/type=Google%20Play.png?Expires=1838569808&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=nUU5ghXc9BuHT72qJSwetnTAEJHbfQq8IpJaF6u-vOLIGw1O5aufxxgXGoPGjM2~V5IqTTsDqs2unRquQzPJ6GZCjTrwXTtQkUnNTBqNbFe6AXUvF~0bsJaxBAQwrM4Uji7QNz~eoh5nBOKuj2sHMfmviPDgDfk6lxN8wcbEXwoQT9-8wcfjGgHDRUf5crxpvQnmmjkQV5gQ66b2aZpaT0qzjiQm~OY0Z3n1oijCMspH7wtYGx8U3o-4vbiif20Cq7Hh3EIG3H9m7EcimotYox9m-5PzeQpqF0bVK1P-LbUoaD5pgFkgCiE2FLWBTTdyP9pkwJ1D39nJQXl~0ENqbQ__" alt="Google Play" className="h-6 w-25 mr-2" />
             
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 pt-4 border-t border-gray-200 flex justify-between items-center">
        <p className="text-sm text-gray-600">© 2023 Ecommerce.</p>
        <div className="flex items-center">
          <img src="https://media-hosting.imagekit.io/e1a0ae28caf74da4/Property%201=US.png?Expires=1838569761&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=qJCGdPwTRzoVji1JI7qEdjZ3FTYlXQio4ebQNxkOfXHMCgfuY1Umiy3LoRHYYdNwbUmh~TNj8dVoOtif1QSM6UwxF4eBBfXs1EWZlnGkouGc71uGbQGhsOLZ6aQVF7y1UomvOYjQthYC6dZglj3Msow88cdIG0xqLyn1mMWkq27QABNm8ZXR5GCCoALpDpa2bfRsK1dl6Fd~z8-YhZSCoIZZcIHmfvLB2jMbNv6VL5W1fAeR4n3mkq7WFE76AnHF57VTQgkKRuXCXf9Uq88P78WvaU~pZxfF73oQzOBLuZbPm6ljxG99oPNX6WMxxpCIt6yXypXtYaTPyyfiVrk~Ww__" alt="English" className="h-5 mr-2" />
          <span className="text-sm text-gray-600">English</span>
          <IoLanguageOutline className="ml-1 text-gray-500" />
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;