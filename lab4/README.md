# LABORATORIUM NUMER 4

# obsługa danych wprowadzanych przez użytkownika + modale

Utworzone zostały pięć ekranów + ekran `home`, który zawiera guziki do dowolnych stron.

Każdy inaczej ostylowany za pomocą pliku `styles.js`

Na każdej stronie zostały utworzone guziki które umożliwiają przejście do pozostałych dwóch stron

Wygląd strony Home:

![App](https://github.com/EllwartDawid/aplikacje-mobilne-21788-185IC/blob/master/lab4/ss/home.jpg)

Pierwsza strona przedstawia zastosowanie 'TextInput'

Strona przedstawia różnego rodzaju inputy, zwykły podstawowy tekst do wpisania, hasło zasłonięte kropkami, 

pole z wpisanym tekstem dopóki go nie zmienimy, input który po wpisaniu wartości wyświetla ją w innym  wskazanym miejscu

![App](https://github.com/EllwartDawid/aplikacje-mobilne-21788-185IC/blob/master/lab4/ss/str1.jpg)

Druga strona przedstawia dwa rozwijane pola wyboru. Po wybraniu opcji z pól, wybrane opcje wyświetlają się obok

Kluczowy jest tutaj plik `SelectingOptions.js`, który deklaruje wszystkie wartości zawarte w obu rozwijanych listach

oraz uzależnia je od siebie sprawiając że w zależności od wyboru w pierwszej liście mamy inny wybór w drugiej liście

![App](https://github.com/EllwartDawid/aplikacje-mobilne-21788-185IC/blob/master/lab4/ss/str2.jpg)

Trzecia strona przedstawia obsługę przełącznika `Switch`,  tak aby po zmianie jego położenia pojawiał się modal z pseudolosową liczbą

Po przyciśnięciu przycisku `Switch` zostajemy przeniesieni do strony z wylosowaną liczbą, z której możemy cofnąć się do

poprzedniej strony ponownie przyciskając przełącznik `Switch`

Plik `TogglingOnAndOff.js` tworzy switch, modal i deklaruje liczby pseudolosowe

![App](https://github.com/EllwartDawid/aplikacje-mobilne-21788-185IC/blob/master/lab4/ss/str3a.jpg)

![App](https://github.com/EllwartDawid/aplikacje-mobilne-21788-185IC/blob/master/lab4/ss/str3b.jpg)

Czwarta strona przedstawia zaimplementowany wybór daty i czasu

Po wciśnięciu przycisku 'Show Date' pojawia się alert z wybranymi parametrami czasowymi.

Konieczna była instalacja `@react-native-community/datetimepicker` oraz import `import DateTimePicker from '@react-native-community/datetimepicker';`

Główny wygląd czwartej strony, który przedstawia dwa przyciski, po wciśnięciu pierwszego pojawia się nam kalendarz,

w którym należy wybrać datę a następnie pojawia się zegar w którym należy wybrać godzinę

Po wciśnięciu grugiego guziaka pojawia się nam alert z wybraną datą i godziną

![App](https://github.com/EllwartDawid/aplikacje-mobilne-21788-185IC/blob/master/lab4/ss/str4a.jpg)

Wybór daty:

![App](https://github.com/EllwartDawid/aplikacje-mobilne-21788-185IC/blob/master/lab4/ss/str4b.jpg)

Wybór godziny:

![App](https://github.com/EllwartDawid/aplikacje-mobilne-21788-185IC/blob/master/lab4/ss/str4c.jpg)

Informacja o wybranej dacie po przyciśnięciu guzika:

![App](https://github.com/EllwartDawid/aplikacje-mobilne-21788-185IC/blob/master/lab4/ss/str4d.jpg)

Piąta strona przedstawia zaimplementowany "aktywny" modal + pasywne powiadomienia

Przedstawia guzik który przenosi nas do aktywnego modal oraz dwa teksty, jeden który liczy kliknięcia i wyświetla ich ilość

oraz drugi który po kliknięciu wyświetla powadomienie

Strona określa czas wyświetlania aktywnego modala używając funkcji `setTimeout()` na czas trwania Promise

![App](https://github.com/EllwartDawid/aplikacje-mobilne-21788-185IC/blob/master/lab4/ss/str5a.jpg)

![App](https://github.com/EllwartDawid/aplikacje-mobilne-21788-185IC/blob/master/lab4/ss/str5b.jpg)

Plik `styles.js` przedstawia style do wszystkich stron

Style do każdej ze stron oddzielone odpowiednim komentarzem

```javascript
import { StyleSheet } from "react-native";

export default StyleSheet.create({

  //Collecting Text Input

  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "lightblue",
    padding: 16,
  },

  textInputContainer: {
    alignSelf: "stretch"
  },

  textInputLabel: {
    marginBottom: 6
  },

  textInput: {
    backgroundColor: "darkgrey",
    height: 25,
    fontSize: 16
  },

  //Selecting Options

containerselect: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "darkblue"
  },

  pickerLabelselect: {
    fontSize: 40,
    fontWeight: "bold"
  },

  selectionselect: {
    width: 100,
    marginTop: 300,
    textAlign: "center"
  },

  //Toggling On And Off

  containerswitch: {
    flex: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow"
  },

  customSwitch: {
    alignItems: "center",
    margin: 40
  },

  modal: {
	  backgroundColor:"lightgreen",
  },
  
  text: {
	  fontSize: 30,
    color: "red",
    textAlign: "center",
    marginTop: 300
  },

// Passive Notifications

  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgray"
  },
  containerPassive: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue",
    marginTop: 170,
    marginBottom: 170,
  },
  containerNotification: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "darkblue",
  },

  // Collecting Date Time Input

  containerDate: {
    margin: 100, 
    backgroundColor:"red",
  }
});

```

