# LABORATORIUM NUMER 5

# obsługa gestów użytkownika

Utworzone zostały cztery ekrany + ekran `home`, który zawiera guziki do dowolnych stron.

Każdy inaczej ostylowany za pomocą pliku `styles.js`

Na każdej stronie zostały utworzone guziki które umożliwiają przejście do pozostałych dwóch stron

Wygląd strony Home:

![App](https://github.com/EllwartDawid/aplikacje-mobilne-21788-185IC/blob/master/lab5/ss/home.jpg)

Pierwsze dwie strony przedstawiają zastosowanie `ScrollView`

Każda ze stron została ostylowana w inny sposób

Dzięki `ScrollView`, możemy przewijać stronę, nie musimy wszystkiego upychać na jednej stronie

Po prawej stronie na zrzutach ekranu można zauważyć pasek przewijania (scrollbar)

![App](https://github.com/EllwartDawid/aplikacje-mobilne-21788-185IC/blob/master/lab5/ss/scroll.jpg)

![App](https://github.com/EllwartDawid/aplikacje-mobilne-21788-185IC/blob/master/lab5/ss/scroll1.jpg)

Na trzecim ekranie zostały zastosowane `TouchableOpacity` i `TouchableHighlight`

W pliku `Button.js` przedstawione zostały zachowania konkretnych przycisków

Inaczej zachowuje się przycisk Opacity a inaczej Highlight

Zachowania przycisków przedstawione na poniższych zrzutach ekranów:

![App](https://github.com/EllwartDawid/aplikacje-mobilne-21788-185IC/blob/master/lab5/ss/touch.jpg)

![App](https://github.com/EllwartDawid/aplikacje-mobilne-21788-185IC/blob/master/lab5/ss/touch1.jpg)

Na czwartym ekranie został zastosowany `Swipeable`, obsługa przesunięć palcem

W pliku `Swipeable.js` zostało przedstawione działanie strony, zostało przedstawione co ma się wydarzyć po przesunięciu przycisku

W naszym przypadku przycisk znika

![App](https://github.com/EllwartDawid/aplikacje-mobilne-21788-185IC/blob/master/lab5/ss/swipe.jpg)


Plik `styles.js` przedstawia style do wszystkich stron

Style do każdej ze stron oddzielone odpowiednim komentarzem

```javascript
import { StyleSheet } from "react-native";

export default StyleSheet.create({

  //Scroll

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    backgroundColor: "darkorange"
  },

  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 5,
    color: "blue"
  },

  scroll: {
    height: 100,
    alignSelf: "stretch"
  },

  scrollItem: {
    margin: 10,
    alignSelf: "center"
  },

  //Scrolling

  containerScrolling: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    backgroundColor: "darkblue"
  },

  textScrolling: {
    fontSize: 50,
    textAlign: "left",
    margin: 17,
    color: "green"
  },

  scrollScrolling: {
    height: 1,
    alignSelf: "stretch"
  },

  scrollItemScrolling: {
    margin: 20,
    alignSelf: "stretch"
  },

  //Touch

  containerTouch: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    backgroundColor: "lightblue"
  },

  buttonTouch: {
    padding: 10,
    margin: 5,
    backgroundColor: "azure",
    borderWidth: 10,
    borderRadius: 10,
    borderColor: "blue"
  },

  buttonTextTouch: {
    color: "blue"
  },

  //Swipe

  containerSwipe: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "stretch",
    backgroundColor: "lightgreen"
  },

  swipeContainer: {
    flex: 1,
    flexDirection: "row",
    width: 200,
    height: 30,
    marginTop: 50,
    marginLeft: 70
  },

  swipeItem: {
    width: 200,
    height: 30,
    backgroundColor: "lightblue",
    justifyContent: "center",
    borderWidth: 5,
    borderRadius: 40,
    borderColor: "orange"
  },

  swipeItemText: {
    textAlign: "center",
    color: "darkorange",
  },

  swipeBlank: {
    width: 200,
    height: 30
  },
});

```

