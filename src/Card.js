import React from 'react';
import './Card.css';


export default function Card() {
    return (
        <div className="App">
            <div className='box'>
                <div className='image'>
                </div>
                <div className='intro'>
                    <h5>Raunak Kumar</h5>
                    <p>Developer</p>
                    <a href='#'><button> <i className="fa fa-envelope"></i><span>Email</span></button></a>
                </div>
                <div className='content'>
                    About

                    <p>Lore m ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    Interests
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <footer>
                        <a href="#" className="fa fa-facebook"></a>
                        <a href="#" className="fa fa-twitter"></a>
                        <a href="#" className="fa fa-google"></a>
                        <a href="#" className="fa fa-linkedin"></a>
                    </footer>
                </div>

            </div>
        </div>
    );
}