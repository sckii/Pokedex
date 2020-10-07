import React, { FormEvent, useState } from 'react';

import { WrapperContent, Content, HeaderContent, Box, Search } from './styles';

import Button from '../Button'
import PokeballIcon from '../../assets/svg/pokeball.svg'
import Display from '../Display';
import Axios from 'axios';
import BlueScreenContent from '../BlueScreenContext';

import SearchIcon from '../../assets/svg/search-outline.svg'

interface ISpokemon {
  name: string
  URL: string
  type: string
  id: number
}

const PokedexBack: React.FC = () => {

  const [pokemonData, setPokemonData] = useState<ISpokemon[]>([])
  const [pokemonName, setPokemonName] = useState('Charmander')
  
  const [value, setValue] = useState(false)
  
  
  const [datas, setDatas] = useState({
    name:'charmander', 
    id: 4,
    types: {
      0: {
        type: {
          name: 'fire'
        }
      }
    }, 
    sprites: {
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'
    }
  })
  
  async function handleSearch(e: FormEvent) {
    e.preventDefault()
    const reWrited = pokemonName.toLowerCase()
    
    const res = await Axios.get(`https://pokeapi.co/api/v2/type/`)
    
    setPokemonData([])
    
    res.data.results.map( async(datas: any) => {    
      if(datas.name === reWrited) {
        
        const resType = await Axios.get(`https://pokeapi.co/api/v2/type/${datas.name}/`)

        resType.data.pokemon.map( async(datas: any) => {
          const id = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${datas.pokemon.name}/`)
          const game_index = id.data.id

          const nameNow = datas.pokemon.name
          
          const URL = datas.pokemon.url
          const myReg = /.*\/pokemon\/(.+?)\/.*/
          const imgID = URL.replace(myReg, "$1")
          const newURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${imgID}.png`
          
          setPokemonData( pokemonData => [
            ...pokemonData,
            { name: nameNow, URL: newURL, type: reWrited, id: game_index }
          ])

          return setValue(true)
        })
      } else {
        
        const response = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${reWrited}/`)
        setDatas(response.data)

        return setValue(false)
      }

    })
  }
  
  return (
    <WrapperContent>
      <Content>
        
        <HeaderContent>
          <img src={PokeballIcon} alt="Pokeball"/>
          <h6>Pokedex 0.0.1v</h6>
        </HeaderContent>

        <Box >
          <form onSubmit={handleSearch}>
            <h1>Search for pokemons (name or type)</h1>
          <div>
            <Search 
              value={pokemonName}
              onChange={(e) => {setPokemonName(e.target.value)}}
            />
            <Button>
              <img src={SearchIcon} alt=""/>
            </Button>
          </div>
          </form>
          <br/>
        </Box>

        <Display>
          {value ? pokemonData.map((data) => {
            return (
              <BlueScreenContent 
                key={data.name}
                PokeNumber={data.id}
                PokeName={data.name}
                PokeType={data.type}
                imageUrl={data.URL}
              />
            )
          }) : <> </>}
            {value ? <></> : 
            <BlueScreenContent 
              PokeName={datas.name}
              PokeNumber={datas.id}
              PokeType={datas.types[0].type.name}
              imageUrl={datas.sprites.front_default}
            />}         
        </Display>

      </Content>
        <h6>Samuel Rodigues © MIT</h6>
    </WrapperContent>
  )
}

export default PokedexBack