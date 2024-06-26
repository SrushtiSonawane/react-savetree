import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
  };

  const isValidEmail = (email) => {
    return email.includes("@");
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Contact Us</h2>
      <p style={paragraphStyle}>
        Have questions or suggestions? We'd love to hear from you! Feel free to
        contact us using the form below or reach out to us via email or phone.
      </p>
      <form style={formStyle} onSubmit={handleSubmit}>
        <div style={inputGroupStyle}>
          <label htmlFor="name" style={labelStyle}>Name:</label>
          <input type="text" id="name" name="name" style={inputStyle} value={formData.name} onChange={handleChange} />
        </div>
        <div style={inputGroupStyle}>
          <label htmlFor="email" style={labelStyle}>Email:</label>
          <input type="email" id="email" name="email" style={inputStyle} value={formData.email} onChange={handleChange} />
          {!isValidEmail(formData.email) && formData.email.trim() !== '' && <span style={{ color: 'red' }}>Invalid email format</span>}
        </div>
        <div style={inputGroupStyle}>
          <label htmlFor="message" style={labelStyle}>Message:</label>
          <textarea id="message" name="message" rows="4" style={{ ...inputStyle, height: "100px" }} value={formData.message} onChange={handleChange} />
        </div>
        <button type="submit" style={submitButtonStyle}>Send Message</button>
      </form>
    </div>
  );
};

const containerStyle = {
  margin: "auto",
  maxWidth: "600px",
  padding: "20px",
};

const titleStyle = {
  color: "#333",
  fontSize: "24px",
};

const paragraphStyle = {
  color: "#666",
  fontSize: "16px",
  marginBottom: "20px",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
};

const inputGroupStyle = {
  marginBottom: "20px",
};

const labelStyle = {
  marginBottom: "5px",
  fontSize: "18px",
};

const inputStyle = {
  padding: "10px",
  fontSize: "16px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  width: "100%", 
};

const submitButtonStyle = {
  backgroundColor: "#638889",
  color: "#fff",
  padding: "10px",
  fontSize: "18px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default ContactUs;
