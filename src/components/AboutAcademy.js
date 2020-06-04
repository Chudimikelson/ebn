import React from 'react';
import banner from '../photos/IMG-1.jpg';

export default function AboutAcademy () {
    return (
        <section className="mt-n5">
                <div className="container">
                    <div className="row gap-y mx-auto">
                        <div className="col-12 col-md-6 text-center">
                            <h4 className="text-title">The Instructor </h4>
                            <img className="img-responsive mx-auto" id="instructor-img-2" src={banner} alt=""/>
                            <p className="text-title mt-3 mb-0">Esther C. Ojogwu</p>
                            <p>CEO - Etoile Beauty Nigeria</p>
                        </div>
                        <div className="col-12 col-md-6 cert-header rounded">
                            <h3 className="text-light pt-3 bold text-center">Etoile Beauty Academy</h3>
                            <p className="p-3 text-justify lead text-contrast">Etoile Beauty Academy is a reputable online natural skin care school in Nigeria commited to empowering female skin care enthusiats and enterpreneurs to create their boutique natural skin care brands that meet international beauty standards using naturally sourced safe ingredients.</p>
                        </div>
                    </div>
                </div>   <hr/>
              </section>
    )
}