import React, { useState } from "react";

const Random01 = ({ title }) => {
  const [filter, setFilter] = useState({ age: "", gender: "" });

  const peopleData = [
    { id: 1, name: "John", age: 25, gender: "male" },
    { id: 2, name: "Jane", age: 30, gender: "female" },
    { id: 3, name: "Bob", age: 28, gender: "male" },
    // ... other people
  ];

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilter((prevFilter) => ({ ...prevFilter, [name]: value }));
  };

  const filteredPeople = peopleData.filter((person) => {
    // Check if the person matches the selected age and gender filters
    const ageFilter = filter.age ? person.age === parseInt(filter.age) : true;
    const genderFilter = filter.gender ? person.gender === filter.gender : true;

    return ageFilter && genderFilter;
  });

  return (
    <div>
      <h1>{title}</h1>
      <h1>Filter People</h1>
      <label htmlFor="age">Filter by Age:</label>
      <input
        type="text"
        id="age"
        name="age"
        value={filter.age}
        onChange={handleFilterChange}
        placeholder="Enter age"
      />

      <label htmlFor="gender">Filter by Gender:</label>
      <select
        id="gender"
        name="gender"
        value={filter.gender}
        onChange={handleFilterChange}
      >
        <option value="">All Genders</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <div>
        <h2>Filtered People:</h2>
        <ul>
          {filteredPeople.map((person) => (
            <li key={person.id}>
              {person.name} (Age: {person.age}, Gender: {person.gender})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Random01;
