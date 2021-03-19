# LABORATORIUM NUMER 2

# RESPONSYWNE LAYOUTY + NAWIGACJA

Utworzone zostały trzy ekrany + ekran `home`, każdy inaczej ostylowany za pomocą pliku `styles.js`

Na każdej stronie zostały utworzone guziki które umożliwiają przejście do pozostałych dwóch stron

Wygląd każdej ze stron:

Home:

![App](https://github.com/EllwartDawid/aplikacje-mobilne-21788-185IC/blob/master/labb2/ss/home.PNG)

Spread Operator:

![App](https://github.com/EllwartDawid/aplikacje-mobilne-21788-185IC/blob/master/labb2/ss/spreadpopr.PNG)

Rest Parametrs:

![App](https://github.com/EllwartDawid/aplikacje-mobilne-21788-185IC/blob/master/labb2/ss/restpopr.PNG)

Hooks:

![App](https://github.com/EllwartDawid/aplikacje-mobilne-21788-185IC/blob/master/labb2/ss/hookpopr.PNG)

W pliku `App.js` znajduje się `createAppContainer` oraz `createStackNavigator`, które odpowiadają za nawigację strony, przelączanie między stronami

Plik `App.js`:

```javascript
import React, { useState } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Home from "./Home";
import SpreadOp from "./SpreadOperator"
import RestPar from "./RestParametrs"
import UseState from "./UseState"
const Nav = createAppContainer(
 createStackNavigator({ Home,SpreadOp,RestPar,UseState }, { initialRouteName: "Home" })
);
export default function App() {

 return <Nav />;
}
```
Utworzone zostały trzy komponenty odpowiedzialne za każdą ze stron `SpreadOperator.js`,`RestParametrs.js`,`UseState.js`, w każdym z nich zawarty jest kod który opisuje zawartość strony. Każdy z nich ma również podpięte guziki, które za pomocą nawigacji umożliwiają przechodzenie do innych stron

Plik `SpreadOperator.js`:

```javascript
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
    <Button
 title={`Rest Parametrs`}
 onPress={() =>
 navigation.navigate("RestPar", {
 id: "second",
 title: "Rest Parametrs",
 })
 }
 />
  <Button
 title={`Use State`}
 onPress={() =>
 navigation.navigate("UseState", {
 id: "third",
 title: "Hooks",
 })
 }
 />
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
```

Plik `RestParametrs.js`:

```javascript
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
     <Button
 title={`Spread Operator`}
 onPress={() =>
 navigation.navigate("SpreadOp", {
 id: "first",
 title: "Spread Operator",
 })
 }
 />
  <Button
 title={`Use State`}
 onPress={() =>
 navigation.navigate("UseState", {
 id: "third",
 title: "Hooks",
 })
 }
 />
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
```

Plik `UseState.js`:

```javascript
import React from "react";
import { View, Text, Button } from "react-native";
import styles from "./styles";
export default function UseState({ navigation }) {
 return (
 //<View style={styles.container}>
 //<Text>{navigation.getParam("content")}</Text>
 //</View>
     <View style={styles.containeruse}>
     <View style={styles.boxuse}>
       <Text style={styles.boxTextuse}>We wstępie przedstawiliśmy hooki za pomocą następującego przykładu po prawej:{`---->>>>>>>>>`}
       {`
       
       `}
        Czym jest hook? Hook jest specjalną funkcją, która pozwala „zahaczyć się” w wewnętrzne mechanizmy Reacta. Na przykład useState jest hookiem, który pozwala korzystać ze stanu w komponencie funkcyjnym. W kolejnych rozdziałach poznamy inne hooki{`
       
       `}
       Kiedy powinno się korzystać z hooków? Jeśli po stworzeniu komponentu funkcyjnego zorientujesz się, że potrzebujesz przechować kilka wartości w stanie, dotychczas musiałeś zamienić taki komponent na klasę. Teraz możesz skorzystać z hooka z wewnątrz istniejącego komponentu funkcyjnego. Zobaczmy jak to działa!
       {`
       


       `}
        Jeżeli używałeś już klas w Reakcie, ten kod po prawej powinien wyglądać znajomo {`---->>>>>>`}{`
       
       `}
       Stan inicjalizowany jest wartością {`{ count: 0 }`}, a następnie, kiedy użytkownik naciska przycisk, inkrementujemy właściwość state.count, wywołując metodę this.setState(). W dalszej części tego rozdziału będziemy posiłkować się fragmentami kodu z tego przykładu.</Text>
     </View>
     <View style={styles.boxuse}>
       <Text style={styles.boxTextuse}>{`import React, { useState } from 'react';

function Example() {
  // Zadeklaruj nową zmienną stanu, którą nazwiemy „count”  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Kliknięto {count} razy</p>
      <button onClick={() => setCount(count + 1)}>
        Kliknij mnie
      </button>
    </div>
  );
}`}{`


--------------------------------------------------


`}
{`class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <p>Kliknięto {this.state.count} razy</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Kliknij mnie
        </button>
      </div>
    );
  }
}`}</Text>
     </View>
     <Button
 title={`Rest Parametrs`}
 onPress={() =>
 navigation.navigate("RestPar", {
 id: "second",
 title: "Rest Parametrs",
 })
 }
 />
  <Button
 title={`Spread Operator`}
 onPress={() =>
 navigation.navigate("SpreadOp", {
 id: "first",
 title: "Spread Operator",
 })
 }
 />
   </View>
 );
}
UseState.navigationOptions = ({
    navigation,
   }) => {
    const title = navigation.getParam("title");
    return {
    title,
    };
   };
```

W plik `Home.js` zawarte zostały guziki które umożliwiają przejście do wszystkich innych trzech stron:

```javascript
import React from "react";
import { View, Button } from "react-native";
import styles from "./styles";
export default function Home({ navigation}) {
 return (
 <View style={styles.container}>
 <Button
 title={`Spread Operator`}
 onPress={() =>
 navigation.navigate("SpreadOp", {
 id: "first",
 title: "Spread Operator",
 })
 }
 />
 <Button
 title={`Rest Parametrs`}
 onPress={() =>
 navigation.navigate("RestPar", {
 id: "second",
 title: "Rest Parametrs",
 })
 }
 />
 <Button
 title={`Use State`}
 onPress={() =>
 navigation.navigate("UseState", {
 id: "third",
 title: "Hooks",
 })
 }
 />
 </View>
 );
}
Home.navigationOptions = {
 title: "Home"
};
```

Plik `style.js` przedstawia style do wszystkich komponentów zawiera dane które mówią jak wyglądać ma głowny kontener, box w którym znajdują się informacje oraz same informacje w każdym z wyżej wymienionych komponentów:

```javascript
import { Platform, StyleSheet, StatusBar } from 'react-native';
export default StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: 'darkgray',
        alignItems: 'center',
        ...Platform.select({
        ios: { paddingTop: 20 },
        android: { paddingTop: StatusBar.currentHeight }
        })
        },

    // style dla spread operator

 containerspread: {
 flex: 1,
 flexDirection: 'row',
 flexWrap: 'wrap',
 backgroundColor: 'darkgray',
 alignItems: 'center',
 ...Platform.select({
 ios: { paddingTop: 20 },
 android: { paddingTop: StatusBar.currentHeight }
 })
 },
 boxspread: {
 height: 500,
 width: 500,
 justifyContent: 'center',
 alignItems: 'center',
 backgroundColor: 'black',
 borderWidth: 1,
 borderStyle: 'dashed',
 borderColor: 'darkslategray',
 margin: 10
 },
 boxTextspread: {
 color: 'white',
 fontWeight: 'bold',
 margin: 20,
 },

 //style dla rest parametrs

containerrestpar: {
flex: 1,
flexDirection: "column",
alignItems: "center",
justifyContent: "space-around",
backgroundColor: "lightblue",
},

boxrestpar: {
width: 600,
height: 175,
justifyContent: "center",
alignItems: "center",
backgroundColor: "lightgray",
borderWidth: 1,
borderStyle: "dashed",
borderColor: "darkslategray"
},

boxrestpar2: {
    width: 600,
    height: 175,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "darkgray",
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "darkslategray"
    },
    

boxTextrestpar: {
color: "darkslategray",
fontWeight: "bold",
margin:20,
},

// style dla useState

containeruse: {
flex: 1,
flexDirection: "row",
backgroundColor: "darkblue",
alignItems: "center",
justifyContent: "space-around",
},

boxuse: {
width: 500,
justifyContent: "center",
alignSelf: "stretch",
alignItems: "center",
backgroundColor: "lightgray",
borderWidth: 5,
borderStyle: "dashed",
borderColor: "darkslategray"
},

boxTextuse: {
color: "darkslategray",
fontWeight: "bold",
margin:20
},
   
       
});
```

