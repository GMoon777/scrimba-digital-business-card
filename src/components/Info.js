import React from "react"
import headShot from '../assets/headShot.png'
import emailIcon from '../assets/EmailIcon.png'
import linkedInIcon from '../assets/LinkedInIcon.png'

export default function Info() {
    
    return (
          
    <div>
     
        <info>
        
            <img 
            src={headShot}
            className="imageStyle"
            alt="Gabriel Moon"/>
        
            <nameText>Gabriel Moon</nameText>
            <devText>Trainee Developer</devText>
             <emailText>ourtor.com</emailText>
            
            <buttonsContainer>
            
            <emailButton> 
              <img 
            src={emailIcon}
            className="emailIconStyle"
            alt="Email"/>
            <emailIconText>Email</emailIconText>
            </emailButton>
            
            <linkedInButton>
                <img 
            src={linkedInIcon}
            className="emailIconStyle"
            alt="LinkedIn"/>
            <linkedInIconText>LinkedIn</linkedInIconText>
            
            </linkedInButton>            
            </buttonsContainer>
    </info>
     
        </div>
    )
}