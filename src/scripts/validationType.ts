import Axios from 'axios'

interface T {
  names: string
}

class validationType {

  async validate(name: string) {
    const res = await Axios.get(`https://pokeapi.co/api/v2/type/`)
    res.data.results.map((datas: any) => {    
      if(name === datas.name) {
        console.log(datas.name)
        return datas.name
      }

      return false
    })
     
  }
}

export default validationType