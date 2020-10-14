import Axios from "axios"

async function typeValidation(input: string) {

  const res = await Axios.get(`https://pokeapi.co/api/v2/type/`)
  const results = res.data.results.map((data: any) => {

    if (data.name === input) {
      return true
    }

  })

  return results
} 

export default typeValidation