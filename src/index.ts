import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';


/* 
const numCollection = new NumbersCollection([0, -1, 100, 33, 12]);
const numSorter = new Sorter(numCollection);
numSorter.sort();
console.log(numSorter.collection);

const charCollection = new CharactersCollection("xyabc");
const charSorter = new Sorter(charCollection);
charSorter.sort();
console.log(charSorter.collection); 

Problem with above approach is that first of all we have to create an
object of Sorter and than finally sort on that object..
Can we do something like below :
const numCollection = new NumbersCollection([0, -1, 100, 33, 12]);
numCollection.sort()
Just two lines instead of 4 lines..this avoids giving collection to sorter

Idea is that CharactersCollection,NumbersCollection & LinkedList..each one
of these has their own sort method so that we can directly call sort on them.
This way we will do this.compare instead of this.collection.compare
*/

/* see how below we have simplied design..now sort can be called directly */

const numCollection = new NumbersCollection([0, -1, 100, 33, 12]);
numCollection.sort();
console.log(numCollection.data)