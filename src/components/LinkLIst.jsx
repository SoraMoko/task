import React from 'react';
import links from '../data/links.json';
import { LinkItem } from './LinkItem';

export function LinkList() {
  return (
    <ul className="list-disc list-inside">
      {links.map((link, idx) => (
        <LinkItem key={idx} {...link} />
      ))}
    </ul>
  );
}