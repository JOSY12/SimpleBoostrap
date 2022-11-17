/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [employees, setemployees] = useState([
    {
      Name: "Josmer",
      Lastname: "Bertel",
      Salary: 5000,
    },
  ]);
  const [employe, setemploye] = useState({
    Name: "",
    Lastname: "",
    Salary: 1000,
  });

  function addemployee(e) {
    e.preventDefault();
    employees.push(employe);
  }

  function setchanges(e) {
    const property = e.target.name;
    const value = e.target.value;
    setemploye({ ...employe, [property]: value });
  }

  function deleteworker(Name) {
    const filtered = employees.filter((e) => e.Name !== Name);

    setemployees(filtered);
  }
  useEffect(() => {}, [employees, employe]);
  return (
    <div className="App-header ">
      <div className=" ">
        <div className="container border border-primary p-5 border-5  bg-dark  rounded ">
          <form onSubmit={addemployee} className="row ">
            <label className="form-label p-0 m-0 mt-2">Name</label>
            <input
              onChange={setchanges}
              name="Name"
              value={employe.Name}
              type="text"
              className="form-control"
            ></input>
            <label className="col form-label p-0 m-0 mt-2">Last name</label>
            <input
              onChange={setchanges}
              name="Lastname"
              value={employe.Lastname}
              type="text"
              className="form-control"
            ></input>
            <label className="col form-label p-0 m-0 mt-2">salary</label>
            <input
              onChange={setchanges}
              name="Salary"
              value={employe.Salary}
              type="number"
              className="form-control"
            ></input>
            <hr></hr>
            <button type="submit" className="btn btn-primary fw-bold">
              Add Employe
            </button>
          </form>
        </div>

        <div className=" container border rounded border-3 mt-5 bg-dark">
          <div className=" row container ">
            <label className="text-start ">Employees</label>
            <label className="col text-start ">Name:</label>
            <label className="col text-start ">Last name:</label>
            <label className="col text-start"> Salary:</label>
            <label className="col text-start ">Options</label>
            <hr></hr>
          </div>

          <div className=" row container ">
            {employees.map((e, i) => {
              return (
                <ul className="row text  container m-0 p-0 ">
                  <li key={e.Name} className=" col   text-start text-break">
                    {e.Name}
                  </li>
                  <li key={e.Lastname} className=" col  text-start text-break">
                    {e.Lastname}
                  </li>
                  <li key={e.Salary} className=" col   text-start text-break">
                    {e.Salary}$
                  </li>

                  <div className="col  ">
                    <ul
                      className="row  
                     m-0 p-0   text"
                    >
                      <li className="row col-sm-6 col-md-6  col-lg-6 m-0 p-0  ">
                        <button className=" btn btn-info">Edit</button>
                      </li>
                      <li className="row  col-sm-6 col-md-6 col-lg-6 m-0 p-0  ">
                        <button
                          onClick={() => {
                            deleteworker(e.Name);
                          }}
                          className=" btn btn-danger"
                        >
                          delete
                        </button>
                      </li>
                    </ul>
                  </div>
                  <hr></hr>
                </ul>
              );
            })}

            {/* <ul className="col text  mt-2 ">
              {employees.map((e, i) => {
                return (
                  <li key={i} className="text-start text-break ">
                    {e.Lastname}
                  </li>
                );
              })}
            </ul>
            <ul className="col text   mt-2  ">
              {employees.map((e, i) => {
                return (
                  <li key={i} className="text-start text-break">
                    {e.Salary}$
                  </li>
                );
              })}
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
