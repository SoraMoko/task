import React from 'react'
import { LinkList } from './components/LinkLIst'

function App() {
  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Favorite Links</h1>
      <LinkList />
    </div>
  )
}

export default App