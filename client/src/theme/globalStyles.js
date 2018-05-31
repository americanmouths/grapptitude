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

  h1 {
    font-size: 4.5em;
  }
`
