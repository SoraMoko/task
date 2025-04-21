// src/components/LinkList.jsx
import React from 'react';
import sections from '../data/links.json';  // ネスト構造を受け取る

export function LinkList() {
  return (
    <>
      {sections.map((section) => (
        <section key={section.group} className="mb-6">
          <h2 className="text-xl font-semibold mb-2">{section.group}</h2>
          <ul className="list-disc list-inside">
            {section.items.map((item) => (
              <li key={item.url} className="py-1">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </>
  );
}