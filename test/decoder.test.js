import Decoder from "../decoder";
import { exportAllDeclaration } from "@babel/types";

test ('Key/Values get swapped correctly', () => {
    let testDecoder = new Decoder(new Map([ ['a', 1],['b',2] ]));
    expect(testDecoder.charMap.keys ).toEqual([1,2]);

});