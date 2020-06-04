import React from 'react';
import {Link} from 'react-router-dom';

function Breadcrumb ({current}) {
        return (
            <div className="bbn no-decor-links mt-n1 pt-0">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb small bg-dark">
                            <li className="breadcrumb-item"><Link to="/">Shop</Link></li>
                            <li className="breadcrumb-item"><Link to="/Academy">Academy</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">{current}</li>
                        </ol>
                    </nav>
                </div>
        );
    }

export default Breadcrumb;