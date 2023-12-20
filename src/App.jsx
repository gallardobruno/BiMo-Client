import { lazy, Suspense } from 'react'
import Page404 from './assets/404'
import { LandingSeller, LandingUser, PostBike} from './containers/index.jsx'
import { Route, Routes } from 'react-router-dom'
import { TestComponent } from './TestField/TestComponent.jsx'
const SearchPage = lazy(() => import('./assets/SearchPage')) 


function App() {
  return (
    <main>
      {/* <Suspense fallback={<div>Cargando..</div>}> */}
      <Suspense fallback={null}>
        <Routes>
          <Route path='/' element = { <LandingUser companyName={"BiMo reg"}/> } />
          <Route path='/seller' element = { <LandingSeller companyName={"BiMo reg"}/> } />
          <Route path='/post' element = { <PostBike/> } />
          <Route path='/test' element = { <TestComponent/> } />
          <Route path='/search/:query' element = {SearchPage} />
          <Route path='*' element={<Page404 />} />
        </Routes>
      </Suspense>
    </main>
  )
}  

export default App
