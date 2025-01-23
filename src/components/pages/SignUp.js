import React, { useState } from 'react';
import axios from 'axios';
import '../../App.css';

const FRAPPE_URL = "https://ups-uat.sowaanerp.com";  // Frappe server URL

// Replace with actual API Key & Secret from Frappe user settings
const API_KEY = "a660048fb475f8f";  
const API_SECRET = "15044e3bdf6d010";  

export default function SignUp() {
  const [formData, setFormData] = useState({
    lead_name: "",
    email_id: "",
    mobile_no: "",
    status: "Open",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    createLead();
  };

  // Create Lead function with API Key authentication
  const createLead = async () => {
    try {
      const response = await axios.post(
        `${FRAPPE_URL}/api/resource/Lead`,
        { doctype: "Lead", ...formData },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `token ${API_KEY}:${API_SECRET}`,  // API Key Authentication
          },
        }
      );

      console.log("✅ Lead created successfully:", response.data);
    } catch (error) {
      console.error("❌ Failed to create lead:", error.response?.data || error.message);
    }
  };

  return (
    <div className='sign-up'>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name:</label>
          <input
            type="text"
            name="lead_name"
            value={formData.lead_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email_id"
            value={formData.email_id}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Mobile Number:</label>
          <input
            type="text"
            name="mobile_no"
            value={formData.mobile_no}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Get Quote</button>
      </form>
    </div>
  );
}
