export default class SwapiService {
  
    _apiBase = 'https://swapi.co/api';
    _imgBase = `https://starwars-visualguide.com/assets/img`;
  
    async getResource (url) {
        const response = await fetch(`${this._apiBase}${url}`);
        return await response.json();
    }

    getAllPeople = async () => {
        const res = await this.getResource('/people/');
        return res.results.map(this._transformPerson);
    }
  
    getPerson = async (id) => {
        const person = await this.getResource(`/people/${id}`); 
        return this._transformPerson(person);
    }
  
    getAllPlanets = async () => {
        const res = await this.getResource('/planets/');
        return res.results.map(this._transformPlanet);
    }
  
    getPlanet = async (id) => {
        const planet = await this.getResource(`/planets/${id}`);
        return this._transformPlanet(planet);
    }
  
    getAllStarships = async () => {
        const res = await this.getResource('/starships/');
        return res.results.map(this._transformStarship);
    }
  
    getStarship = async (id) => {
      const starship = await this.getResource(`/starships/${id}`);
      return this._transformStarship(starship);
    }

    getPersonImage = (id) => {
        console.log(`${this._imgBase}/characters/${id}.jpg`);
        return `${this._imgBase}/characters/${id}.jpg`;
    }

    getPlanetImage = (id) => {
        console.log(`${this._imgBase}/planets/${id}.jpg`);
        return `${this._imgBase}/planets/${id}.jpg`;
    }

    getStarshipImage = (id) => {
        return `${this._imgBase}/starships/${id}.jpg`;
    }

    getId = (item) => {
        const regExp = /\/([0-9]*)\/$/;
        return item.url.match(regExp)[1];
    }

    _transformPlanet = (planet) => {
        return {
            id: this.getId(planet),
            img: this.getPlanetImage(this.getId(planet)),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter,
        }
    }

    _transformPerson = (person) => {
        return {
            id: this.getId(person),
            img: this.getPersonImage(this.getId(person)),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            mass: person.mass,
            eyeColor: person.eye_color,
            
        }    
    }
    
    _transformStarship = (starship) => {
        return {
            id: this.getId(starship),
            img: this.getStarshipImage(this.getId(starship)),
            name: starship.name,
            model: starship.model,
            length: starship.length,
            passengers: starship.passengers,
            crew: starship.crew,
            costInCredits: starship.cost_in_credits,
            
        }    
    }    
}
