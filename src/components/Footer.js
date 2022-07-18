import React from "react"
import twitterIcon from '../assets/TwitterIcon.png'
import facebookIcon from '../assets/FacebookIcon.png'
import instagramIcon from '../assets/InstagramIcon.png'
import gitHubIcon from '../assets/GitHubIcon.png'
export default function Footer() {
    
    return (
      <footer>
      
            <img 
            src={twitterIcon}
            className="iconStyle"
            alt="Twitter"/>
            
            <img 
            src={facebookIcon}
            className="iconStyle"
            alt="Facebook"/>
            
            <img 
            src={instagramIcon}
            className="iconStyle"
            alt="Instagram"/>
            
            <img 
            src={gitHubIcon}
            className="iconStyle"
            alt="GitHub"/>
        
        
       </footer>
    )
}