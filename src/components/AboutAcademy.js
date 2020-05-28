import React from 'react';
import banner from '../photos/IMG-1.jpg';

export default function AboutAcademy () {
    return (
        <section className="mt-n5">
                <div className="container">
                    <div className="row gap-y mx-auto">
                        <h4 className="text-title">About the Instructor </h4>
                        <div className="col-12 d-md-flex">
                            <div className="col-12 col-md-5 d-flex flex-md-row">
                                <div>
                                <img id="instructor-img-2" src={banner} alt=""/>
                                </div>
                                <div className="ml-3 pl-3 my-auto">
                                    <p className="text-title mb-0">Esther C. Ojogwu</p>
                                    <p>CEO - Etoile Beauty Nigeria</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-7 text-contrast cert-header rounded pb-3">
                                <p className="lead pt-3 bold">Etoile Beauty Academy</p>
                                <p>Etoile Beauty Academy is a reputable online natural skin care school in Nigeria commited to empowering female skin care enthusiats and enterpreneurs to create their boutique natural skin care brands that meet international beauty standards using naturally sourced safe ingredients.</p>
                            </div>
                        </div>
                    </div>
                </div>   <hr/>
              </section>
    )
}