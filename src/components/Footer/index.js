import React from "react";
import "../Footer/footer.css";

const Footer = () => {
  return (
    <>
      <div>
        <div className="footerTop">
           <div className="company">
                <div>Company</div>
                <div>About Us</div>
                <div>News</div>
                <div>FAQ</div>
           </div>
           <div className="products">
             <div>Products</div>
             <div>Hardware</div>
             <div>Software</div>
           </div>
           <div className="solutions">
                <div>Solutions</div>
                <div>Business</div>
                <div>K12</div>
                <div>Higher Education</div>
           </div>
           <div className="support"> 
                <div>Support</div>
                <div>Case Study</div>
                <div>Download Center</div>
           </div>
           <div className="contact">
                <div>Contact</div>
                <div>Tel: +86-591-38202660</div>
                <div>Email: IQBoard@iqboard.net</div>
           </div>
           <div className="follow-us">
                <div>Please follow us</div>
                <div>Linked In</div>
                <div>FaceBook</div>
                <div>Twitter</div>
                <div>YTube</div>
           </div>
        </div>
        <div>
          
          <span className="flexRow copyright justifyCntr alignCntr">Company_Name, 2023@copyright</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
