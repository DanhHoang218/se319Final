import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

function info() {
    return (
        <html>
            <head>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
                <meta name="description" content=""></meta>
                <meta name="author" content=""></meta>
                <link rel="icon" href="../../../../favicon.ico"></link>

                <title>Info</title>

                <link href="../../../../dist/css/bootstrap.min.css" rel="stylesheet"></link>


                <link href="https://fonts.googleapis.com/css?family=Playfair&#43;Display:700,900&amp;display=swap" rel="stylesheet"></link>


                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-
alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-
GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous"></link>
                <link href="jumbotron.css" rel="stylesheet"></link>

            </head>
            <body>
                <main role="main">

                    <div class="jumbotron">
                        <div class="container">
                            <h1 class="display-3">MEET THE TEAM</h1>
                            <p>Meet the team behind this website.</p>
                        </div>
                    </div>



                    <div class="container">
                        <div class="row">
                            <div class="col-md-4">
                                <h2>Max Strater</h2>
                                <p>Iowa State University Student</p>
                                <p>Software Engineer</p>
                                <p>moomoo@iastate.edu</p>
                            </div>
                            <div class="col-md-4">
                                <h2>Danh Hoang</h2>
                                <p>Iowa State University Student</p>
                                <p>Software Engineer</p>
                                <p>dchoang@iastate.edu</p>
                            </div>
                            <div class="col-md-4">
                            </div>
                        </div>

                        <hr></hr>

                    </div>

                </main>
                <footer class="container">
                    <p>&copy; Company 2023</p>
                </footer>
                <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
                    integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
                    crossorigin="anonymous"></script>
            </body>
        </html>
    )
}

export default info