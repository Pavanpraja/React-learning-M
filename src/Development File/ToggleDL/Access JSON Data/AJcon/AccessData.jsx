import React, { useEffect, useState } from "react";

const AccessData = () => {
  const [userData, setUserData] = useState([]);
  const [filterMale, setFilterMale] = useState([]);
  const [filterFemale, setFilterFemale] = useState([]);
  const [titleM, setTitleM] = useState();
  const [titleF, setTitleF] = useState();
  const [hidden, setHidden] = useState("block")
  const fetchData = async () => {
    try {
      const response = await fetch("./mfdata.json");
      const getData = await response.json();
      // console.log(getData.peoples[1].gender)
      
      setUserData(getData) ? setHidden("none") : setHidden("block")
      document.getElementById("maledata").style.display = "none";
    } catch (error) {
      console.error("Error Occurs at the data fetching time sorry ", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const selectGender = (e) => {
    const value = e.target.value;
    if (value === "Male") {
      var filterMdata = userData.peoples.filter(
        (item1) => item1.gender === "male"
      );
      setFilterMale(filterMdata);
      setTitleM(value);
    }
    if (value === "Female") {
      var filterFMdata = userData.peoples.filter(
        (item2) => item2.gender === "female"
      );
      setFilterFemale(filterFMdata);
      setTitleF(value);
    }
  };
  return (
    <div className="userData">
      <select name="userData" id="userData" onClick={selectGender}>
        <option value="Both">Both</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <table>
        <thead>
          <tr>
            <td id="alldata">
              <ul style={{display: hidden}}>
                <h1>All Students</h1>
                {userData.peoples
                  ? userData.peoples.map((data, index) => {
                      return <li key={index}>{data.name}</li>;
                    })
                  : null}
              </ul>
            </td>
            <td style={{display: hidden}}>
              <ul>
                <h1>{titleM}</h1>
                {filterMale.map((item, index) => {
                  return (
                    <>
                      <li key={index}>{item.name}</li>
                    </>
                  );
                })}
              </ul>
            </td>
            <td>
              <ul id="femaledata">
                <h1>{titleF}</h1>
                {filterFemale.map((item, index) => {
                  return <li key={index}>{item.name}</li>;
                })}
              </ul>
            </td>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default AccessData;
