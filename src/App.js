import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Logoutmodel from "./components/Logoutmodel";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import Createteacher from "./components/Createteacher";
import Createstudent from "./components/Createstudent";
import AddStudent from "./components/Addstudent";
import Addteacher from "./components/Addteacher";
import Editteacher from "./components/Editteacher";
import Editstudent from "./components/Editstudent";

function App() {
  const [edittea, setEdittea] = useState([]);

  const [editstu, setEditstu] = useState([]);

  const [style, setStyle] = useState(
    "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
  );

  const Changestyle = () => {
    if (
      style === "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
    ) {
      setStyle(
        "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled"
      );
    } else {
      setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");
    }
  };
  const Changestyle1 = () => {
    if (
      style === "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
    ) {
      setStyle(
        "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled1"
      );
    } else {
      setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");
    }
  };

  const [student, addStudent] = useState([
    {
      id: 1,
      name: "Boobathi",
      fathername: "Thillan",
      class: "I",
      address: "Dindigul",
      teacher: "Balu",
    },
  ]);

  const [teacher, addTeacher] = useState([
    {
      id: 1,
      name: "Balu",
      master: "Tamil",
      address: "Chinnalapatti",
    },
  ]);

  return (
    <div id="page-top">
      {/* <!-- Page Wrapper --> */}
      <Router>
        <div id="wrapper" className="">
          <Sidebar style={style} Changestyle={Changestyle} />

          {/* <!-- Content Wrapper --> */}
          <div id="content-wrapper" className="d-flex flex-column">
            {/* <!-- Main Content -->*/}
            <div id="content" className="#0dcaf0 text-center">
              <Navbar Changestyle1={Changestyle1} />

              <Routes>
                <Route
                  path="/"
                  element={<Dashboard student={student} teacher={teacher} />}
                />
                <Route
                  path="/Student"
                  element={
                    <Createstudent
                      student={student}
                      addStudent={addStudent}
                      editstu={editstu}
                      setEditstu={setEditstu}
                    />
                  }
                />
                <Route
                  path="/Student/Add"
                  element={
                    <AddStudent
                      student={student}
                      addStudent={addStudent}
                      teacher={teacher}
                    />
                  }
                />
                <Route
                  path="/Student/Edit"
                  element={
                    <Editstudent
                      student={student}
                      addStudent={addStudent}
                      editstu={editstu}
                      setEditstu={setEditstu}
                      teacher={teacher}
                    />
                  }
                />

                <Route
                  path="/Teacher"
                  element={
                    <Createteacher
                      teacher={teacher}
                      addTeacher={addTeacher}
                      edittea={edittea}
                      setEdittea={setEdittea}
                    />
                  }
                />
                <Route path="/Student" element={<Createstudent />} />

                <Route
                  path="/Teacher/Add"
                  element={
                    <Addteacher teacher={teacher} addTeacher={addTeacher} />
                  }
                />
                <Route
                  path="/Teacher/Edit"
                  element={
                    <Editteacher
                      teacher={teacher}
                      addTeacher={addTeacher}
                      edittea={edittea}
                      setEdittea={setEdittea}
                    />
                  }
                />
              </Routes>
            </div>
            {/* <!-- Footer Content -->*/}
            <Footer />
          </div>
        </div>
      </Router>

      <Logoutmodel />
    </div>
  );
}

export default App;
