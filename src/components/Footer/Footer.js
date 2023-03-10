import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'
import GithubIcon from '@mui/icons-material/GitHub'
import '../../static/footer.scss'

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <a href="https://www.instagram.com/im__jspark/" target="_blank"><InstagramIcon /></a>
            <a href="https://github.com/jjpark51" target={'_blank'}><GithubIcon /></a> 
        </div>
        <p>&copy; 2023 Jinsuk Park </p>
    </div>
  )
}

export default Footer
