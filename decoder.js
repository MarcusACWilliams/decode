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

        this.data;
        this.stack = [];
        this.keyMax // Known max key value
        this.leafCount // Each leaf represents a new possible combination 
    };

    // 1) push first char onto stack => 2) push n+1 char onto stack. this is the first branch
    // 3) use two-char key to find next possible value => if no key exist store key in keyMax => leafCount++

    decode (Data) {
        this.data = Data;
        stack.push(charMap(data[0]))
    }

}export default Decoder