function togglePlayer() {
    document.getElementById("player").classList.toggle("minimizado");
}

function tocarMusica(idMusica, cor1, cor2, nomeMusica) {
    const iframe = document.getElementById("spotify-player");
    const nomePlaylist = document.getElementById("nome-playlist");
    const player = document.getElementById("player");
    const topo = document.querySelector(".topo");
    const barra = document.querySelector(".barra-neon");

    iframe.src = `https://open.spotify.com/embed/track/${idMusica}`;
    nomePlaylist.textContent = nomeMusica;
    player.classList.remove("minimizado");

    topo.style.background = `linear-gradient(135deg, ${cor1}, ${cor2})`;
    barra.style.background = `linear-gradient(90deg, ${cor1}, ${cor2})`;
}

function trocarPlaylist(idPlaylist, nome, cor1, cor2) {
    const iframe = document.getElementById("spotify-player");
    const nomePlaylist = document.getElementById("nome-playlist");
    const player = document.getElementById("player");
    const topo = document.querySelector(".topo");
    const barra = document.querySelector(".barra-neon");

    iframe.src = "https://open.spotify.com/embed/playlist/" + idPlaylist;
    nomePlaylist.textContent = nome;
    player.classList.remove("minimizado");

    topo.style.background = `linear-gradient(135deg, ${cor1}, ${cor2})`;
    barra.style.background = `linear-gradient(90deg, ${cor1}, ${cor2})`;
}

function ativar(card) {
    document.querySelectorAll(".grid .card, .top3 .top-card").forEach(c => c.classList.remove("ativa"));
    card.classList.add("ativa");
}
