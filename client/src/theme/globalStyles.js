import { injectGlobal } from 'styled-components'
import img from '../assets/background.jpg';

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Montserrat|Roboto|Satisfy');

  body {
    padding: 0;
    margin: 0;
    font-family: Roboto, sans-serif;
    background-image: url(${img});
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
  	background-size: cover;
    overflow-x: hidden;
  }

  .navbar-default {
    background: #274046;
    border: none;
  }

  .navbar-default .navbar-brand {
    color: #FDF5F2;
  }

  .navbar-default .navbar-nav>li>a {
    color: #FDF5F2;
  }

  .navbar-default .navbar-nav>li>a:hover {
      color: gray;
  }

  .modal-container .modal, .modal-container .modal-backdrop {
    position: absolute;
  }

  div.modal-header,
  div.modal-footer,
  div.modal-body {
    background: #274046;
    border: none;
    text-align: center;
    font-family: 'Satisfy', cursive;
    font-size: 2.3em;
    color: #FDF5F2;
  }

  button.close {
    color: white;
  }

  .Button-Control {
    background: black;
    color: white;
    width: 100px;
    height: 40px;
}

  .Button-Control:hover {
    background: gray;
  }

  button.close:hover {
    color: none;
    background: none;
  }

  h1 {
    font-size: 4.0em;
  }

  h2 {
    font-size: 3.0em;
    text-align: center;
    color: #4B655E;
  }

  form {
    padding-top: 40px;
  }

  input {
    background: darkgray;
    border: 1px solid black;
    width: 250px;
    color: #bc5347;
    opacity: 1;
  }

  ::placeholder {
    color: #274046;
    opacity: 1;
  }

  button.like,
  button.follow {
    border: none;
    background: transparent !important;
    margin-right: 15px;
    margin-left: 15px;
    color: #cdedc7;
  }

  button.follow:hover,
  button.like:hover {
    color: gray;
  }

  textarea {
    border: 2.5px double #bcdbb6;
    display: block;
    padding-top: 10px;
    margin: auto;
    width: 310px;
    text-align: center;
    background: #FDF5F2;
    opacity: 0.75;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    color: #bc5347;
  }

  .Button-Plus {
    border: none;
  }
`
