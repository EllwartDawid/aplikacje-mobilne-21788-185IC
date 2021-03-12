import React from "react";
import { View, Text, Button } from "react-native";
import styles from "./styles";
export default function SpreadOp({ navigation }) {
 return (
 //<View style={styles.container}>
 //<Text>{navigation.getParam("content")}</Text>
 //</View>
     <View style={styles.containerspread}>
     <View style={styles.boxspread}>
       <Text style={styles.boxTextspread}>Spread syntax (...){`
       
       `}
Spread syntax (...) allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.</Text>
     </View>
     <View style={styles.boxspread}>
       <Text style={styles.boxTextspread}>{`function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
// expected output: 6

console.log(sum.apply(null, numbers));
// expected output: 6`}</Text>
     </View>
     <View style={styles.boxspread}>
       <Text style={styles.boxTextspread}>Description{`
       
       `}
Spread syntax can be used when all elements from an object or array need to be included in a list of some kind. 

In the above example, the defined function takes x, y, and z as arguments and returns the sum of these values. An array value is also defined.

When we invoke the function, we pass it all the values in the array using the spread syntax and the array name — ...numbers.

If the array contained more than three numbers, e.g. [1, 2, 3, 4], then it would still work fine, except that all four would be passed, but only the first three would be used unless you added more arguments to the function, e.g.:{`

function sum(x, y, z, n) {
    return x + y + z + n;
  }`}{`
  
  `}The above example is somewhat rigid; the real value in spread syntax is that it works with the same value, no matter how many elements are contained in the object, array, etc.

  It is commonly used when you want to add a new item to a local data store, or display all stored items plus a new addition. A very simple version of this kind of action could look like so:{`
  
  `}{`let numberStore = [0, 1, 2];
  let newNumber = 12;
  numberStore = [...numberStore, newNumber];`}</Text>
     </View>
     <View style={styles.boxspread}>
       <Text style={styles.boxTextspread}>Examples{`
       
       `}
Replace apply(){`

`}
It is common to use Function.prototype.apply() in cases where you want to use the elements of an array as arguments to a function.{`

`}{`function myFunction(x, y, z) { }
let args = [0, 1, 2];
myFunction.apply(null, args);`}{`

`}With spread syntax the above can be written as:{`

`}{`function myFunction(x, y, z) { }
let args = [0, 1, 2];
myFunction(...args);`}{`

`}Any argument in the argument list can use spread syntax, and the spread syntax can be used multiple times.{`

`}{`function myFunction(v, w, x, y, z) { }
let args = [0, 1];
myFunction(-1, ...args, 2, ...[3]);`}</Text>
    </View>
   </View>
 );
}
SpreadOp.navigationOptions = ({
 navigation,
}) => {
 const title = navigation.getParam("title");
 return {
 title,
 };
};