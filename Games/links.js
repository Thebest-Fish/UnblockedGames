
/* Copyright Notice */

/*
Copyright © 2024 Anonymous. All rights reserved.

This website and its contents, including but not limited to HTML, CSS, JavaScript, text, images, and design, are the intellectual property of Anonymous.

Unauthorized use, reproduction, or distribution of any part of this website without prior written permission from the copyright holder is strictly prohibited.

If you wish to use any part of this website, please contact 96654@psdschools.org.
*/





:root {
       --container-background-color: #8B0000;
      --background-color: #ffcccc;
      --text-color: #660000;
      --selection-color-background: #660000;
      --selection-color: #ffcccc;
      --button-border-radius: 8px;
      --input-border-radius: 6px;
      --link-color: #9ee90;
      --scroll-bar-background: #bd45459a;
      --scroll-bar: #121212;
      --scroll-bar-hover: #bd45459a;
      --button: green;
     --text-box-color: #ffcccc; 
    }
    iframe {
      width: 100%;
      height: 500px;
      border: 1px solid #ccc;
     border-radius: 10px;
    }

 .theme-buttons {
            display: flex;
            justify-content: center;
            margin: 20px 0;
        }

        .theme-buttons button {
            margin: 0 10px;
            padding: 10px 20px;
            border: none;
            cursor: pointer;
            font-size: 16px;
            border-radius: 5px;
        }
  
  .dropdown {
      margin: 20px;
      padding: 10px;
      font-size: 1rem;
    }
  
  .button1 {
    padding: 12px 25px;
      background-color: var(--button-background-color);
      color: white;
      border: none;
      border-radius: var(--button-border-radius);
      cursor: pointer;
      font-size: 1.1rem;
      transition: transform 0.3s ease, background-color 0.3s ease;
  }


         /* Light Themes */
    [data-theme="red"] {
      --background-color: #ffcccc;
      --text-color: white;
      --selection-color-background: #660000;
      --selection-color: #ffcccc;
       --container-background-color: #8B0000;
      --hoverColor: 2px 2px 8px #FF0000;
      --text-box-color: #ffcccc; 
    }

    [data-theme="orange"] {
      --background-color: #ffe5cc;
      --text-color: white;
      --selection-color-background: #994c00;
       --selection-color: #ffe5cc;
       --container-background-color: #ff8c00;
      --hoverColor: 2px 2px 8px #ffc00;
      --text-box-color: #ffe5cc;
    }

    [data-theme="yellow"] {
      --background-color: #ffffcc;
      --text-color: white;
      --selection-color-background: #666600;
       --selection-color: #ffffcc;
       --container-background-color: #AA6C39;
      --hoverColor: 2px 2px 8px #AA6C39;
      --text-box-color: #ffffcc; 
    }

    [data-theme="green"] {
      --background-color: #ccffcc;
      --text-color: white;
      --selection-color-background: #006600;
       --selection-color: #ccffcc;
       --container-background-color: #06402B;
      --hoverColor: 2px 2px 8px #06402B;
      --text-box-color: #ccffcc;
    }

    [data-theme="blue"] {
      --background-color: #cce5ff;
      --text-color: white;
      --selection-color-background: #003366;
       --selection-color: #cce5ff;
       --container-background-color: #00008B;
      --hoverColor: 2px 2px 8px #00008B;
      --text-box-color: #cce5ff;
    }

    [data-theme="purple"] {
      --background-color: #e5ccff;
      --text-color: white;
      --selection-color-background: #4b0082;
       --selection-color: #e5ccff;
       --container-background-color: #301934;
            --hoverColor: 2px 2px 8px #301934;
        --text-box-color: #e5ccff;
    }

    [data-theme="brown"] {
      --background-color: #f2e6d9;
      --text-color: white;
      --selection-color-background: #663300;
       --selection-color: #f2e6d9;
       --container-background-color: #5C4033;
      --hoverColor: 2px 2px 8px #5C4033;
      --text-box-color: #f2e6d9;
    }

    /* Dark Themes */
    [data-theme="red-dark"] {
      --background-color: #4d0000;
      --text-color: white;
      --selection-color-background: #ffb3b3;
       --selection-color: #4d0000;
       --container-background-color: #1e1e1e;
       --hoverColor: 2px 2px 8px #1e1e1e;
              --text-box-color: #ffcccc; 


    }

    [data-theme="orange-dark"] {
      --background-color: #4c1a00;
      --text-color: white;
      --selection-color-background: #ffcc99;
       --selection-color: #4c1a00;
       --container-background-color: #1e1e1e;
       --hoverColor: 2px 2px 8px #1e1e1e;
              --text-box-color: #ffe5cc;

    }

    [data-theme="yellow-dark"] {
      --background-color: #4d4d00;
      --text-color: white;
      --selection-color-background: #ffff99;
       --selection-color: #4d4d00;
       --container-background-color: #1e1e1e;
       --hoverColor: 2px 2px 8px #1e1e1e;
    --text-box-color: #ffffcc; 
    }

    [data-theme="green-dark"] {
      --background-color: #003300;
      --text-color: white;
      --selection-color-background: #b3ffb3;
       --selection-color: #003300;
       --container-background-color: #1e1e1e;
       --hoverColor: 2px 2px 8px #1e1e1e;
     --text-box-color: #ccffcc;
    }

    [data-theme="blue-dark"] {
      --background-color: #001a4d;
      --text-color: white;
      --selection-color-background: #99ccff;
       --selection-color: #001a4d;
       --container-background-color: #1e1e1e;
       --hoverColor: 2px 2px 8px #1e1e1e;
     --text-box-color: #cce5ff;
    }

    [data-theme="purple-dark"] {
      --background-color: #2d004d;
      --text-color: white;
      --selection-color-background: #dab3ff;
       --selection-color: #2d004d;
       --container-background-color: #1e1e1e;
       --hoverColor: 2px 2px 8px #1e1e1e;
       --text-box-color: #e5ccff;
    }

    [data-theme="brown-dark"] {
      --background-color: #331a00;
      --text-color: white;
       --selection-color-background:  #e6ccb3;
       --selection-color: #331a00;
       --container-background-color: #1e1e1e;
       --hoverColor: 2px 2px 8px #1e1e1e;
        --text-box-color: #f2e6d9;
    }
  .theme-button, .dark-mode-toggle {
      margin: 5px;
      padding: 10px 20px;
      cursor: pointer;
      border: none;
      border-radius: 5px;
      background-color: #ddd;
      transition: background-color 0.3s ease;
    }

    .theme-button:hover, .dark-mode-toggle:hover {
      background-color: #bbb;
    }


    body {
      font-family: 'Work Sans', sans-serif;
      margin: 0;
      padding: 0;
      background-color: var(--background-color);
      color: var(--text-color);
      text-align: center;
      box-sizing: border-box;
      line-height: 1.6;
      transition: all 0.3s ease;
    }

    ::selection {
      background-color: var(--selection-color-background);
      color: var(--selection-color);
    }

    .container {
      max-width: 600px;
      margin: 100px auto;
      padding: 40px;
      background-color: var(--container-background-color);
      text-align: center;
      border-radius: 12px;
      transition: transform 0.3s ease;
    }

    .container:hover {
      transform: scale(1.05);
    }

    h2 {
      margin-bottom: 20px;
      font-size: 2.4rem;
      font-weight: 700;
      letter-spacing: 1px;
      transition: all 0.3s ease;
      color: var(--text-color);
    }

    .password-input {
      width: calc(100% - 20px);
      padding: 15px;
      margin-bottom: 30px;
      border: 1px solid #ccc;
      border-radius: var(--input-border-radius);
      background-color: var(--container-background-color);
      color: var(--text-box-color);
      font-size: 1rem;
      transition: all 0.3s ease-in-out;
    }

    .password-input:focus {
      border-color: var(--background-color);
      outline: none;
    }

    .button {
      padding: 12px 25px;
      background-color: var(--button-background-color);
      color: var(--text-color);
      border: none;
      border-radius: var(--button-border-radius);
      cursor: pointer;
      font-size: 1.1rem;
      transition: transform 0.3s ease, background-color 0.3s ease;
    }

    .button:hover {
      background-color: var(--button-hover-background-color);
      transform: scale(1.1);
    }

    .hidden {
      display: none;
    }

    .content {
      margin: 20px;
      padding: 20px;
      background-color: var(--container-background-color);
      border-radius: 12px;
      transition: opacity 0.5s ease;
    }

    .mode-toggle {
      margin: 20px;
      padding: 12px 20px;
      background-color: var(--button-background-color);
      border: none;
      border-radius: var(--button-border-radius);
      cursor: pointer;
      font-size: 1.1rem;
      color: var(--text-color);
      transition: background-color 0.3s ease, transform 0.3s ease;
    }

    .mode-toggle:hover {
      background-color: var(--button-hover-background-color);
      transform: scale(1.1);
    }
  
  .color {
    color: white;
      font-size: 40px;
      font-weight: bold;
  }

  .color2 {
    color: white;
    font-size: 15px;
  }

    nav ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      background-color: var(--background-color);
      transition: all 0.3s ease;
      border-radius: 10px;
    }

nav1 ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      background-color: var(--background-color);
      transition: all 0.3s ease;
      border-radius: 10px;
    }

    nav ul li {
      margin: 0;
      padding: 10px;
    }

nav1 ul li {
      margin: 0;
      padding: 10px;
    }

    nav ul li button {
      padding: 15px 25px;
      background: none;
      color: var(--text-color);
      border: 2px solid transparent;
      border-radius: 8px;
      cursor: pointer;
      font-size: 1.1rem;
      transition: all 0.3s ease;
    }

nav1 ul li button {
      padding: 15px 25px;
      background: none;
      color: var(--text-color);
      border: 2px solid transparent;
      border-radius: 8px;
      cursor: pointer;
      font-size: 1.1rem;
      transition: all 0.3s ease;
    }
    h1 {
      color: var(--text-color);
}

    nav ul li button:hover {
      background-color: var(--button-hover-background-color);
      transform: scale(1.05);
    }

nav1 ul li button:hover {
      background-color: var(--button-hover-background-color);
      transform: scale(1.05);
    }
/* Hide all sections by default */
section {
  display: none;
}

/* Show the active section */
section.active {
  display: block;
}




    @media (max-width: 768px) {
      .container {
        padding: 30px;
      }

      h2 {
        font-size: 2rem;
        color: var(--text-color);
      }

      .password-input, .button {
        font-size: 1rem;
      }

      .mode-toggle {
        padding: 10px 15px;
      }

      

       nav1 ul {
        flex-direction: column;
      }
      nav ul li {
        width: 100%;
      }
      
      nav1 ul li {
        width: 100%;
      }

      nav ul li button {
        width: 100%;
        padding: 15px 0;
      }
      
      nav1 ul li button {
        width: 100%;
        padding: 15px 0;
      }
    
      section1 {
            display: none;
        }
        .active1 {
            display: block;
        }
  a:link, a:visited {
  color: var(--link-color);
  background-color: transparent;
  text-decoration: underline;
  }

  a:hover {
  color: var(--link-color);
  background-color: transparent;
  text-decoration: underline;
    text-shadow: var(--hoverColor)
  }

  a:active {
  color: var(--link-color);
  background-color: transparent;
  text-decoration: underline;

  
    }
    
    
     ::-webkit-scrollbar {
      width: 12px; 
    }

    ::-webkit-scrollbar-track {
      background: var(--container-background-color); 
      border-radius: 10px; 
    }

    ::-webkit-scrollbar-thumb {
      background: var(--text-color); 
      border-radius: 10px; 
    }

    ::-webkit-scrollbar-thumb:hover {
      background: var(--background); 
    }
    
      .dropdown {
            position: relative;
            display: inline-block;
        }

        /* Dropdown button */
        .dropdown-btn {
            background-color: var(--button);
            color: white;
            padding: 10px 20px;
            font-size: 16px;
            border: none;
            cursor: pointer;
          border-radius: var(--input-border-radius);
          
        }

        /* Dropdown content (hidden by default) */
        .dropdown-content {
            display: none;
            position: absolute;
         
            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
            z-index: 1;
        }

        /* Dropdown links (buttons styled as dropdown options) */
        .dropdown-content button {
            background-color: white;
            color: black;
            padding: 12px 16px;
            border: none;
            text-align: left;
            width: 100%;
            cursor: pointer;
        }

        /* Show dropdown content on hover */
        .dropdown:hover .dropdown-content {
            display: block;
        }

        /* Change background color on hover */
        .dropdown-content button:hover {
            background-color: #ddd;
        }
