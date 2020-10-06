import React, { FormEvent, useState } from 'react';

import { WrapperContent, Content, HeaderContent, Box, Search, Filter } from './styles';
import Button from '../Button'
import PokeballIcon from '../../assets/svg/pokeball.svg'
import Display from '../Display';
import Axios from 'axios';
import BlueScreenContent from '../BlueScreenContext';



const PokedexBack: React.FC = () => {

  const [datas, setDatas] = useState({
    name:'charmander', 
    game_indices: {
      9: {
        game_index: '4'
      }
    }, 
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

  const [pokemonName, setPokemonName] = useState('Charmander')
  const [pokemonType, setPokemonType] = useState('Fire')


  async function handleSearch(e: FormEvent) {
    e.preventDefault()

    const response = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`)
    setDatas(response.data)
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
          <div>
            <Search 
              value={pokemonName}
              onChange={(e) => {setPokemonName(e.target.value)}}
            />
            <Button 
              change="submit"
            />
          </div>
          </form>
          
        </Box>
          <Display>
            <BlueScreenContent 
              PokeName={datas.name}
              PokeNumber={datas.game_indices[9].game_index}
              PokeType={datas.types[0].type.name}
              imageUrl={datas.sprites.front_default}
            />
          </Display>
      </Content>
        <h6>Samuel Rodigues © MIT</h6>
    </WrapperContent>
  )
}

export default PokedexBack