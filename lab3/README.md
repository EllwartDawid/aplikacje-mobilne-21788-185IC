# LABORATORIUM NUMER 3

# Renderowanie listy danych + obsługa progresu


FILTROWANIE I SORTOWANIE:

Strona przedstawia losowe liczby w zakresie od 0 do 1000. Zawiera wyszukiwarkę, któa umożliwia

wyszukanie konkretnej liczby lub liczby która zawiera się w innej np. szukamy 3 i znajduje nam

3, 13, 23, 33, 43 itd.

Zawiera również możliwość sortowania od najmniejszej lub od największej w zależności od tego jak ustawimy 

strzałkę poprzez jej kliknięcie. Strzałka znajduje się w prawym górnym rogu

Stronę tworzą pliki, które odpowiadają za tworzenie filtrowania:

```javascript
import React from "react";
import PropTypes from "prop-types";
import { View, TextInput } from "react-native";
import styles from "./styles";
export default function ListFilter({ onFilter }) {
 return (
 <View>
 <TextInput
 autoFocus
 placeholder="Search"
 style={styles.filter}
 onChangeText={onFilter}
 />
 </View>
 );
}
ListFilter.propTypes = {
 onFilter: PropTypes.func.isRequired
};
```

tworzenie sortowania:

```javascript
import React from "react";
import PropTypes from "prop-types";
import { Text } from "react-native";
const arrows = new Map([[true, "▼"], [false, "▲"]]);
export default function ListSort({ onSort, asc }) {
 return <Text onPress={onSort}>{arrows.get(asc)}</Text>;
}
ListSort.propTypes = {
 onSort: PropTypes.func.isRequired,
 asc: PropTypes.bool.isRequired
};
```

oraz za pobieranie danych:

```javascript
import React from "react";
import PropTypes from "prop-types";
import { Text, FlatList } from "react-native";
import styles from "./styles";
import ListControls from "./ListControls";
export default function List({ Controls, data, onFilter, onSort, asc }) {
 return (
 <FlatList
 data={data}
 ListHeaderComponent={<Controls {...{ onFilter, onSort, asc }} />}
 renderItem={({ item }) => <Text
 style={styles.item}>{item.value}</Text>}
 />
 );
}
List.propTypes = {
 Controls: PropTypes.func.isRequired,
 data: PropTypes.array.isRequired,
 onFilter: PropTypes.func.isRequired,
 onSort: PropTypes.func.isRequired,
 asc: PropTypes.bool.isRequired
};
List.defaultProps = {
 Controls: ListControls
};
```

Każdy plik odpowiada za co innego i razem w pliku `ListContainer` tworzą stronę przedstawioną poniżej

![App](https://github.com/EllwartDawid/aplikacje-mobilne-21788-185IC/blob/master/lab3/ss/filtr.jpg)

LAZY LOADING:

Druga strona przedstawia "leniwe ładowanie" listy danych, którą są pseoudolosowe litery

Podczas scrollowania strony ładowane są nowe litery

Poniższą stronę tworzą pliki, które mówią o tym jak funkcjonuje losowanie liter:

```javascript
function* genItems() {


  while (true) {
  yield Math.random().toString(36).substring(2,7);
  }
 }
 const items = genItems();
 export function fetchItems() {
  return Promise.resolve({
  json: () =>
  Promise.resolve({
  items: new Array(30).fill(null).map(() => items.next().value)
  })
  });
 }
```

W pliku `ListLazy.js` zawarty jest `onScroll` dzięki któremu możliwe jest wczytywanie nowych liter przy scrollowaniu strony

```javascript
import React from "react";
import PropTypes from "prop-types";
import { Text, FlatList } from "react-native";
import styles from "./styles";
export default function ListLazy({ data, fetchItems }) {
 return (
 <FlatList
 data={data}
 renderItem={({ item }) => <Text
style={styles.item}>{item.value}</Text>}
 onScroll={fetchItems}
 />
 );
}
ListLazy.propTypes = {
 data: PropTypes.array.isRequired,
 fetchItems: PropTypes.func.isRequired
};
```

![App](https://github.com/EllwartDawid/aplikacje-mobilne-21788-185IC/blob/master/lab3/ss/lazy.jpg)

Ostatnia strona zawiera Step Progress, są to trzy podstrony które zawierają wskaźnik postępu. 

Poziom załadowania wskaźnika jest zależny od strony na której się znajdujemy. Przyciski w obu górnych rogach 

umożliwiają przechodzenie między stronami. Każda strona oraz każdy przycisk do przechodzenia między nimi 

jest ostylowany w inny sposób w pliku `styles.js`.

Aby stworzyc stronę należało zaimportować pasek z react-native:

```javascript
export { ProgressBarAndroid as ProgressBarComponent } from "react-native";
export const progressProps = {
 styleAttr: "Horizontal",
 indeterminate: false
};
```

Należało również stworzyć `ProgressBar.js` który mówi o tym jak funkcjonować ma pasek:

```javascript
import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import styles from "./styles";
import { ProgressBarComponent, progressProps } from
"./ProgressBarComponent";
function ProgressLabel({ show, progress }) {
 return (
 show && (
 <Text style={styles.progressText}>{Math.round(progress *
 100)}%</Text>
 )
 );
}
export default function ProgressBar({ progress, label }) {
 return (
 <View style={styles.progress}>
 <ProgressLabel show={label} progress={progress} />
 <ProgressBarComponent
 {...progressProps}
 style={styles.progress}
 progress={progress}
 />
 </View>
 );
}
ProgressBar.propTypes = {
 progress: PropTypes.number.isRequired,
 label: PropTypes.bool.isRequired
};
ProgressBar.defaultProps = {
 progress: 0,
 label: true
};
```

![App](https://github.com/EllwartDawid/aplikacje-mobilne-21788-185IC/blob/master/lab3/ss/first.jpg)


![App](https://github.com/EllwartDawid/aplikacje-mobilne-21788-185IC/blob/master/lab3/ss/second.jpg)


![App](https://github.com/EllwartDawid/aplikacje-mobilne-21788-185IC/blob/master/lab3/ss/third.jpg)


