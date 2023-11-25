import React, { useState } from "react";
import "./App.css";
export default function App() {
  const defaultStudents = [
    "Mr. Aarav",
    "Ms. Diya",
    "Mr. Arjun",
    "Ms. Ananya",
    "Mr. Rohan",
    "Ms. Naina",
    "Mr. Aryan",
    "Ms. Saanvi",
    "Mr. Kabir",
    "Ms. Riya",
  ];
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  let rollno = 0;
  const dept = "IT";
  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
  const numCols = 8;
  const [students, setStudents] = useState([]);
  const [input, setInput] = useState("");
  const [status, setStatus] = useState([]);
  const [count, setCount] = useState(false);
  const [presentCount, setPresentCount] = useState(0);
  const [absentCount, setAbsentCount] = useState(0);
  const [subject, setSubject] = useState([]);
  const handle = function () {
    if (input === "") {
      alert("Enter input");
    } else {
      setStudents((prevStudents) => [...prevStudents, input]);
      setInput("");
      setStatus((prevStatus) => [...prevStatus, { green: false, red: false }]);
      setSubject((prevSubject) => [...prevSubject], {
        wd: false,
        cg: false,
        java: false,
        coa: false,
        wdl: false,
      });
    }
  };
  function handleGreen(index) {
    setPresentCount(presentCount + 1);
    setStatus((prevStatus) => {
      const newStatus = [...prevStatus];
      newStatus[index] = { green: true, red: false };
      return newStatus;
    });
  }
  function handleRed(index) {
    setAbsentCount(absentCount + 1);
    setStatus((prevStatus) => {
      const newStatus = [...prevStatus];
      newStatus[index] = { green: false, red: true };
      return newStatus;
    });
  }
  function getRandomBlood(index) {
    return bloodGroups[index % bloodGroups.length];
  }
  function getDay() {
    switch (currentDate.getDay()) {
      case 0:
        return "Sunday";
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";
      default:
        return "";
    }
  }
  function getSex(name) {
    if (name.toLowerCase().includes("mr.")) {
      return "Male";
    } else if (name.toLowerCase().includes("ms.")) {
      return "Female";
    } else {
      return "unKnown";
    }
  }
  function handleWD(index) {
    setSubject((prevSubject) => {
      const newSubject = [...prevSubject];
      newSubject[index] = {
        wd: true,
        cg: false,
        java: false,
        coa: false,
        wdl: false,
      };
      return newSubject;
    });
  }
  function handleCG(index) {
    setSubject((prevSubject) => {
      const newSubject = [...prevSubject];
      newSubject[index] = {
        wd: false,
        cg: true,
        java: false,
        coa: false,
        wdl: false,
      };
      return newSubject;
    });
  }
  function handleJAVA(index) {
    setSubject((prevSubject) => {
      const newSubject = [...prevSubject];
      newSubject[index] = {
        wd: false,
        cg: false,
        java: true,
        coa: false,
        wdl: false,
      };
      return newSubject;
    });
  }
  function handleCOA(index) {
    setSubject((prevSubject) => {
      const newSubject = [...prevSubject];
      newSubject[index] = {
        wd: false,
        cg: false,
        java: false,
        coa: true,
        wdl: false,
      };
      return newSubject;
    });
  }
  function handleWDL(index) {
    setSubject((prevSubject) => {
      const newSubject = [...prevSubject];
      newSubject[index] = {
        wd: false,
        cg: false,
        java: false,
        coa: false,
        wdl: true,
      };
      return newSubject;
    });
  }
  return (
    <div className="App">
      <h1>UNIVERSITY OF MADRAS</h1>
      <h1>
        STUDENT DIGITAL ATTENDANCE ({year}-{year + 4})
      </h1>
      <h4>DEPARTMENT : {dept}</h4>
      <div className="dynamic">
        <input
          type="text"
          placeholder="Mr. / Ms. Student Name"
          onChange={(e) => {
            setInput(e.target.value);
          }}
          value={input}
        />
        <button onClick={() => handle()} id="addBtn">
          Add
        </button>
      </div>
      <table style={{ border: "none" }}>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Gender</th>
            <th>Subject</th>
            <th>Status</th>
            <th>Date</th>
            <th>Day</th>
            <th>Roll No</th>
            <th>Blood Group</th>
            <th
              style={{
                marginRight: "1rem",
                background: "none",
                border: "none",
              }}
            ></th>
          </tr>
        </thead>
        <tbody>
          {defaultStudents.sort().map((value, index) => {
            const temp = rollno + index;
            return (
              <tr key={index}>
                <td>{value.replace(/^(Mr.|Ms.)/, "")}</td>
                <td>{getSex(value)}</td>
                <td
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    borderTop: "0",
                    borderRight: "0",
                    borderLeft: "0",
                  }}
                >
                  <button
                    onClick={() => handleWD(index)}
                    style={{
                      background: subject[index]?.wd ? "green" : "white",
                    }}
                  >
                    Web Development
                  </button>
                  <span>&nbsp;&nbsp;</span>
                  <button
                    onClick={() => handleCG(index)}
                    style={{
                      background: subject[index]?.cg ? "green" : "white",
                    }}
                  >
                    Computer Graphics
                  </button>
                  <span>&nbsp;&nbsp;</span>
                  <button
                    onClick={() => handleJAVA(index)}
                    style={{
                      background: subject[index]?.java ? "green" : "white",
                    }}
                  >
                    Java
                  </button>
                  <span>&nbsp;&nbsp;</span>
                  <button
                    onClick={() => handleCOA(index)}
                    style={{
                      background: subject[index]?.coa ? "green" : "white",
                    }}
                  >
                    Computer Organization and Architecture
                  </button>
                  <span>&nbsp;&nbsp;</span>
                  <button
                    onClick={() => handleWDL(index)}
                    style={{
                      background: subject[index]?.wdl ? "green" : "white",
                    }}
                  >
                    Web Development Laboratory
                  </button>
                  <span>&nbsp;&nbsp;</span>
                </td>
                <td>
                  <button
                    onClick={() => handleGreen(index)}
                    style={{
                      background: status[index]?.green ? "green" : "white",
                      marginBottom: "1rem",
                    }}
                  >
                    Present
                  </button>
                  <span>&nbsp;&nbsp;</span>
                  <button
                    onClick={() => handleRed(index)}
                    style={{ background: status[index]?.red ? "red" : "white" }}
                  >
                    Absent
                  </button>
                </td>
                <td>{currentDate.toLocaleDateString()}</td>
                <td>{getDay()}</td>
                <td>{year + dept + temp}</td>
                <td>{getRandomBlood(index)}</td>
              </tr>
            );
          })}
          {students.sort().map((value, index) => {
            const temp = rollno + index + defaultStudents.length;
            return (
              <tr key={index}>
                <td>{value.replace(/^(Mr.|Ms.)/, "")}</td>
                <td>{getSex(value)}</td>
                <td
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    borderTop: "0",
                    borderRight: "0",
                    borderLeft: "0",
                  }}
                >
                  <button
                    onClick={() => handleWD(index)}
                    style={{
                      background: subject[index]?.wd ? "green" : "white",
                    }}
                  >
                    Web Development
                  </button>
                  <span>&nbsp;&nbsp;</span>
                  <button
                    onClick={() => handleCG(index)}
                    style={{
                      background: subject[index]?.cg ? "green" : "white",
                    }}
                  >
                    Computer Graphics
                  </button>
                  <span>&nbsp;&nbsp;</span>
                  <button
                    onClick={() => handleJAVA(index)}
                    style={{
                      background: subject[index]?.java ? "green" : "white",
                    }}
                  >
                    Java
                  </button>
                  <span>&nbsp;&nbsp;</span>
                  <button
                    onClick={() => handleCOA(index)}
                    style={{
                      background: subject[index]?.coa ? "green" : "white",
                    }}
                  >
                    Computer Organization and Architecture
                  </button>
                  <span>&nbsp;&nbsp;</span>
                  <button
                    onClick={() => handleWDL(index)}
                    style={{
                      background: subject[index]?.wdl ? "green" : "white",
                    }}
                  >
                    Web Development Laboratory
                  </button>
                  <span>&nbsp;&nbsp;</span>
                </td>
                <td>
                  <button
                    onClick={() => handleGreen(index + defaultStudents.length)}
                    style={{
                      background: status[index + defaultStudents.length]?.green
                        ? "green"
                        : "white",
                      marginBottom: "1rem",
                    }}
                  >
                    Present
                  </button>
                  <span>&nbsp;&nbsp;</span>
                  <button
                    onClick={() => handleRed(index + defaultStudents.length)}
                    style={{
                      background: status[index + defaultStudents.length]?.red
                        ? "red"
                        : "white",
                    }}
                  >
                    Absent
                  </button>
                </td>
                <td>{currentDate.toLocaleDateString()}</td>
                <td>{getDay()}</td>
                <td>{year + dept + temp}</td>
                <td>{getRandomBlood(index)}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td
              colSpan={numCols}
              onClick={() => {
                setCount(true);
              }}
              style={{ background: "grey", color: "white", borderTop: "0" }}
            >
              Count
            </td>
          </tr>
        </tfoot>
      </table>
      {count && (
        <div className="countStyle">
          <h4>
            Total Strength should be :{" "}
            {defaultStudents.length + students.length}
          </h4>
          <h4>Total Present Count : {presentCount}</h4>
          <h4>Total Absent Count : {absentCount}</h4>
        </div>
      )}
    </div>
  );
}
