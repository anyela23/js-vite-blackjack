import _ from 'underscore';

//export const miNombre='anyelaaa';

/**
 * esta funcion crea un nuevo deck
 * @param {Array<string>} tiposDeCarta  eje:  ['C','D','H','S'];
 * @param {Array<string>} tiposEspeciales  eje:  ['A','J','Q','K'];
 * @returns {Array<string>} regresa un nuevo deck de cartas
 */
 export const crearDeck = (tiposDeCarta, tiposEspeciales) => {


if(!tiposDeCarta  || tiposDeCarta.length===0)throw new Error('TipoDeCarta es obligatorio como un arreglo de estring');

if(!tiposEspeciales  || tiposEspeciales.length===0)throw new Error('tiposEspeciales es obligatorio como un arreglo de estring');

 

let deck=[];
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;
}
 