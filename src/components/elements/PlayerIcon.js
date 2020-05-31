import React, { Component } from 'react';



class PlayerIcon extends Component {
    render = () => {
        return (
            
            <svg width={"56"}  viewBox="0 0 380 503" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d)">
                    <path d="M347.764 201.188L73.284 13.28C60.608 4.596 47.836 0 37.22 0C16.696 0 4 16.472 4 44.044V450.168C4 477.708 16.68 494.148 37.156 494.148C47.788 494.148 60.356 489.548 73.06 480.84L347.668 292.936C365.328 280.832 375.108 264.544 375.108 247.052C375.112 229.572 365.444 213.288 347.764 201.188Z" fill="white" />
                </g>
                <defs>
                    <filter id="filter0_d" x="0" y="0" width="379.108" height="502.148" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                    </filter>
                </defs>
            </svg>

        );
    }
}


export default PlayerIcon;