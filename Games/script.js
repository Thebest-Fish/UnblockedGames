
// Copyright Notice 

/*
Copyright © 2024 Anonymous. All rights reserved.

This website and its contents, including but not limited to HTML, CSS, JavaScript, text, images, and design, are the intellectual property of Anonymous.

Unauthorized use, reproduction, or distribution of any part of this website without prior written permission from the copyright holder is strictly prohibited.

If you wish to use any part of this website, please contact 96654@psdschools.org.
*/









  function toggleFullscreen() {
      const iframe = document.getElementById('myIframe');
      if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
      } else if (iframe.mozRequestFullScreen) { // Firefox
        iframe.mozRequestFullScreen();
      } else if (iframe.webkitRequestFullscreen) { // Chrome, Safari, and Opera
        iframe.webkitRequestFullscreen();
      } else if (iframe.msRequestFullscreen) { // IE/Edge
        iframe.msRequestFullscreen();
      }
    }
function checkPassword() {
      const password = document.getElementById('password').value;
      const correctPassword = atob('Z2FtZTEyMw==');
      if (password === correctPassword) {
        document.getElementById('passwordContainer').classList.add('hidden');
        document.getElementById('protectedContent').classList.remove('hidden');
      } else {
        window.location.href = "https://www.youtube.com/watch?v=5z9rzkz4Rv8";
        alert('Incorrect password!');
      }
    }

    document.addEventListener('keydown', function(event) {
            // Check if Ctrl+U is pressed
            if (event.ctrlKey && event.key === 'u') {
                event.preventDefault(); 
                alert('You thought you could get away with hacking');
            }
        });

    function showTab(tabName) {
      const sections = document.querySelectorAll('main section');
      sections.forEach(section => {
        section.classList.remove('active');
      });
      const activeSection = document.getElementById(tabName);
      activeSection.classList.add('active');
    }

       let currentTheme = "red";
    let isDarkMode = false;

    function switchTheme(theme) {
      currentTheme = theme + (isDarkMode ? "-dark" : "");
      document.body.setAttribute("data-theme", currentTheme);
    }

    function toggleDarkMode(button) {
      isDarkMode = !isDarkMode;
      switchTheme(currentTheme.replace("-dark", ""));
          button.textContent = isDarkMode ? "🌙" : "☀";
    }

    function sendPreMadeEmail() {
            // Get the recipient's email address from the input field
            const recipient = document.getElementById("recipient").value;

            if (!recipient) {
                alert("Please enter a recipient email address.");
                return;
            }

            const subject = encodeURIComponent("You have been invited");
            const body = encodeURIComponent(
                `Hello,\n\nIf you recive this email you have been invited to a game doc.\n\nPlease visit the following link for more information:\nhttps://github.com/Thebest-Fish/UnblockedGames.\nIf it asks for a password please enter atob('Zb36watsffg').\n\nBest regards,\nGame Doc Web Dev`
            );


            const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${body}`;

            window.location.href = mailtoLink;
        }

     function searchItems() {
    const searchInput = document.getElementById('gameSearchInput').value.toLowerCase(); 
    const items = document.querySelectorAll('.list-item');

    items.forEach(item => {
        if (item.textContent.toLowerCase().includes(searchInput)) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
  }
    function showTab(tabId) {
            // Hide all sections
            const sections = document.querySelectorAll('main section');
            sections.forEach(section => {
                section.classList.remove('active');
            });

            // Show the selected tab
            const targetSection = document.getElementById(tabId);
            if (targetSection) {
                targetSection.classList.add('active');
            }
        }
     document.getElementById("dataForm").addEventListener("submit", function(event) {
            event.preventDefault();

            var formData = new FormData(this);
            var xhr = new XMLHttpRequest();
            var scriptURL = "https://script.google.com/macros/s/AKfycbxJtY2iGjMtlzy4_XIYNeINGpUc4l_EF35PNca86B3VAWFrH4ypZmYwys8EIQZqewupag/exec"; 
            xhr.open("POST", scriptURL, true);
            xhr.onload = function() {
                if (xhr.status == 200) {
               alert('Submitted');
                } else {
                    document.getElementById("responseMessage").innerText = "Error submitting data.";
                }
            };
            xhr.send(formData);
        });
  function updateContent(faviconURL, logoURL, newTitle) {
      // Change the favicon
      const favicon = document.getElementById("favicon");
      favicon.href = faviconURL;

      // Change the logo
      const logo = document.getElementById("logo");
      logo.src = logoURL;
      logo.alt = `Logo for ${newTitle}`;

      // Change the title
      document.title = newTitle;
      document.getElementById("page-title").innerText = newTitle;
    }
