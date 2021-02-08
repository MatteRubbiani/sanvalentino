let indizi = [
    {
        "codice": "regole",
        "anagramma": null,
        "titolo" : "Regole",
        "indizio": "Ciao tata, buon San Valentino. Ti ho organizzato una caccia al tesoro un po' particolare. Ad ogni tappa troverai un foglietto, con un codice. Inseriscilo dopo aver schiacciato -prossimo-, il primo codice te lo fornisco ora, a voce",
        "real_order_index": null
    },
    {
        "codice": "eis",
        "anagramma": "sei",
        "titolo" : "Il primo incontro",
        "indizio": "Recati nella casa dove ci siamo visti per la prima volta, guarda bene sugli alberi li davanti",
        "real_order_index": 0
    },
    {
        "codice": "al",
        "anagramma": "la",
        "titolo" : "Il nostro primo bacio",
        "indizio": "Dove tutto è iniziato",
        "real_order_index": 3
    },
    {
        "codice": "saco",
        "anagramma": "cosa",
        "titolo" : "la nostra prima uscita",
        "indizio": "Pioveva... abbiamo cercato un riparo",
        "real_order_index": 7
    },
    {
        "codice": "ipù",
        "anagramma": "più",
        "titolo" : "Una panchina",
        "indizio": "C'è una panchina, penso che la troverai, ho FIDUCIA in te",
        "real_order_index": 1
    },
    {
        "codice": "label",
        "anagramma": "bella",
        "titolo" : "L'inseguimento",
        "indizio": "La serata si fa intensa, veniamo inseguiti, cadi nel fosso",
        "real_order_index": 5
    },
    {
        "codice": "dalle",
        "anagramma": "della",
        "titolo" : "24 maggio",
        "indizio": "...",
        "real_order_index": 4
    },
    {
        "codice": "mai",
        "anagramma": "mia",
        "titolo" : "beh... 31 maggio",
        "indizio": "Ti ricordi dov'eravamo il 31 sera?",
        "real_order_index": 2
    },
    {
        "codice": "tavi",
        "anagramma": "vita",
        "titolo" : "Una festa...",
        "indizio": "Mi sono sbloccato, dove?",
        "real_order_index": 6
    },

]
function findInidizio(code){
    for (let i=0; i<indizi.length; i++){
        if (indizi[i].codice === code) return indizi[i]
    }
}

window.onload = function() {
    let code = prompt("inserisci codice")
    let indizio = findInidizio(code)
    if (!indizio) location.reload();
    document.getElementById("title_text").innerText = indizio.titolo
    document.querySelector("#description_text").innerText= indizio.indizio

}


