import React from 'react';

export function LinkItem({ title, url }) {
  return (
    <li className="mb-2 p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="
          block
          px-4 py-3
          bg-white
          rounded-lg
          shadow
          transition 
          hover:shadow-md 
          hover:bg-gray-50
          text-lg
          font-medium
          text-gray-800
        "
      >
        {title}
      </a>
    </li>
  );
}