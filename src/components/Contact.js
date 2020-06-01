import React from 'react';
import styled from 'styled-components';
import catPic1 from '../photos/active glow set.jpg';
import catPic2 from '../photos/allproducts.jpg';
import {Link} from 'react-router-dom';
import Banner from './Banner';

export default function Contact() {
  return (
    <Sbc>
    <Banner/>
    <div className="paddit">
    <section class="section">
    <div class="container bring-to-front pt-0">
        <div class="row align-items-center gap-y">
            <div class="col-md-6">
                <div class="shadow bg-contrast p-4 rounded">
                    <form action="" method="" class="form form-contact" name="form-contact" data-response-message-animation="slide-in-up">
                        <div class="form-group"><label for="contact_email" class="bold mb-0">Email address</label> <small id="emailHelp" class="form-text text-secondary mt-0 mb-2 italic">We'll never share your email with anyone else.</small> <input type="email" name="Contact[email]" id="contact_email" class="form-control bg-contrast" placeholder="Valid Email" required/></div>
                        <div class="form-group"><label for="contact_email" class="bold">Subject</label> <input type="text" name="Contact[subject]" id="contact_subject" class="form-control bg-contrast" placeholder="Subject" required/></div>
                        <div class="form-group"><label for="contact_email" class="bold">Message</label> <textarea name="Contact[message]" id="contact_message" class="form-control bg-contrast" placeholder="What do you want to let us know?" rows="8" required></textarea></div>
                        <div class="form-group"><button id="contact-submit" data-loading-text="Sending..." name="submit" type="submit" class="btn btn-primary btn-rounded">Send Message</button></div>
                    </form>
                    <div class="response-message">
                        <div class="section-heading"><i class="fas fa-check font-lg"></i>
                            <p class="font-md m-0">Thank you!</p>
                            <p class="response">Your message has been send, we will contact you as soon as possible.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-5 ml-md-auto">
                <div class="section-heading">
                    <p class="small bold badge badge-info">Let's do business</p>
                    <h2>Contact Information</h2>
                </div>
                <div class="media"><i class="fas fa-map-marker font-l text-primary mr-3"></i>
                    <div class="media-body">5 Akpusi Celestine Crescent, Abuja,<span class="d-block">FCT Nigeria</span></div>
                </div>
                <div class="media my-4"><i class="fas fa-phone font-l text-primary mr-3"></i>
                    <div class="media-body"><span class="d-block"><a href="tel:+234-814-219-5884">(234) 814-219-5884</a></span> <span class="d-block"><a href="tel:+234-814-219-5884">(234) 814-219-5884</a></span></div>
                </div>
                
                <div className="col-md-8">
                            <nav className="d-flex  justify-content-around">
                                <a className="btn btn-light" href="https://wa.me/+2348142195884"><i className="fab fa-whatsapp"></i>
                                </a>
                                <a className="btn btn-light" href="https://facebook.com/etoileskincareng/shop"><i className="fab fa-facebook"></i>
                                </a>
                                <a className="btn btn-light" href="https://instagram.com/etoile_skincare"><i className="fab fa-instagram"></i>
                                </a>
                                <a className="btn btn-sm btn-light" href="mailto:etoilebeautynig@gmail.com"><i className="fas fa-envelope"></i>
                                </a>
                            </nav>
                        </div><hr class="my-4"/>
            </div>
        </div>
    </div>
</section>
</div>
    </Sbc>
  )
}

const Sbc = styled.div `



`