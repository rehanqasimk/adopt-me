import { useState } from "react";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
const arrayAnimals = ANIMALS.map((animal) => (
  <option key={animal} value={animal}>
    {animal}
  </option>
));
console.log(arrayAnimals);

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, updateAnimal] = useState("");

  console.log("Hello");
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            placeholder="Location"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              updateAnimal(e.target.value);
            }}
          >
            <option />
            {/* {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))} */}
            {/* [ <option></option>,<option value="bird">bird</option>,
            <option value="cat">cat</option>,<option value="dog">dog</option>,
            <option value="rabbit">rabbit</option>,
            <option value="reptile">reptile</option>] */}
            {arrayAnimals}
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
