  // Funzione per accettare i cookie
  function acceptCookies() {
    // Nascondi il banner
    document.getElementById('cookie-banner').style.display = 'none';
    // Salva l'informazione nel localStorage
    localStorage.setItem('cookiesAccepted', 'true');
}

// Al caricamento della pagina, verifica se l'utente ha già dato il consenso
window.onload = function() {
    console.log('Pagina caricata');  // Per vedere se la funzione viene chiamata
    if (!localStorage.getItem('cookiesAccepted')) {
        // Se il consenso non è stato dato, mostra il banner
        document.getElementById('cookie-banner').style.display = 'block';
    } else {
        // Se il consenso è già stato dato, nascondi il banner
        document.getElementById('cookie-banner').style.display = 'none';
    }
}