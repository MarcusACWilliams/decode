/*
    Where charcters map to values => {a: 1, b: 2, c: 3, ...}
    Where Input consist of => Data [12]
    Decode data into all possible messages
*/

class Decoder {
    constructor(CharMap) {
        //Swap Key/Value Relationship
        this.charMap = new Map();
            CharMap.forEach((value, key) => {
                this.charMap.set(value, key);
            });
        this.seenList = new Set();
        this.data;
        this.stack = [];
        this.keyMax; // Known max key value
        this.leafCount = 0; // Each leaf represents a new possible combination 
    };

    // 1) push first char onto stack => 2) push n+1 char onto stack. this is the first branch
    // 3) use two-char key to find next possible value => if no key exist store key in keyMax => leafCount++

    decode (Data) {
        let i =1;
        let childKey = "";
        this.data = Data.split("");
        this.stack.push(this.charMap.get(this.data[i-1]));

        while(this.stack.length > 0) {

            childKey = childKey.concat(this.data[i+1]);

            if(this.charMap.get(parseInt(childKey)) != undefined) {
                //Children of n are "n+1", "(n+1)(n+2)", etc while each child returns a valid key
                this.stack.push(this.charMap.get(parseInt(childKey)));
            }
            else {
                this.leafCount++;

            }
        }
    }

}export default Decoder

// 16 char alphabet map
var alphabetMap = new Map();
alphabetMap.set('a',1);alphabetMap.set('b',2);alphabetMap.set('c',3);alphabetMap.set('d',4);alphabetMap.set('e',5);alphabetMap.set('f',6);alphabetMap.set('g',7);alphabetMap.set('h',8);
alphabetMap.set('i',9);alphabetMap.set('j',10);alphabetMap.set('k',11);alphabetMap.set('l',12);alphabetMap.set('m',13);alphabetMap.set('n',14);alphabetMap.set('o',15);alphabetMap.set('p',16);
