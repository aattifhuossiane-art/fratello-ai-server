// index.js - Codice che ignora la chiave

module.exports = async (req, res) => {
    // Il server si avvia senza cercare la chiave segreta
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    
    // Messaggio che conferma l'avvio, ma non l'uso dell'AI
    res.end('Ponte Segreto Attivo. NESSUNA CHIAVE AI NECESSARIA PER L\'AVVIO.');

    // *** QUI AGGIUNGEREMO LA LOGICA AI E LA CHIAVE DOPO ***
};

