import React from 'react';
export const Loading = () => {
    return(
        <div className="d-flex col-12 justify-content-center mt-3">
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <h4 className='mt-1 ms-1 text-warning'>Loading . . .</h4>
        </div>
    );
};