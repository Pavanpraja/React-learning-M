import React, { useEffect, useState } from "react";

const AccdEV = () => {
  const [filterdata, setFilterData] = useState([]);
  const [selectGender, setSelectGender] = useState();
  const [mdata, setMdata] = useState([]);

  const jsonData = async () => {
    try {
      const fetchData = await fetch("./mfdata.json");
      const jsonData = await fetchData.json();
      setFilterData(jsonData);
    } catch (error) {
      console.error("Error", error);
    }
  };
  
  const selectValue = (e) => {
    var optionVale = e.target.value;
    console.log(optionVale);
    setSelectGender(optionVale);
    
    var filterD =
      filterdata.peoples &&
      filterdata.peoples.filter((item) => item.gender === selectGender)
      console.log(filterD)
      setMdata(filterD)
      
  }

  useEffect(() => {
    jsonData();
  }, []);


  return (
    <>
      <div className="AccdEV">
        <select
          name="gender"
          id="gender"
          value={selectGender}
          onChange={selectValue}
        >
          <option value="all" id="all">All Friends</option>
          <option value="female">Male</option>
          <option value="male">Female</option>
        </select>
      </div>
      <div className="MFdata">
      {/* mdata.map */}
      {mdata && mdata.map((item, index) => {
        return <div className="data" key={index}>{item.name}</div>
      })}
      </div>
    </>
  );
};

export default AccdEV;
