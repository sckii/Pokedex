import React, { FormEvent, useEffect, useState } from 'react';

import { WrapperContent, Content, HeaderContent, Box, Search, Types } from './styles';

import Button from '../Button'
import PokeballIcon from '../../assets/svg/pokeball.svg'
import Display from '../Display';
import Axios from 'axios';
import BlueScreenContent from '../BlueScreenContext';

import SearchIcon from '../../assets/svg/search-outline.svg'

interface ISpokemon {
  name: string
  URL: string
  type: any
  id: number
}

const PokedexBack: React.FC = () => {

  const [pokemonData, setPokemonData] = useState<ISpokemon[]>([])
  const [pokemonName, setPokemonName] = useState('Show All')
  
  const showAll = async () => {
    const all = await Axios.get('https://pokeapi.co/api/v2/pokemon?limit=200&offset=1')
    all.data.results.map( async(data: any) => {
      const allInfos = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${data.name}/`)
    
      const index = allInfos.data.id
      const image = allInfos.data.sprites.front_default
      const name = allInfos.data.name
      const type = allInfos.data.types
    
        setPokemonData(pokemonData => [
          ...pokemonData,
          {id: index, URL: image, name: name, type: type}
        ])
                 
    })
  }


  useEffect(() => {
    showAll()
  }, [])

  const handleSearch = async (e: FormEvent) => {
    e.preventDefault()
    const reWrited = pokemonName.toLowerCase()

    if(reWrited === 'show all') {
      return showAll()
    }
    
    const res = await Axios.get(`https://pokeapi.co/api/v2/type/`)
    
    setPokemonData([])
    
    res.data.results.map( async(datas: any) => {    
      if(datas.name === reWrited) {
        
        const resType = await Axios.get(`https://pokeapi.co/api/v2/type/${datas.name}/`)

        resType.data.pokemon.map( async(datas: any) => {
          const id = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${datas.pokemon.name}/`)
          
          const image = id.data.sprites.front_default
          const index = id.data.id
          const name = id.data.name
          const type = id.data.types
          
          
          setPokemonData(pokemonData => [
            ...pokemonData,
            {id: index, URL: image, name: name, type: type}
          ])
        })
      } else {
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${reWrited}/`)
          .then((response) => {
            
            const index = response.data.id
            const image = response.data.sprites.front_default
            const name = response.data.name
            const type = response.data.types
            
            setPokemonData([
              {id: index, URL: image, name: name, type: type}
            ])
          })                       
          .catch(() => {console.log()})
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
            <h1>Search for pokemons (name or type) or (Show All) to see all 200 pokemons</h1>
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
          {pokemonData.map((data) => {
            
            return (
              <BlueScreenContent 
                PokeNumber={data.id}
                PokeName={data.name}
                imageUrl={data.URL}
              >
                {data.type.map((types: any) => {
                                
                  return (
                    <Types style={{background: `gray`}}>
                      {types.type.name}
                    </Types>
                  )
                })}

              </BlueScreenContent>
            )
          })}        
        </Display>

      </Content>
        <h6>Samuel Rodigues © MIT</h6>
    </WrapperContent>
  )
}

export default PokedexBack