import React from "react";
import 'remixicon/fonts/remixicon.css'

const Navbar = () => {
  return (
    <nav className="w-screen h-[80px]">
      <div className="flex justify-between h-full mx-[7%] items-center">
        <div className="flex gap-2">
        <i class="ri-shining-2-fill rotate-45 text-4xl"></i>
          <h2 className="font-bold text-[27px]">WizardZ</h2>
        </div>
        <div className="flex justify-center items-center gap-12 font-[china] text-[18px]">
          <h4>About Us</h4>
          <h4>Services</h4>
          <h4>Use Cases</h4>
          <h4>Pricing</h4>
          <h4>Blog</h4>
          <button className="border-2 border-black px-8 py-3 rounded-lg text-[16px]">Request a quote</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
