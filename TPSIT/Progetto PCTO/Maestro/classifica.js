"use strict";

function renderLeaderboard() {
    const container = document.getElementById("leaderboardContainer");
    if (!container) return;

    try {
        const raw = localStorage.getItem("genio_indovino_leaderboard") || "[]";
        let list = JSON.parse(raw);
        if (!Array.isArray(list) || list.length === 0) {
            container.innerHTML = "<li class='no-data'>Ancora nessun personaggio indovinato. Gioca una partita per comparire nella classifica!</li>";
            return;
        }

        // Sort by count descending
        list.sort((a, b) => b.count - a.count);

        const html = list.map((item, index) => {
            const imageSrc = item.image || 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f9d1.svg';
            const timesWord = item.count === 1 ? 'volta' : 'volte';
            return `
                <li class="leaderboard-item">
                    <div class="leaderboard-rank">#${index + 1}</div>
                    <img src="${imageSrc}" alt="${item.name}" class="leaderboard-img" onerror="this.onerror=null;this.src='https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f9d1.svg';">
                    <div class="leaderboard-info">
                        <h3>${item.name}</h3>
                        <p>Indovinato ${item.count} ${timesWord}</p>
                    </div>
                </li>
            `;
        }).join('');

        container.innerHTML = html;
    } catch (e) {
        console.error("Leaderboard load error", e);
        container.innerHTML = "<li class='no-data'>Impossibile caricare la classifica.</li>";
    }
}

document.addEventListener("DOMContentLoaded", renderLeaderboard);
