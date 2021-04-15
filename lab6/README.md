# LABORATORIUM NUMER 6

# obsługa obrazów + tryb offline 

Utworzone zostało sześć ekranów + ekran `home`, który zawiera guziki do dowolnych stron.

Każdy ekran inaczej ostylowany za pomocą pliku `styles.js`

Na każdej stronie zostały utworzone guziki które umożliwiają przejście do pozostałych dwóch stron

Wygląd strony Home:

![App](https://github.com/EllwartDawid/aplikacje-mobilne-21788-185IC/blob/master/lab6/ss/home.jpg)

Pierwszy ekran przedstawia ładowanie dwóch obrazków, pierwszy za pomocą właściwości `uri`, a drugi z użyciem metody `require()`

Do ładowania obrazu za pomocą `uri` używamy adresu obrazu w sieci a do ładowania za pomocą `require()` używamy adresu obrazu na naszym komputerze 


![App](https://github.com/EllwartDawid/aplikacje-mobilne-21788-185IC/blob/master/lab6/ss/1.jpg)

Na drugim ekranie przedstawiona została zmiana rozmiaru ładowanego obrazka za pomocą komponentu Slider

W pliku `ResizingImage.js` pobieramy obrazek i ustawiamy wartość początkową w `useState`

Komponent `Slider` umożliwia zmianę rozmiaru obrazka

![App](https://github.com/EllwartDawid/aplikacje-mobilne-21788-185IC/blob/master/lab6/ss/2.jpg)

![App](https://github.com/EllwartDawid/aplikacje-mobilne-21788-185IC/blob/master/lab6/ss/2a.jpg)

Trzeci ekran przedstawia zaimplementowane "leniwe" ładowanie obrazka oraz renderowanie wybranego zestawu ikon

Ekran trzeci składa się z trzech plików `ButtonLazy.js` który tworzy przycisk, po którego kliknięciu ładuje się obrazek, plik `LazyImage.js`

przedstawia sposób załadowania obrazka, plik `LazyLoading.js` łączy dwa wcześniej wymienione pliki i dodatkowo renderuje ikony, 

które są zawarte w pliku `icon-name.json`

![App](https://github.com/EllwartDawid/aplikacje-mobilne-21788-185IC/blob/master/lab6/ss/3.jpg)

![App](https://github.com/EllwartDawid/aplikacje-mobilne-21788-185IC/blob/master/lab6/ss/3a.jpg)

Na czwartym ekranie została zaimplementowana detekcja łączności z siecią i wyświetlanie odpowiedniej informacji

Jeżeli mamy połączenie z internetem to pojawia się napis `connected`, jeżeli nie mamy połączenia to pojawia się napis `disconnected`

![App](https://github.com/EllwartDawid/aplikacje-mobilne-21788-185IC/blob/master/lab6/ss/4.jpg)

![App](https://github.com/EllwartDawid/aplikacje-mobilne-21788-185IC/blob/master/lab6/ss/4a.jpg)

Na piątym ekranie została zaimplementowana obsługa zapisu danych aplikacji za pomocą `AsyncStorage`

Ekran piąty przedstawia dwa przyciski oraz pole do wpisywania danych, jeden z nich umożliwia zapisanie danych a drugi usunięcie wszystkich danych

![App](https://github.com/EllwartDawid/aplikacje-mobilne-21788-185IC/blob/master/lab6/ss/5.jpg)

Na szóstym ekranie została zaimplementowana obsługa synchronizacji danych aplikacji w przypadkach łączności z siecią i jej braku

Działanie strony polega na tym że stany podczas bycia offline są zapamiętywane i są nadal takie same podczas przywrócenia połączenia

![App](https://github.com/EllwartDawid/aplikacje-mobilne-21788-185IC/blob/master/lab6/ss/6.jpg)

![App](https://github.com/EllwartDawid/aplikacje-mobilne-21788-185IC/blob/master/lab6/ss/6a.jpg)


Plik `styles.js` przedstawia style do wszystkich stron

Style do każdej ze stron oddzielone odpowiednim komentarzem

```javascript
import { StyleSheet } from "react-native";

export default StyleSheet.create({

  //loading images

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    backgroundColor: "darkblue"
  },

  image: {
    width: 125,
    height: 100,
    margin: 40
  },

  //resizing images

  containerSlider: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange"
  },
  containerNav: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
  },

  slider: {
    width: 100
  },
  //network state

  containerState: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "green",
    marginBottom: 5
  },

  //storing data

  containerStoring: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    backgroundColor: "green",
    
  },

  button: {
    height: 45,
    width: 100,
    padding: 10,
    marginLeft: 120,
    marginTop: 20,
    backgroundColor: "azure",
    borderWidth: 5,
    borderRadius: 10,
    borderColor: "slategrey",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "black",
  },
  input: {
    alignItems: "center",
    backgroundColor: "azure",
  },
  

  //synchronizing data

  containerSync: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    backgroundColor: "brown"
  },


  //lazy loading

  containerLazy: {
    flex: 1,
    backgroundColor: "lightgreen",
    padding: 10,
    paddingTop: 20
  },
  buttonLazy: {
    padding: 10,
    margin: 5,
    backgroundColor: "lightblue",
    borderWidth: 10,
    borderRadius: 15,
    borderColor: "slategrey"
   },

});


```

