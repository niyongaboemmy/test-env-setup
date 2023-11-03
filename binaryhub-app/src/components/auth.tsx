// src/components/Response.tsx
import React from 'react';

const Response: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-semibold mb-4">Response Page</h2>
        <p className="text-gray-700 text-sm">
          Thank you for your submission. We have received your response.
        </p>
      </div>
    </div>
  );
};

export default Response;
