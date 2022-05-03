import { createContext } from 'react'

const globalContext = createContext()

function ThemeProvider({ children }) {
  const base_url = 'https://image.tmdb.org/t/p/original/'
  const value = { base_url }
  return (
    <globalContext.Provider value={value}>{children}</globalContext.Provider>
  )
}

export { globalContext, ThemeProvider }
