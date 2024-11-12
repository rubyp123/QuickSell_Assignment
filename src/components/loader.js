import React from 'react';

function Loader({ fullscreen = true }) {
    return (
        <div
            style={{
                height: fullscreen ? 'calc(100vh - 60px)' : '100%',
                width: '100%',
                display: 'grid',
                placeItems: 'center',
                backgroundColor: fullscreen ? 'rgba(255, 255, 255, 0.8)' : 'transparent',
            }}
        >
            <div
                style={{
                    width: '40px',
                    height: '40px',
                    border: '5px solid #e0e0e0',
                    borderTop: '5px solid #3498db',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite',
                }}
            ></div>

            <style>
                {`
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                `}
            </style>
        </div>
    );
}

export default Loader;
