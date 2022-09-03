import { getPeople } from "./StarWarsService.js"; 

async function main(){
  const starWarsPeople = await getPeople()
  
  for (const person of starWarsPeople) {
    console.log(person.name);
  }
  
  //Com Desestruturação
  const peopleNameHeight = starWarsPeople
    .map( (person) => {
      const { name, height } = person; 
      return { name, height }
    })
  
  //Sem desestruturação  
  const man = starWarsPeople
    .filter( person => person.gender == 'male')
    .map( person => {
      return { name: person.name, gender: person.gender }
    })
    
  console.log(peopleNameHeight);
  console.log(peopleNameHeight[0].name);
  console.log(man);
}

  

main()
