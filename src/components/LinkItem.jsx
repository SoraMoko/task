import React from 'react';

export function LinkItem({ title, url }) {
  return (
    <li className="py-1">
      <a href={url} target="_blank" rel="noopener noreferrer">
        {title}
      </a>
    </li>
  );
}