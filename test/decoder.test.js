import Decoder from "../decoder";
import { exportAllDeclaration } from "@babel/types";

// 16 char alphabet map
const alphabetMap = new Map();
alphabetMap.set('a',1);alphabetMap.set('b',2);alphabetMap.set('c',3);alphabetMap.set('d',4);alphabetMap.set('e',5);alphabetMap.set('f',6);alphabetMap.set('g',7);alphabetMap.set('h',8);
alphabetMap.set('i',9);alphabetMap.set('j',10);alphabetMap.set('k',11);alphabetMap.set('l',12);alphabetMap.set('m',13);alphabetMap.set('n',14);alphabetMap.set('o',15);alphabetMap.set('p',16);

// --Decoder(charMap)--

test ('Key/Values get swapped correctly', () => {
    let testDecoder = new Decoder(new Map([ ['a', 1],['b',2] ]));
    let keys = testDecoder.charMap.keys();
    expect([keys.next().value,keys.next().value]).toEqual([1,2]);
});

test ('Values Alpha values are returned correctly from new numeric keys', () => {
    let testDecoder = new Decoder(new Map([ ['a', 1],['b',2] ]));
    let testMap = testDecoder.charMap;
    expect([testMap.get(1),testMap.get(2)]).toEqual(['a','b']);

});

test ('Input Map passed in correctly', () => {
    let testMap = new Map([ ['a', 1],['b',2] ] );
    let testDecoder = new Decoder(new Map([ ['a', 1],['b',2] ] ));
    expect(testMap).toEqual(testDecoder.inputMap);

});

test ('Message Fully Decoded', () => { 
    let data = "12345";
    
    let testDecoder = new Decoder(alphabetMap);
    testDecoder.decode(data);
    expect(testDecoder.leafCount).toEqual(2);

});

/*
1 - 2 - 3 - 4 - 5 abcde
12 - 3 - 4 - 5  lcde
x123x

*/