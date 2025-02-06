document.addEventListener("DOMContentLoaded", function () {
    console.log("links.js loaded!"); // Debugging log

    const links = [
        { "name": "Proxy", "url": "https://tinyurl.com/3s9r86s3" },
        { "name": "", "url": "" },
        { "name": "", "url": "" },
        { "name": "", "url": "" },
        { "name": "", "url": "" },
        { "name": "", "url": "" },
        { "name": "", "url": "" },
        { "name": "", "url": "" },
        { "name": "", "url": "" },
        { "name": "", "url": "" },
        { "name": "", "url": "" },      
        { "name": "", "url": "" },
        { "name": "", "url": "" },
        { "name": "", "url": "" },
        { "name": "", "url": "" },
        { "name": "", "url": "" },
        { "name": "", "url": "" },
        { "name": "", "url": "" },
        { "name": "", "url": "" },
        { "name": "", "url": "" },
        { "name": "", "url": "" },
        { "name": "", "url": "" },
        { "name": "", "url": "" },
        { "name": "", "url": "" },
        { "name": "", "url": "" },
        { "name": "", "url": "" },
        { "name": "", "url": "" },
        { "name": "", "url": "" },
        { "name": "", "url": "" },
        { "name": "", "url": "" },
        { "name": "", "url": "" },
        { "name": "", "url": "" },
        { "name": "", "url": "" },
        { "name": "", "url": "" },
        { "name": "", "url": "" },
        { "name": "", "url": "" },
        { "name": "", "url": "" },
        { "name": "", "url": "" },
        { "name": "", "url": "" },
        { "name": "", "url": "" },
        { "name": "", "url": "" },
        { "name": "", "url": "" },
        { "name": "", "url": "" },
        { "name": "", "url": "" },
        { "name": "", "url": "" },
        { "name": "", "url": "" },
        { "name": "", "url": "" },
        { "name": "", "url": "" },
        { "name": "", "url": "" },
        { "name": "", "url": "" },
        { "name": "", "url": "" },
        { "name": "", "url": "" },
        { "name": "", "url": "" },
        { "name": "", "url": "" },
        { "name": "", "url": "" },
        { "name": "", "url": "" },
        { "name": "", "url": "" },
        { "name": "", "url": "" },
        { "name": "", "url": "" },
        { "name": "", "url": "" },
        { "name": "", "url": "" },
        { "name": "", "url": "" },
        { "name": "", "url": "" },
        { "name": "", "url": "" },
        { "name": "", "url": "" },
        { "name": "", "url": "" },
        { "name": "", "url": "" },
        { "name": "", "url": "" },
        { "name": "", "url": "" },
        { "name": "", "url": "" },
        { "name": "", "url": "" },
        { "name": "", "url": "" },
        { "name": "", "url": "" },
        { "name": "", "url": "" },
        { "name": "", "url": "" },
        { "name": "", "url": "" },
        { "name": "", "url": "" },
        { "name": "", "url": "" },
        { "name": "", "url": "" },
        { "name": "", "url": "" },
        { "name": "", "url": "" },
        { "name": "", "url": "" },
        { "name": "", "url": "" },
        { "name": "", "url": "" },
        { "name": "", "url": "" },
        { "name": "", "url": "" }
    
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
