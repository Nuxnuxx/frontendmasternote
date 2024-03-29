import { useContext, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import Results from './Results'
import useBreedList from './useBreedList'
import fetchSearch from './fetchSearch'
import AdoptedPetContext from './AdoptedPetContext'

const ANIMALS = ['bird', 'cat', 'dog', 'rabbit', 'reptile']

const SearchParams = () => {
  const [requestParams, setRequestParams] = useState({
    location: '',
    animal: '',
    breed: '',
    page: 0,
  })
  const [animal, setAnimal] = useState('')
  const [breeds] = useBreedList(animal)
  const [adoptedPet] = useContext(AdoptedPetContext)

  const results = useQuery(['search', requestParams], fetchSearch)
  const pets = results?.data?.pets ?? []
  const startIndex = results?.data?.startIndex
  const hasNext = results?.data?.hasNext ?? false

  const onNextPage = () => {
    setRequestParams((old) => ({ ...old, page: old.page + 1 }))
  }

  const onPreviousPage = () => {
    setRequestParams((old) => ({
      ...old,
      page: Math.max(old.page - 1, 1),
    }))
  }

  return (
    <div className='search-params'>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          const formData = new FormData(e.target)
          const obj = {
            animal: formData.get('animal') ?? '',
            breed: formData.get('breed') ?? '',
            location: formData.get('location') ?? '',
          }
          setRequestParams(obj)
        }}>
        {adoptedPet ? (
          <div className='pet image-container'>
            <img
              src={adoptedPet.images[0]}
              alt={adoptedPet.name}
            />
          </div>
        ) : null}
        <label htmlFor='location'>
          Location
          <input
            name='location'
            id='location'
            placeholder='Location'
          />
        </label>

        <label htmlFor='animal'>
          Animal
          <select
            id='animal'
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value)
            }}
            onBlur={(e) => {
              setAnimal(e.target.value)
            }}>
            <option />
            {ANIMALS.map((animal) => (
              <option
                key={animal}
                value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor='breed'>
          Breed
          <select
            disabled={!breeds.length}
            id='breed'
            name='breed'>
            <option />
            {breeds.map((breed) => (
              <option
                key={breed}
                value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>

        <button>Submit</button>
      </form>
      <Results pets={pets} />
      {hasNext ? <button onClick={onNextPage}>Next Page</button> : null}
      {startIndex ? (
        <button onClick={onPreviousPage}>Previous Page</button>
      ) : null}
    </div>
  )
}

export default SearchParams
