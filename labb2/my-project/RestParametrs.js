import React from "react";
import { View, Text, Button } from "react-native";
import styles from "./styles";
export default function RestPar({ navigation }) {
 return (
 //<View style={styles.container}>
 //<Text>{navigation.getParam("content")}</Text>
 //</View>
     <View style={styles.containerrestpar}>
     <View style={styles.boxrestpar2}>
       <Text style={styles.boxTextrestpar}>Rest parameters{`
       
       `}
The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript.</Text>
     </View>
     <View style={styles.boxrestpar}>
       <Text style={styles.boxTextrestpar}>{`function sum(...theArgs) {
  return theArgs.reduce((previous, current) => {
    return previous + current;
  });
}
console.log(sum(1, 2, 3));
// expected output: 6
console.log(sum(1, 2, 3, 4));
// expected output: 10`}</Text>
     </View>
     <View style={styles.boxrestpar2}>
       <Text style={styles.boxTextrestpar}>Description{`
       
       `}
A function definition's last parameter can be prefixed with "..." (three U+002E FULL STOP characters), which will cause all remaining (user supplied) parameters to be placed within a "standard" JavaScript array.. Only the last parameter in a function definition can be a rest parameter.</Text>
     </View>
     <View style={styles.boxrestpar}>
       <Text style={styles.boxTextrestpar}>{`function myFun(a,  b, ...manyMoreArgs) {
  console.log("a", a)
  console.log("b", b)
  console.log("manyMoreArgs", manyMoreArgs)
}
myFun("one", "two", "three", "four", "five", "six")
// Console Output: a, one
// b, two
// manyMoreArgs, ["three", "four", "five", "six"]
`}</Text>
     </View>
   </View>
 );
}

RestPar.navigationOptions = ({
    navigation,
   }) => {
    const title = navigation.getParam("title");
    return {
    title,
    };
   };