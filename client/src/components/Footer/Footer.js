import React from 'react';

import './Footer.css';

const quotes = [
    "A rock flung is promised to the ground.",
    "I will bless you with this knowledge; I will curse you with the truth",
    "You are not the one walking the path, you are the path. The one walking it is time.",
    "There is beauty in truth.",
    "People should be allowed to be.",
    "Is your every solution to a problem longing for the last one?",
    "Unwise to say, she realizes, but her reason is lagging far behind her mouth. - Nuawa, Winterglass, Benjanun Sriduangkaew",
    "test 0"
];

let quote = quotes[Math.floor(Math.random() * (quotes.length-1))];

const Footer = () => {
    return (
        <div className="footer">
            <p className="footerQuote">{quote}</p>
        </div>
    )
}

export default Footer;