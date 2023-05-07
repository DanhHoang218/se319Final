import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './navbar.css'
import './product.css'
import reportWebVitals from './reportWebVitals';
import SwitchPageButton from './switchPageButton';
import photo1 from './images/photo1.png'
import photo2 from './images/photo2.png'
import altar from './images/altar.JPG'
import groupPhoto from './images/groupPhoto.png'
import groupPhotoTwo from './images/groupPhoto2.JPG'
import logoNotext from './images/logo_noText.png'
import logo from './images/logo.png'
function App() {
    return (
        <html>
            <head>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
                <meta name="description" content=""></meta>
                <meta name="author" content=""></meta>
                <link rel="icon" href="../../../../favicon.ico"></link>
                <title>Product example for Bootstrap</title>
                <link href="../../../../dist/css/bootstrap.min.css" rel="stylesheet"></link>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous"></link>
                <link href="product.css" rel="stylesheet"></link>
            </head>
            <body>
                <nav class="site-header sticky-top py-1">
                    <div class="container d-flex flex-column flex-md-row justify-content-between">
                        <img src={logoNotext} alt='logoNoText' id='logoNoText'></img>
                        <button class="btn btn-outline-secondary">
                            <a href="https://www.stuorg.iastate.edu/alexito">Al Éxito</a>
                        </button>
                        <button class="btn btn-outline-secondary">
                            <SwitchPageButton to="/faq" label="FAQ" />
                        </button>
                        <button class="btn btn-outline-secondary">
                            <SwitchPageButton to="/info" label="About" />
                        </button>

                    </div>
                </nav>
                <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                    <div class="col-md-5 p-lg-5 mx-auto my-5">
                        <h1 class="display-4 font-weight-normal">Al Éxito ISU</h1>
                        <p class="lead font-weight-normal">And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple's marketing pages.</p>
                        <a class="btn btn-outline-secondary" href="https://www.stuorg.iastate.edu/alexito/auth/login?REDIR=/alexito/join">Sign up</a>
                    </div>
                    <div class="product-device box-shadow d-none d-md-block"></div>
                    <div class="product-device product-device-2 box-shadow d-none d-md-block"></div>
                </div>
                <div class="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
                    <div class="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                        <div class="my-3 py-3">
                            <h2 class="display-5">Teamwork</h2>
                            <p class="lead">Become a part of something bigger</p>
                        </div>
                        <img src={groupPhoto} alt='groupPhoto' id='groupPhoto'></img>
                    </div>
                    <div class="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                        <div class="my-3 p-3">
                            <h2 class="display-5">Leadership</h2>
                            <p class="lead">Become a leader</p>
                        </div>
                        <img src={photo2} alt='photo2' id='photo2'></img>
                    </div>
                </div>
                <div class="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
                    <div class="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                        <div class="my-3 py-3">
                            <h2 class="display-5">Connections</h2>
                            <p class="lead">Meet new people</p>
                        </div>
                        <img src={photo1} alt='photo1' id='photo1'></img>
                    </div>
                    <div class="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                        <div class="my-3 p-3">
                            <h2 class="display-5">Culture</h2>
                            <p class="lead">Celebrate your culture</p>
                        </div>

                        <img src={altar} alt='altar' id='altar'></img>
                    </div>
                </div>
                <div class="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
                    <div class="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                        <div class="my-3 py-3">
                            <h2 class="display-5">College Preperation</h2>
                            <p class="lead">Learn to be prepared</p>
                        </div>
                        <img src={groupPhotoTwo} alt='groupPhoto2' id='groupPhoto2'></img>
                    </div>
                    <div class="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">

                    </div>
                </div>
                <footer class="container py-5">
                    <div class="row">
                        <div class="col-12 col-md">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="d-block mb-2"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg>
                            <small class="d-block mb-3 text-muted">&copy; 2017-2018</small>
                        </div>
                        <div class="col-6 col-md">
                            <h5>Features</h5>
                            <ul class="list-unstyled text-small">
                                <li><a class="text-muted" href="#">Cool stuff</a></li>
                                <li><a class="text-muted" href="#">Random feature</a></li>
                                <li><a class="text-muted" href="#">Team feature</a></li>
                                <li><a class="text-muted" href="#">Stuff for developers</a></li>
                                <li><a class="text-muted" href="#">Another one</a></li>
                                <li><a class="text-muted" href="#">Last time</a></li>
                            </ul>
                        </div>
                        <div class="col-6 col-md">
                            <h5>Resources</h5>
                            <ul class="list-unstyled text-small">
                                <li><a class="text-muted" href="#">Resource</a></li>
                                <li><a class="text-muted" href="#">Resource name</a></li>
                                <li><a class="text-muted" href="#">Another resource</a></li>
                                <li><a class="text-muted" href="#">Final resource</a></li>
                            </ul>
                        </div>
                        <div class="col-6 col-md">
                            <h5>Resources</h5>
                            <ul class="list-unstyled text-small">
                                <li><a class="text-muted" href="#">Business</a></li>
                                <li><a class="text-muted" href="#">Education</a></li>
                                <li><a class="text-muted" href="#">Government</a></li>
                                <li><a class="text-muted" href="#">Gaming</a></li>
                            </ul>
                        </div>
                        <div class="col-6 col-md">
                            <h5>About</h5>
                            <ul class="list-unstyled text-small">
                                <li><a class="text-muted" href="#">Team</a></li>
                                <li><a class="text-muted" href="#">Locations</a></li>
                                <li><a class="text-muted" href="#">Privacy</a></li>
                                <li><a class="text-muted" href="#">Terms</a></li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </body>
        </html>
    );
}

export default App