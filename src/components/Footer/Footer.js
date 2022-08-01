import React from 'react';
import './style.css';

const Footer = () => {
    return (
        <footer>
            <a className='icon' target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/">
                <i class="fab fa-linkedin"></i>
            </a>
            <a className='icon' target="_blank" rel="noopener noreferrer" href="https://github.com/micbrwn">
                <i class="fab fa-github"></i>
            </a>
            <a className='icon' target="_blank" rel="noopener noreferrer" href="mailto:test@gmail.com">
                <i class="fas fa-envelope"></i>
            </a>
            <a className='icon' target="_blank" rel="noopener noreferrer" href="./">
                <i class="fas fa-file-pdf"></i>
            </a>
            <a className='icon' target="_blank" rel="noopener noreferrer" href="tel:555-555-5555">
                <i class="fas fa-phone-volume"></i>
            </a><p className='note'>Made with <span><i class="fa-solid fa-heart"></i></span> and React</p>
        </footer>
    )
}

export default Footer