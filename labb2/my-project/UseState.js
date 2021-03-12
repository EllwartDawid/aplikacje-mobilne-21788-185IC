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