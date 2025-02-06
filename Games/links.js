
// Copyright Notice 

/*
Copyright © 2024 Anonymous. All rights reserved.

This website and its contents, including but not limited to HTML, CSS, JavaScript, text, images, and design, are the intellectual property of Anonymous.

Unauthorized use, reproduction, or distribution of any part of this website without prior written permission from the copyright holder is strictly prohibited.

If you wish to use any part of this website, please contact 96654@psdschools.org.
*/


















document.addEventListener("DOMContentLoaded", function () {
    console.log("links.js loaded!"); // Debugging log

    const links = [
        { "name": "Proxy", "url": "https://tinyurl.com/3s9r86s3" },
        { "name": "Ruby Arcade", "url": "https://rubyarcade.lol/" },
        { "name": "Toni Games", "url": "https://sites.google.com/view/ts-allinone/home" },
        { "name": "Super Pop Games", "url": "https://superpopskrrtboother.wixsite.com/boother" },
        { "name": "Tech at Timnath", "url": "https://sites.google.com/psdschools.org/technology/fun" },
        { "name": "Arcade Games", "url": "https://arcadespot.com/" },
        { "name": "Syces Game Shack", "url": "https://history-archive.vercel.app/games.html" },
        { "name": "Szvy Central", "url": "https://google-images.global.ssl.fastly.net/pages/gxmez.html" },
        { "name": "Symbaloo Games", "url": "https://blog.symbaloo.com/webmixes/4/unblocked-games" },
        { "name": "Unblocked Games 66", "url": "https://sites.google.com/site/unblockedgames66fun/home" },      
        { "name": "Primary Games", "url": "https://www.primarygames.co.uk/" },
        { "name": "Hooda Math", "url": "https://www.hoodamath.com/games/unblocked.html#gsc.tab=0" },
        { "name": "Neon SandBox", "url": "https://29a.ch/sandbox/2011/neonflames/" },
        { "name": "Symbaloo Games 2", "url": "https://www.symbaloo.com/mix/agariounblockedschool?lang=EN" },
        { "name": "Mobile Games Online", "url": "https://www.learn4good.com/games/play-mobile-games-online8.htm" },
        { "name": "Family Feud", "url": "https://play.dictionary.com/games/family-feud" },
        { "name": "CbC Games", "url": "https://www.cbc.ca/kids/" },
        { "name": "MSN Games", "url": "https://www.msn.com/en-us/play?ocid=cgbinghp" },
        { "name": "Hooda Math", "url": "https://www.hoodamath.com/index.html#gsc.tab=0" },
        { "name": "Symbaloo Games 3", "url": "https://www.symbaloo.com/library" },
        { "name": "Brainden Games", "url": "http://brainden.com/brain-games.htm" },
        { "name": "Driving Simulator", "url": "https://drivingskillsforlife.com/training/games" },
        { "name": "Quick Draw Games", "url": "https://quickdraw.withgoogle.com/" },
        { "name": "Review Game Zone", "url": "https://reviewgamezone.com" },
        { "name": "Pixel SpeedRun", "url": "https://www.construct.net/en/free-online-games/pixel-speedrun-2363/play" },
        { "name": "Shot Out 4 (2 player only)", "url": "https://www.construct.net/en/free-online-games/shot-40843/play?srsltid=AfmBOor-L5O-V_3DbOyWOMlEtwJWXNAnfNlZfFWy4VDc_WzymSY0Vh4e" },
        { "name": "Coffee Shop Games", "url": "https://www.culinaryschools.org/kids-games/coffee-shop/" },
        { "name": "Bulitins Games", "url": "https://www.builtinsf.com/company/unblocked-games" },
        { "name": "Unblocked Games 57", "url": "https://sites.google.com/ucasd.org/unblockedgames57/home" },
        { "name": "Unblocked Games 76", "url": "https://c-incognito.com/what-is-unblocked-games-76/" },
        { "name": "Doctoraux Games", "url": "https://doctoraux-com.mutawakkil.com/" },
        { "name": "Math is fun", "url": "https://www.mathsisfun.com/games/checkers-2.html" },
        { "name": "Hooda math 3", "url": "https://www.hoodamath.com/games/papaspizzeria.html#gsc.tab=0" },
        { "name": "Best Unblocked Games", "url": "https://scratch.mit.edu/studios/28838132" },
        { "name": "For School Srach games", "url": "https://scratch.mit.edu/studios/28838132" },
        { "name": "Unblocked Games 66", "url": "https://sites.google.com/site/unblockedgames66fun/home" },
        { "name": "Classic Minecraft", "url": "https://classic.minecraft.net/" },
        { "name": "IQ test", "url": "https://iqtest.com/" },
        { "name": "Abcya", "url": "https://www.abcya.com/" },
        { "name": "Play Tanks 2", "url": "https://www.mathsisfun.com/games/tanks2.html" },
        { "name": "Gd Game", "url": "https://gdgame.fun/P/homeIndex" },
        { "name": "Primary Games", "url": "https://www.primarygames.co.uk/" },
        { "name": "Web GL simulation", "url": "https://paveldogreat.github.io/WebGL-Fluid-Simulation/" },
        { "name": "Math PlayGround", "url": "https://www.mathplayground.com/logic-games.html" },
        { "name": "InterLand", "url": "https://beinternetawesome.withgoogle.com/en_us/interland/" },
        { "name": "Cut the Rope", "url": "https://www.experimonkey.com/games/html5-games/cut-the-rope/" },
        { "name": "Snake Games", "url": "https://www.google.com/search?q=google+snake+game&amp;safe=active&amp;ssui=on" },
        { "name": "DinoSaur Games", "url": "https://shawneestatechronicle.com/games/dinosaur-game/" },
        { "name": "Tank Game", "url": "https://www.mathsisfun.com/games/tanks2.html" },
        { "name": "MineCraft", "url": "https://classic.minecraft.net/?join=XTyI5AXiBXOnRyoH" },
        { "name": "Temple Run 2", "url": "https://jimwise76.github.io/timstu/temple-run-2/" },
        { "name": "Conway game of life", "url": "https://playgameoflife.com/" },
        { "name": "CONNIE", "url": "https://playgameoflife.com/" },
        { "name": "Slope", "url": "https://jimwise76.github.io/timstu/slope/" },
        { "name": "Geometry Dash", "url": "https://jimwise76.github.io/timstu/geodash/" },
        { "name": "Drive Mad", "url": "https://jimwise76.github.io/timstu/drive-mad/" },
        { "name": "Tunnel Rush", "url": "https://jimwise76.github.io/timstu/tunnel-rush/" },
        { "name": "Neal Fun", "url": "https://neal-fun.org/" },
        { "name": "Cookie Clicker", "url": "https://history-archive.vercel.app/games.html#cookie_clicker" },
        { "name": "Tumble Together", "url": "https://tumble-together.herokuapp.com/?code=-C1C0CKKKKKI0AH1BI0AH1BK_II0G2A6A7A4A8A&amp;id=3" },
        { "name": "Google Pani Puri", "url": "https://doodles.google/doodle/celebrating-pani-puri/" },
        { "name": "Chess", "url": "https://www.chess.com/" },
        { "name": "Flappy Bird", "url": "https://flappycreator.com/flappy.php?id=5f3c49bc07f94" },
        { "name": "Hacker Typer", "url": "https://hackertyper.net/" },
        { "name": "3 Days till Mario steals your life", "url": "https://openprocessing.org/sketch/1209711/" },
        { "name": "a1r games", "url": "https://a1rplayis.us/games" },
        { "name": "Pug in a rug", "url": "https://puginarug.com/" },
        { "name": "Neo Luo's game", "url": "https://scratch.mit.edu/projects/939123151/" },
        { "name": "Proxy", "url": "https://rrisd.internet.filters.rugeleychessclub.co.uk/" },
        { "name": "Classroom 6x", "url": "https://sites.google.com/site/classroom6x/unblockedgames" },
        { "name": "PortaPortal", "url": "https://guest.portaportal.com/foreverhappy" },
        { "name": "MineCraft WORKS", "url": "https://eaglymc.com/web-javascript/" }
    
    ];

    const container = document.getElementById("games"); // Make sure the correct ID is used
    if (!container) {
        console.error("Error: Element with ID 'games' not found.");
        return;
    }

    const list = document.createElement("div");
    list.classList.add("game-links");

    links.forEach(link => {
        const div = document.createElement("div");
        div.className = "list-item";

        const a = document.createElement("a");
        a.href = link.url;
        a.textContent = link.name;
        a.target = "_blank";

        div.appendChild(a);
        list.appendChild(div);
    });

    container.appendChild(list);
    console.log("Links added successfully!");
});
