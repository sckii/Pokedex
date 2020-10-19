import React, { FormEvent, useEffect, useState } from 'react';

import { ClickedNow, WrapperContent, Content, HeaderContent, Box, Search, Types, Info, Icon, IconInfo } from './styles';

import Button from '../Button'
import PokeballIcon from '../../assets/svg/pokeball.svg'
import Display from '../Display';
import Axios from 'axios';
import BlueScreenContent from '../BlueScreenContext';
import InfosContainer from '../InfosContainer'

import SearchIcon from '../../assets/svg/search-outline.svg'

import InfoIcon from '../../assets/svg/help-circle-outline.svg'
import typeValidation from '../APIvalidation/typeValidation';
import colorMatch from '../APIvalidation/colorMatch';

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
  dataBase: {
    abilities: [
      {
        ability: {
          name: string
        }
      }
    ]
    name: string
    id: number
    sprites: {
      front_default: string
    }
    types: []
    stats: [
      {
        base_stat: number
        stat: {
          name: string
        }
      }
    ]
  }
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
    const dataBase = res.data

    setAbilities([
      {dataBase}
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
            <ClickedNow>
              {abilities.map((data) => {
                return (
                  <>
                    <h6>
                      {data.dataBase.name.toUpperCase()}{` `}
                      #{data.dataBase.id}
                    </h6>
                    <Icon src={data.dataBase.sprites.front_default} alt=""/>
                    <IconInfo 
                      src={InfoIcon}
                      onMouseEnter={() => {setIcon(true)}}
                      onMouseOut={() => {setIcon(false)}}

                    />
                    <p>Abilities</p><br/>

                    {data.dataBase.abilities.map((abilities: any) => {
                      return (
                        <h5>
                          {abilities.ability.name}
                        </h5>
                      )
                    })}
                    <p>Types</p><br/>
                    {data.dataBase.types.map( (types: any) => {
                        const colorSet = colorMatch(types.type.name)
                        function isString(obj: any){
                          if (typeof obj === `string`) {
                            return true
                          }
                        } 
                        const filtred = colorSet.filter(isString)
                        return (
                          <h5 key={types.type.name + data.dataBase.id} style={{ background: filtred[0] }}>
                            {types.type.name}
                          </h5>
                        )
                    })}
                    {icon ? <Info>
                      {data.dataBase.stats.map((stats: any) => {
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
            </ClickedNow>
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
                key={data.dataBase.id}
                PokeNumber={data.dataBase.id}
                PokeName={data.dataBase.name}
                imageUrl={data.dataBase.sprites.front_default}
              >
                {data.dataBase.types.map((types: any) => {
                  const colorSet = colorMatch(types.type.name)
                  function isString(obj: any){
                    if (typeof obj === `string`) {
                      return true
                    }
                  } 
                  const filtred = colorSet.filter(isString)
                  return (
                    <Types key={types.type.name + data.dataBase.id} style={{background: filtred[0]}}>
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