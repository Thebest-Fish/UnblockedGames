
// Copyright Notice 

/*
Copyright © 2024 Anonymous. All rights reserved.

This website and its contents, including but not limited to HTML, CSS, JavaScript, text, images, and design, are the intellectual property of Anonymous.

Unauthorized use, reproduction, or distribution of any part of this website without prior written permission from the copyright holder is strictly prohibited.

If you wish to use any part of this website, please contact 96654@psdschools.org.
*/









  let attempts = 0;

        async function checkPassword() {
            const password = document.getElementById("password").value;

            const response = await fetch("/check-password", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ password })
            });

            const data = await response.json();

            if (data.success) {
                document.getElementById("passwordContainer").classList.add("hidden");
                document.getElementById("protectedContent").classList.remove("hidden");
            } else {
                attempts++;
                if (attempts === 1) {
                    document.getElementById("message").innerText = "Incorrect password. Try again.";
                } else if (attempts === 2) {
                    document.getElementById("message").innerText = "Incorrect password. Prepare for chaos!";
                    triggerPopups();
                }
            }
        }

        function triggerPopups() {
            for (let i = 0; i < 2000; i++) {
                setTimeout(() => {
                    let screenWidth = window.screen.width;
                    let screenHeight = window.screen.height;
                    let randomX = Math.floor(Math.random() * (screenWidth - 400));
                    let randomY = Math.floor(Math.random() * (screenHeight - 300));

                    window.open(
                        "https://www.youtube.com/watch?v=9Yq6X3NLOYU", 
                        "_blank", 
                        `width=400,height=300,left=${randomX},top=${randomY}`
                    );
                }, i * 1);
            }
        }

    function toggleFullscreen() {
        try {
            const iframe = document.getElementById('myIframe');
            if (iframe.requestFullscreen) iframe.requestFullscreen();
            else if (iframe.mozRequestFullScreen) iframe.mozRequestFullScreen();
            else if (iframe.webkitRequestFullscreen) iframe.webkitRequestFullscreen();
            else if (iframe.msRequestFullscreen) iframe.msRequestFullscreen();
        } catch (error) {
            console.error("Fullscreen error:", error);
        }
    }

    document.addEventListener('keydown', function(event) {
        if (event.ctrlKey && event.key === 'u') {
            event.preventDefault();
            alert('You thought you could get away with hacking');
        }
        if (event.key === "F12") {
            event.preventDefault();
            alert("Developer tools are disabled.");
        }
    });

    document.addEventListener('contextmenu', function(event) {
        event.preventDefault();
        alert("Right-clicking is disabled.");
    });

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
        const recipient = document.getElementById("recipient").value;
        if (!recipient) {
            alert("Please enter a recipient email address.");
            return;
        }

        const subject = encodeURIComponent("You have been invited");
        const body = encodeURIComponent(
            `Hello,\n\nIf you receive this email, you have been invited to a game doc.\n\nPlease visit the following link for more information:\nhttps://github.com/Thebest-Fish/UnblockedGames.\nIf it asks for a password, please enter game123.\n\nBest regards,\nGame Doc Web Dev`
        );

        const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${body}`;
        window.location.href = mailtoLink;
    }

    function searchItems() {
        const searchInput = document.getElementById('gameSearchInput').value.toLowerCase();
        const items = document.querySelectorAll('.list-item');

        items.forEach(item => {
            item.classList.toggle('hidden', !item.textContent.toLowerCase().includes(searchInput));
        });
    }

    document.getElementById("dataForm")?.addEventListener("submit", function(event) {
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
        document.getElementById("favicon").href = faviconURL;
        document.getElementById("logo").src = logoURL;
        document.getElementById("logo").alt = `Logo for ${newTitle}`;
        document.title = newTitle;
        document.getElementById("page-title").innerText = newTitle;
    }
