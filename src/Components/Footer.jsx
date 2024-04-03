import React from "react";

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div>
        <h3>Contact Us</h3>
        <p>Email: contact@savethetrees.com</p>
        <p>Phone: 123-456-7890</p>
        <p>Address: 123 Green Street, Eco City, Treeville</p>
      </div>
      <div>
        <h3>Follow Us</h3>
        <p>Connect with us on social media:</p>
        <ul>
          <a href="https://www.facebook.com/savethetrees">Facebook</a>
          <a href="https://twitter.com/savethetrees">Twitter</a>
          <a href="https://www.instagram.com/savethetrees">Instagram</a>
        </ul>
      </div>
      <div>
    
        <p>Learn more about our mission to save the trees and protect the environment.</p>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: "#638889",
  color: "#fff",
  padding: "20px",
  textAlign: "center",
};

export default Footer;

