import fetch from "node-fetch";

async function getPeople(){
  const response = await fetch(`https://swapi.dev/api/people`)
  const people = await response.json()
  return people.results
}

export { getPeople }