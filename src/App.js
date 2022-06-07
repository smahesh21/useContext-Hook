import React from 'react'
import ComponentA from './components/ComponentA'

import './App.css'

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="app-container">
      <UserContext.Provider value="Mahesh">
        <ChannelContext.Provider value="Codevolution">
          <ComponentA />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  )
}

export default App
