import { useState, lazy, Suspense } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AdoptedPetContext from './AdoptedPetContext'

const Details = lazy(() => import('./Details'))
const SearchParams = lazy(() => import('./SearchParams'))

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
})

const App = () => {
  const adoptedPet = useState(null)
  return (
      <QueryClientProvider client={queryClient}>
        <Suspense
          fallback={
            <div className='loading-pane'>
              <h2 className='loader'>X</h2>
            </div>
          }>
          <AdoptedPetContext.Provider value={adoptedPet}>
            <header>
              <Link to='/'>Adopt me!</Link>
            </header>
            <Routes>
              <Route
                path='/details/:id'
                element={<Details />}
              />
              <Route
                path='/'
                element={<SearchParams />}
              />
            </Routes>
          </AdoptedPetContext.Provider>
        </Suspense>
      </QueryClientProvider>
  )
}

export default App
