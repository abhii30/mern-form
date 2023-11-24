import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    grade: "",
    dob: "",
    motherName: "",
    fatherName: "",
    motherEducation: "",
    fatherEducation: "",
    siblings: "",
    studentId: "",
    religion: "",
    caste: "",
    category: "",
    location: "",
    school: "",
    city: "",
    district: "",
    state: "",
    practiceDistance: "",
    finalRun: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/form");
      setFormData(response.data);
      console.log("Data fetched:", response.data);
    } catch (err) {
      console.error(err);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/form", formData);
      console.log("Form data submitted:", formData);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      {/* {JSON.stringify(formData)} */}
      <form onSubmit={handleSubmit} className="form-field">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label>Grade:</label>
        <input
          type="text"
          name="grade"
          value={formData.grade}
          onChange={handleChange}
          required
        />
        <label>Date of Birth:</label>
        <input
          type="text"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
        />
        <label>Mother Name:</label>
        <input
          type="text"
          name="motherName"
          value={formData.motherName}
          onChange={handleChange}
          required
        />
        <label>Father Name:</label>
        <input
          type="text"
          name="fatherName"
          value={formData.fatherName}
          onChange={handleChange}
          required
        />
        <label>Mother Education:</label>
        <input
          type="text"
          name="motherEducation"
          value={formData.motherEducation}
          onChange={handleChange}
          required
        />
        <label>Father Education:</label>
        <input
          type="text"
          name="fatherEducation"
          value={formData.fatherEducation}
          onChange={handleChange}
          required
        />
        <label>Siblings:</label>
        <input
          type="text"
          name="siblings"
          value={formData.siblings}
          onChange={handleChange}
          required
        />
        <label>Student Id:</label>
        <input
          type="text"
          name="studentId"
          value={formData.studentId}
          onChange={handleChange}
          required
        />
        <label>Religion:</label>
        <input
          type="text"
          name="religion"
          value={formData.religion}
          onChange={handleChange}
          required
        />
        <label>Caste:</label>
        <input
          type="text"
          name="caste"
          value={formData.caste}
          onChange={handleChange}
          required
        />
        <label>Category:</label>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        />
        <label>Location:</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        />
        <label>School:</label>
        <input
          type="text"
          name="school"
          value={formData.school}
          onChange={handleChange}
          required
        />
        <label>City:</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
        />
        <label>District:</label>
        <input
          type="text"
          name="district"
          value={formData.district}
          onChange={handleChange}
          required
        />
        <label>State:</label>
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
          required
        />
        <label>Practice Distance:</label>
        <input
          type="text"
          name="practiceDistance"
          value={formData.practiceDistance}
          onChange={handleChange}
          required
        />
        <label>Final Run:</label>
        <input
          type="text"
          name="finalRun"
          value={formData.finalRun}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit</button>
      </form>
      <button
        onClick={() => {
          setFormData({
            name: "Sai",
            grade: "10",
            dob: "10/10/2000",
            motherName: "Sai",
            fatherName: "Sai",
            motherEducation: "10",
            fatherEducation: "10",
            siblings: "2",
            studentId: "123",
            religion: "Hindu",
            caste: "OC",
            category: "General",
            location: "Hyderabad",
            school: "Narayana",
            city: "Hyderabad",
            district: "Hyderabad",
            state: "Telangana",
            practiceDistance: "10",
            finalRun: "10",
          });
        }}
      >
        Get Data
      </button>
    </div>
  );
}

export default App;
