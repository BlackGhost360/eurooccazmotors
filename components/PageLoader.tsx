import React, { useState, useEffect } from 'react';

const PageLoader: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 bg-white/95 backdrop-blur-sm flex items-center justify-center z-[9999]">
          {/* Outer rotating circle */}
          <div className="relative w-24 h-24">
            {/* Animated spinner */}
            <div className="absolute inset-0 rounded-full border-4 border-slate-200 border-t-blue-600 border-r-blue-500 animate-spin"></div>
            
            {/* Inner pulsing circle */}
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-blue-50 to-slate-50 animate-pulse"></div>
            
            {/* Center logo circle */}
            <div className="absolute inset-4 rounded-full bg-white flex items-center justify-center border-2 border-blue-100">
              <div className="w-3 h-3 rounded-full bg-blue-600 animate-ping"></div>
            </div>
          </div>

          {/* Loading text with animation */}
          <div className="absolute bottom-20 text-center">
            <p className="text-slate-600 font-bold text-sm tracking-wider uppercase">
              Chargement
              <span className="inline-block ml-1">
                <span className="animate-bounce" style={{ animationDelay: '0s' }}>.</span>
                <span className="animate-bounce" style={{ animationDelay: '0.1s' }}>.</span>
                <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>.</span>
              </span>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default PageLoader;
