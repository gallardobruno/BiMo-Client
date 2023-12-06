import { useEffect } from 'react'

export default function SearchPage ({ routeParams }) {
  useEffect(() => {
    document.title = `Has buscado ${routeParams.query}`
  }, [])

  return (
    <h1 className='h1-serch'>Has buscado: {routeParams.query}</h1>
  )
}