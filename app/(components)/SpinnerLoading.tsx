import React from 'react'

export default function SpinnerLoading() {
    return (
        <div className="container">
            <div className="d-flex justify-content-center align-items-center py-3 pb-5"style={{backgroundColor: 'transparent', color:'white'}}>
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
        </div>
        
    )
}
