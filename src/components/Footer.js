import React from 'react'
import "../styles/Footer.css";
import InstagramIcon from '@mui/icons-material/Instagram'
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsappIcon from '@mui/icons-material/WhatsApp'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

function Footer() {
        return (
                <div className='footer'>
                        <div className='socialMedia'>
                                <GitHubIcon /><LinkedInIcon /><WhatsappIcon /><InstagramIcon />
                        </div>
                        <p>&copy; 2023 parthagrawalpizza.com</p>
                </div>
        )
}

export default Footer