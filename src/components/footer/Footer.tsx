import React from "react";
import "./footer.css"; 

const flags = [
  { country: "Belgium", flag: "https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Belgium.svg" },
  { country: "France", flag: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg" },
  { country: "Spain", flag: "https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg" },
  { country: "Italy", flag: "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg" },
  { country: "Russia", flag: "https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg" },
  { country: "Japan", flag: "https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg" },
  { country: "Ukraine", flag: "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg" },
  { country: "USA", flag: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" },
];

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__info">
        <div className="footer__links">
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contacts</a></li>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Application</a></li>
          </ul>
        </div>
        <div className="footer__links">
          <ul>
            <li><a href="#">About delivery</a></li>
            <li><a href="#">Payment methods</a></li>
            <li><a href="#">Originality of products</a></li>
            <li><a href="#">Exchange and return</a></li>
          </ul>
        </div>
        <div className="footer__links">
          <ul>
            <li><a href="#">Articles</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Beauty Club</a></li>
          </ul>
        </div>
        <div className="footer__contact">
          <p>+998 712 050 578</p>
          <p>You can <a href="#">write us a letter</a></p>
          <p>Daily from 7:55 to 20:05</p>
          <p><a href="#">Callback</a></p>
        </div>
      </div>
      <div className="footer__flags">
        {flags.map((flag, index) => (
          <img 
            key={index} 
            src={flag.flag} 
            alt={flag.country} 
            className="footer__flag" 
            title={flag.country}
            style={{ width: "30px", height: "20px", margin: '0 5px' }} 
          />
        ))}
      </div>
      <div className="footer__bottom">
        <p>MAKEUP™. BEAUTY WITHOUT LIMITS</p>
        <p>© MAKEUP 2021-2024</p>
      </div>
    </footer>
  );
};

export default Footer;