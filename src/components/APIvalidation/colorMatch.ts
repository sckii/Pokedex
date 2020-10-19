const colors = [
  {
    "type": "normal",
    "color": "#75515B"
  },
  {
    "type": "fighting",
    "color": "#994023"
  },
  {
    "type": "flying",
    "color": "#4C667B"
  },
  {
    "type": "poison",
    "color": "#5C2D8A"
  },
  {
    "type": "ground",
    "color": "#A9702C"
  },
  {
    "type": "rock",
    "color": "#48180B"
  },
  {
    "type": "bug",
    "color": "#1B4C27"
  },
  {
    "type": "ghost",
    "color": "#33336B"
  },
  {
    "type": "steel",
    "color": "#5F756D"
  },
  {
    "type": "fire",
    "color": "#B01C25"
  },
  {
    "type": "water",
    "color": "#2E65EB"
  },
  {
    "type": "grass",
    "color": "#18783F"
  },
  {
    "type": "electric",
    "color": "#E4E329"
  },
  {
    "type": "psychic",
    "color": "#9C3279"
  },
  {
    "type": "ice",
    "color": "#86D2F5"
  },
  {
    "type": "dragon",
    "color": "#7038F8"
  },
  {
    "type": "dark",
    "color": "#020403"
  },
  {
    "type": "fairy",
    "color": "#971944"
  },
  {
    "type": "unknown",
    "color": "#020403"
  },
  {
    "type": "shadow",
    "color": "#5F756D"
  }
]

function colorMatch(input: string) {
  const color = colors.map((data: any) => {
    if(input === data.type) {
      const color = data.color
      return color
    }
  })
  return color
}


export default colorMatch