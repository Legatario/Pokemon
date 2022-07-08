export interface Pokemon {
  name: string;
  url: string;
  type: Type[];
  number: number;
}

enum Type {
  grass = 'grass',
  poison = 'poison',
  ice = 'ice',
  fire = 'fire',
  flying = 'flying',
  bug = 'bug',
  normal = 'normal',
  eletric ='eletric',
  ground = 'ground',
  fairy = 'fairy',
  water = 'water',
  fighting = 'fighting',
  psycgic = 'psycgic',
  rock = 'rock',
  ghost = 'ghost',
  dragon ='dragon'
}
