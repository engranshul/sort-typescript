import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { Sorter } from './Sorter';

const numCollection = new NumbersCollection([0, -1, 100, 33, 12]);
const numSorter = new Sorter(numCollection);
numSorter.sort();
console.log(numSorter.collection);



const charCollection = new CharactersCollection("xyabc");
const charSorter = new Sorter(charCollection);
charSorter.sort();
console.log(charSorter.collection);
