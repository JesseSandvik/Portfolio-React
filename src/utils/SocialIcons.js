import React from 'react';

function SocialIcons() {
    return (
        <div className="social">
            <a title="linkedin link" href="https://www.linkedin.com/in/jesse-sandvik-3b91b620a/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in icon"></i>
            </a>
            <a title="github link" href="https://github.com/JesseSandvik" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github icon"></i>
            </a>
            <a title="email link" href="mailto: sandvikjesse@gmail.com" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-at icon"></i>
            </a>
        </div>
    );
}

export default SocialIcons;