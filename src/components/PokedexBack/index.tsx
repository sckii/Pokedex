import React, { FormEvent, useEffect, useState } from 'react';

import { WrapperContent, Content, HeaderContent, Box, Search, Types } from './styles';

import Button from '../Button'
import PokeballIcon from '../../assets/svg/pokeball.svg'
import Display from '../Display';
import Axios from 'axios';
import BlueScreenContent from '../BlueScreenContext';

import SearchIcon from '../../assets/svg/search-outline.svg'

import db from '../../data/db.json'

interface ISpokemon {
  name: string
  URL: string
  type: any
  color: string
  id: number
}

const PokedexBack: React.FC = () => {

  const [pokemonData, setPokemonData] = useState<ISpokemon[]>([])
  const [pokemonName, setPokemonName] = useState('Show All')
  
  const showAll = async () => {
    const all = await Axios.get('https://pokeapi.co/api/v2/pokemon?limit=100&offset=1')
    all.data.results.map( async(data: any) => {
      const allInfos = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${data.name}/`)
    
      db.map(datas => {
        allInfos.data.types.map((infos: any) => {
          const index = allInfos.data.id
          const image = allInfos.data.sprites.front_default
          const name = allInfos.data.name
          const type = allInfos.data.types
          
          if(infos.type.name === datas.type) {
            setPokemonData(pokemonData => [
              ...pokemonData,
              {id: index, URL: image, name: name, type: type, color: datas.color}
            ])
          }
        })  
      })
      
      
    })

  }

  useEffect(() => {
    showAll()
  }, [])

  const handleSearch = async (e: FormEvent) => {
    e.preventDefault()

    if(pokemonName === 'show all') {
      return showAll()
    }
    const reWrited = pokemonName.toLowerCase()
    
    const res = await Axios.get(`https://pokeapi.co/api/v2/type/`)
    
    setPokemonData([])
    
    res.data.results.map( async(datas: any) => {    
      if(datas.name === reWrited) {
        
        const resType = await Axios.get(`https://pokeapi.co/api/v2/type/${datas.name}/`)

        resType.data.pokemon.map( async(datas: any) => {
          const id = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${datas.pokemon.name}/`)
          
          db.map(datas => {
            id.data.types.map((infos: any) => {
              const image = id.data.sprites.front_default
              const index = id.data.id
              const name = id.data.name
              const type = id.data.types
              
              
              if(infos.type.name === datas.type) {
                setPokemonData(pokemonData => [
                  ...pokemonData,
                  {id: index, URL: image, name: name, type: type, color: datas.color}
                ])
              }
            })  
          })

        })
      } else {
          Axios.get(`https://pokeapi.co/api/v2/pokemon/${reWrited}/`)
            .then((response) => {
              
              const index = response.data.id
              const image = response.data.sprites.front_default
              const name = response.data.name
              const type = response.data.types
              
              db.map((datas) => {
                type.map((infos: any) => {
                  if(infos.type.name === datas.type) {
                    setPokemonData([
                      {id: index, URL: image, name: name, type: type, color: datas.color}
                    ])
                  }
                })
              })
              

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
          {pokemonData.map((data) => {
            
            return (
              <BlueScreenContent 
                key={data.name}
                PokeNumber={data.id}
                PokeName={data.name}
                imageUrl={data.URL}
              >
                {data.type.map((types: any) => {                 
                  return (
                    <Types key={types.type.name} style={{background: data.color}}>
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