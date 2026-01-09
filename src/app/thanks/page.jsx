import React from 'react';

const ThankYouPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl shadow-lg text-center max-w-md">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Thank You!
        </h1>
        <p className="text-lg md:text-xl text-gray-300">
          Your submission has been received. We will get back to you shortly.
        </p>
        <div className="mt-6">
          <a
            href="/"
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all"
          >
            Go Back Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
