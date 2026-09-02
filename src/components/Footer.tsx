import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer
      id="main-app-footer"
      className="w-full rounded-t-[32px] backdrop-blur-md bg-[#f2f4f6]/80 border-t border-[#c3c7cb]/30 flex flex-col md:flex-row justify-between items-center px-8 md:px-12 py-12 md:py-16 gap-6 z-20 relative mt-auto"
    >
      <div className="font-plus-jakarta text-2xl font-bold tracking-tighter text-[#50616b] hover:text-[#191c1e] transition-colors">
        FORECAST-BUST
      </div>

      <div className="flex flex-wrap justify-center gap-6 sm:gap-8 font-inter text-xs font-semibold uppercase tracking-wider text-[#43474b]">
        <a href="#overview" className="hover:text-[#006b5f] transition-colors">
          Privacy Policy
        </a>
        <a href="#detection" className="hover:text-[#006b5f] transition-colors">
          Terms of Service
        </a>
        <a href="#technology" className="hover:text-[#006b5f] transition-colors flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#006b5f] inline-block animate-pulse"></span>
          API Status
        </a>
        <a href="#how-it-works" className="hover:text-[#006b5f] transition-colors">
          Contact
        </a>
      </div>

      <div className="font-inter text-xs sm:text-sm text-[#43474b] opacity-80 hover:opacity-100 transition-opacity text-center md:text-right">
        © 2024 FORECAST-BUST. Precision Atmospheric Intelligence.
      </div>
    </footer>
  );
};
