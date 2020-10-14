import React, { FormEvent, useEffect, useState } from 'react';

import { WrapperContent, Content, HeaderContent, Box, Search, Types, Info, Icon, IconInfo } from './styles';

import Button from '../Button'
import PokeballIcon from '../../assets/svg/pokeball.svg'
import Display from '../Display';
import Axios from 'axios';
import BlueScreenContent from '../BlueScreenContext';
import InfosContainer from '../InfosContainer'

import SearchIcon from '../../assets/svg/search-outline.svg'

import InfoIcon from '../../assets/svg/help-circle-outline.svg'
import typeValidation from '../APIvalidation/typeValidation';

interface ISpokemon {
  dataBase: {
    name: string,
    id: number,
    sprites: {
      front_default: string
    }
    types: []
  }
}

interface ISdata {
  name: string
  URL: string
  type: any
  id: number
  abilities: any
  atributes: any
}

const PokedexBack: React.FC = () => {

  const [pokemonData, setPokemonData] = useState<ISpokemon[]>([])
  const [pokemonName, setPokemonName] = useState('Show All')
  const [value, setVaule] = useState(false)

  const [abilities, setAbilities] = useState<ISdata[]>([])

  const showAll = async () => {
    const all = await Axios.get('https://pokeapi.co/api/v2/pokemon?limit=200&offset=1')
    all.data.results.map( async(data: any) => {
      try {
        const allInfos = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${data.name}/`)
      
        const dataBase = allInfos.data
      
          setPokemonData(pokemonData => [
            ...pokemonData,
            {dataBase}
        ])
      }
      catch(err) {
        console.log()
      }        
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
        
    setPokemonData([])
    
    const result = await typeValidation(reWrited)
    if (result.includes(true)) {

      const res = await Axios.get(`https://pokeapi.co/api/v2/type/${reWrited}/`)
      res.data.pokemon.map( async (data: any) => {

        try {
          const forEachPokemon = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${data.pokemon.name}/`)
          const dataBase = forEachPokemon.data
          
          setPokemonData( pokemonData => [
            ...pokemonData, 
            {dataBase}
          ])

        } catch (err) {
          console.log()
        }
        

      })

    }

    else {

      const res = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${reWrited}/`)
      const dataBase = res.data
      setPokemonData([
        {dataBase}
      ])

    }
    
  }
  
  const handleClick = async (named: string) => {
    setVaule(!value)
    const res = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${named}/`)
    
      const index = res.data.id
      const image = res.data.sprites.front_default
      const name = res.data.name
      const type = res.data.types
      const abilities = res.data.abilities
      const atributes = res.data.stats


    setAbilities([
      {id: index, URL: image, name: name, type: type, abilities, atributes}
    ])
  }

  const [icon, setIcon] = useState(false)
  return (
    <WrapperContent>
      {value ? 
      <InfosContainer>
        <div>
          <header>
            <h2 onClick={() => {setVaule(false); setIcon(false)}}>x</h2><h3> Pokemon Atributes </h3>
          </header>
          <main> 
            <h1>
              {abilities.map((data) => {
                return (
                  <>
                    <h6>
                      {data.name.toUpperCase()}
                    </h6>
                    <Icon src={data.URL} alt=""/>
                    <IconInfo 
                      src={InfoIcon}
                      onMouseEnter={() => {setIcon(true)}}
                      onMouseOut={() => {setIcon(false)}}

                    />
                    #{data.id}
                    <p>Abilities</p><br/>

                    {data.abilities.map((abilities: any) => {
                      return (
                        <h5>
                          {abilities.ability.name}
                        </h5>
                      )
                    })}
                    <p>Types</p><br/>
                    {data.type.map((types: any) => {
                        return (
                          <h5 style={{background: `gray`}}>
                            {types.type.name}
                          </h5>
                        )
                    })}
                    {icon ? <Info>
                      {data.atributes.map((stats: any) => {
                        return (
                          <>
                            <p>
                              {stats.stat.name.toUpperCase([0])}{': '}
                              {stats.base_stat}
                            </p>
                          </>
                        )
                      })}
                    </Info> : <></>}
                  </>
                )
              })}
            </h1>
          </main>
        </div>
      </InfosContainer> : <> </>}
      <Content>
        
        <HeaderContent>
          <img src={PokeballIcon} alt="Pokeball"/>
          <h6>Pokedex 0.0.2v</h6>
        </HeaderContent>

        <Box>
          <form onSubmit={handleSearch}>
            <h1>You can search <span>Name, Type or Show All</span> to see 200 pokemons</h1>
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
                onClick={async () => handleClick(data.dataBase.name)}
                PokeNumber={data.dataBase.id}
                PokeName={data.dataBase.name}
                imageUrl={data.dataBase.sprites.front_default}
              >
                {data.dataBase.types.map((types: any) => {
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