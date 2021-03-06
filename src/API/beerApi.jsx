import axios from "axios";

const service = axios.create({
  baseURL: "https://ih-beers-api2.herokuapp.com/beers",
});

export default {
  service,

  getBeers() {
    return service.get("/");
  },
  getOne(id) {
    return service.get("/" + id);
  },

  getRandom() {
    return service.get("/random");
  },

  CreateOne(data) {
    return service.post("/new", data);
  },

  SearchBeer(query) {
    return service.get(`/search?q=${query}`);
  },
};

// import axios from "axios";

// class pokemonAPI {
//   constructor() {
//     this.service = axios.create({
//       baseURL: "https://ironhack-pokeapi.herokuapp.com/pokemon",
//     });
//   }

//   getPokemons() {
//     return this.service.get("/");
//   }
// }

// export default pokemonAPI;
