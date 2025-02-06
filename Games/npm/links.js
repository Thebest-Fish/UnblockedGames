document.addEventListener("DOMContentLoaded", function () {
    const games = [
        { name: "Tumble Together", url: "https://tumble-together.herokuapp.com/?code=-C1C0CKKKKKI0AH1BI0AH1BK_II0G2A6A7A4A8A&id=3" },
        { name: "Google Pani Puri Game", url: "https://doodles.google/doodle/celebrating-pani-puri/" },
        { name: "Chess", url: "https://www.chess.com/" },
        { name: "Flappy Game", url: "https://flappycreator.com/flappy.php?id=5f3c49bc07f94" },
        { name: "Hacker Typer", url: "https://hackertyper.net/" },
        { name: "3 Days till Mario steals your life", url: "https://openprocessing.org/sketch/1209711/" },
        { name: "a1r games", url: "https://a1rplayis.us/games" },
        { name: "Pug In a Rug", url: "https://puginarug.com/" },
        { name: "Neo Luo's game", url: "https://scratch.mit.edu/projects/939123151/" },
        { name: "Proxy", url: "https://rrisd.internet.filters.rugeleychessclub.co.uk/" },
        { name: "Classroom 6x", url: "https://sites.google.com/site/classroom6x/unblockedgames" },
        { name: "Classroom 66ez", url: "https://sites.google.com/site/unblockedgames66ez/home" },
        { name: "Classroom 66", url: "https://sites.google.com/site/unblockedgames66fun/home" },
        { name: "PortaPortal", url: "https://guest.portaportal.com/foreverhappy" },
        { name: "Scratch", url: "https://scratch.mit.edu/studios/6047079" },
        { name: "EdgeNudity", url: "https://solo.to/ubge" },
        { name: "GimKit", url: "https://www.gimkit.com/me" },
        { name: "Blooket", url: "https://dashboard.blooket.com/stats" },
        { name: "Github", url: "https://github.com/topics/unblockedgames" },
        { name: "Mental Up", url: "https://www.mentalup.co/blog/unblocked-games-for-school" },
        { name: "Review Game Zone", url: "https://reviewgamezone.com/" },
        { name: "Unblocked Games 77", url: "https://sites.google.com/site/unblockedgames77/" },
        { name: "Beiswenger", url: "https://beiswenger.net/unblocked/" },
        { name: "Geometry Dash Lite", url: "https://scratch.mit.edu/projects/105500895/fullscreen" },
        { name: "Geometry Dash Subzero", url: "https://scratch.mit.edu/projects/216343253/fullscreen/" },
        { name: "Santa Tracker", url: "https://santatracker.google.com/" },
        { name: "Stack", url: "https://jimwise76.github.io/timstu/stack/" },
        { name: "Bouncy Balls", url: "https://bouncyballs.org/" },
        { name: "The Snake Game", url: "https://www.google.com/fbx?fbx=snake_arcade" },
        { name: "Lichess", url: "https://lichess.org/" },
        { name: "Little Alchemy", url: "https://littlealchemy.com/" },
        { name: "Little Alchemy 2", url: "https://littlealchemy2.com/" },
        { name: "Toy Theater", url: "https://toytheater.com/category/play/games/" },
        { name: "Crazy Games", url: "https://www.crazygames.com/" },
        { name: "Tetris", url: "https://mrcoles.com/tetris/" }
    ];

    const gamesList = document.getElementById("gamesList");

    games.forEach(game => {
        const div = document.createElement("div");
        div.classList.add("list-item");
        const link = document.createElement("a");
        link.href = game.url;
        link.target = "_blank";
        link.textContent = game.name;
        div.appendChild(link);
        gamesList.appendChild(div);
    });
});
