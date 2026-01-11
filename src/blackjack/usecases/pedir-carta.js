
/**
 * Funcion para pedir carta
 * @param {Array<String>} deck 
 * @returns {String} retorna carta
 */

export const pedirCarta = (deck) => {
    if(!deck) throw new Error("Deck viene vacio")

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}