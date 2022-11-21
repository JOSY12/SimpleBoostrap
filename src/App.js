/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "./App.css";
var incremental = 0;
function App() {
  const [employees, setemployees] = useState([
    {
      Name: "Josmer",
      Lastname: "Bertel",
      Salary: 5000,
    },
  ]);
  const [employe, setemploye] = useState({
    id: 0,
    Name: "",
    Lastname: "",
    Salary: 1000,
  });
  const [errores, seterrores] = useState({ Name: "", Lastname: "" });

  function validate(input) {
    let Errors = {};
    if (!input.Name) {
      Errors.Name = "Name is required";
    } else if (input.Name.length <= 2) {
      Errors.Name = "Name is too short";
    }
    if (
      /\d|\\w|[~!@#$%{^&*()_:.=';[}|"`?>><]/gm.test(input.Name) ||
      !/[a-z]/gm.test(input.Name)
    ) {
      Errors.Name = "Name is invalid";
    }

    if (!input.Lastname) {
      Errors.Lastname = "Lastname is required";
    } else if (input.Lastname.length <= 3) {
      Errors.Lastname = "Lastname is too short";
    }

    if (
      /\d|\\w|[~!@#$%{^&*()_:.=';[}|"`?>><]/gm.test(input.Lastname) ||
      !/[a-z]/gm.test(input.Lastname)
    ) {
      Errors.Lastname = "Lastname is invalid";
    }
    return Errors;
  }

  function addemployee(e) {
    e.preventDefault();
    setemployees([...employees, employe]);
    incremental++;
    setemploye({ ...employe, id: incremental });
  }

  function setchanges(e) {
    const property = e.target.name;
    const value = e.target.value;

    setemploye({ ...employe, [property]: value });

    seterrores(validate({ ...employe, [property]: value }));
  }

  function deleteworker(id) {
    const filtered = employees.filter((e) => e.id !== id);

    setemployees(filtered);
  }

  useEffect(() => {}, [employees]);

  return (
    <div className="App-header container-fluid pt-5   ">
      <div className=" container separador  ">
        <div className="container  border border-primary p-5 border-5  bg-dark  rounded ">
          <form onSubmit={addemployee} className="row  ">
            <label className="  form-label   m-0 mt-2">Name*</label>
            <input
              onChange={setchanges}
              name="Name"
              value={employe.Name}
              type="text"
              className="form-control"
            ></input>
            {errores.Name && (
              <p className="text-danger fs-5  ">{errores.Name}</p>
            )}
            <label className="  form-label pt-5 m-0 mt-2">Last name*</label>
            <input
              onChange={setchanges}
              name="Lastname"
              value={employe.Lastname}
              type="text"
              className="form-control  "
            ></input>
            {errores.Lastname && (
              <p className="text-danger  fs-5">{errores.Lastname}</p>
            )}
            <label className="col form-label pt-5 m-0 mt-2">salary</label>
            <input
              onChange={setchanges}
              name="Salary"
              value={employe.Salary}
              type="number"
              className="form-control"
            ></input>
            <hr></hr>
            <button
              type="submit"
              disabled={errores.Name || errores.Lastname}
              className="btn btn-primary fw-bold"
            >
              Add Employe
            </button>
          </form>
        </div>

        <div className=" container   border rounded border-3 mt-5 bg-dark">
          <div className=" row   ">
            <label className="text-start ">Employees</label>
            <label className="col text-start ">Name:</label>
            <label className="col text-start ">Last name:</label>
            <label className="col text-start"> Salary:</label>
            <label className="col text-start ">Options</label>
            <hr></hr>
          </div>

          <div className="row   ">
            {employees.sort().map((e, i) => {
              return (
                <ul
                  key={i + e.Name + e.Lastname}
                  className="row text    m-0 p-0 "
                >
                  <li key={e.Name + i} className=" col   text-start text-break">
                    {e.Name}
                  </li>
                  <li
                    key={e.Lastname + i + 1}
                    className=" col  text-start text-break"
                  >
                    {e.Lastname}
                  </li>
                  <li
                    key={e.Salary + i}
                    className=" col   text-start text-break"
                  >
                    {e.Salary}$
                  </li>

                  <div key={e.Salary + i + 2} className="col  ">
                    <ul
                      key={e.Salary + i + 12}
                      className="row  
                     m-0 p-0   text"
                    >
                      <li
                        key={i + 1}
                        className="row col-sm-6 col-md-6  col-lg-6 m-0 p-0  "
                      >
                        <button key={i + 12} className=" btn btn-info">
                          Edit
                        </button>
                      </li>
                      <li
                        key={i + 3}
                        className="row  col-sm-6 col-md-6 col-lg-6 m-0 p-0  "
                      >
                        <button
                          key={i + 13}
                          onClick={() => {
                            deleteworker(e.id);
                          }}
                          className=" btn btn-danger"
                        >
                          X
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
