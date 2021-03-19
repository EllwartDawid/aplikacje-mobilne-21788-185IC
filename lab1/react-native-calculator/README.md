# Kalkulator z wykorzystaniem react-native i expo

# Do utworzenia projektu konieczna była instalacja mathjs: `npm install mathjs`

# Wymaga również była instalacja expo-constants: `npm install expo-constants`

# Widok z działającej aplikacji:

![App](https://github.com/EllwartDawid/aplikacje-mobilne-21788-185IC/blob/master/labb1/ss/calculator.PNG)

# Utworzyłem cztery komponenty:

# ExpressionBox:

```javascript
import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

export default class ExpressionBox extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Text style={styles.expressionbox}>{this.props.expression}</Text>
      );
  }
}

const styles = StyleSheet.create({
  expressionbox: {
    flex: 1,
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: '#80cbc4',
    fontSize: 32,
    textAlign: 'right',
    color: '#212121',
  }
});
```

# Key:

```javascript
import React from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';

export default class Key extends React.Component {
  constructor(props) {
    super(props);
    this._onPress = this._onPress.bind(this);
  }

  _onPress() {
    this.props.echoSymbol(this.props.symbol);
  }

  render() {
    return (
      <TouchableHighlight
        style={this.props.op ? [styles.key, styles.opkey] : styles.key}
        onPress={this._onPress}>
        <View>
          <Text style={[styles.keytext, this.props.op && styles.opkeytext]}>
            {this.props.symbol}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  key: {
    borderRadius: 30,
    backgroundColor: '#b2fef7',
    borderColor: '#0000ff',
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
  },
  keytext: {
    fontSize: 20
  },
  opkey: {
    backgroundColor: '#4f9a94',
    marginRight: 10,
  },
  opkeytext: {
    color: '#ffffff',
  },
});
```

# NumPad:

```javascript
import React from 'react';
import {
  View,
  ScrollView,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';
import Key from './Key.js'

export default class NumPad extends React.Component {
  constructor(props) {
    super(props);
    this._echoSymbol = this._echoSymbol.bind(this);
  }

  _echoSymbol(symbol) {
    if (symbol === '=') {
      this.props.calculateResult();
    } else if (symbol === 'DEL') {
      this.props.deletePressed();
    } else {
      this.props.assembleExpression(symbol);
    }
  }

  render() {
    return (
      <View style={styles.numpad}>
        <View style={styles.numgroup}>
          <Key symbol={'1'} echoSymbol={this._echoSymbol}/>
          <Key symbol={'2'} echoSymbol={this._echoSymbol}/>
          <Key symbol={'3'} echoSymbol={this._echoSymbol}/>
          <Key symbol={'4'} echoSymbol={this._echoSymbol}/>
        </View>
        <View style={styles.numgroup}>
          <Key symbol={'5'} echoSymbol={this._echoSymbol}/>
          <Key symbol={'6'} echoSymbol={this._echoSymbol}/>
          <Key symbol={'7'} echoSymbol={this._echoSymbol}/>
          <Key symbol={'8'} echoSymbol={this._echoSymbol}/>
        </View>
         <View style={styles.numgroup}>
          <Key symbol={'9'} echoSymbol={this._echoSymbol}/>
          <Key symbol={'0'} echoSymbol={this._echoSymbol}/>
          <Key symbol={'.'} echoSymbol={this._echoSymbol}/>
          <Key symbol={'='} echoSymbol={this._echoSymbol}/>
        </View>
        <ScrollView horizontal={true}>
          <Key op={true} symbol={'DEL'} echoSymbol={this._echoSymbol}/>
          <Key op={true} symbol={'/'} echoSymbol={this._echoSymbol}/>
          <Key op={true} symbol={'+'} echoSymbol={this._echoSymbol}/>
          <Key op={true} symbol={'-'} echoSymbol={this._echoSymbol}/>
          <Key op={true} symbol={'*'} echoSymbol={this._echoSymbol}/>
          <Key op={true} symbol={'^'} echoSymbol={this._echoSymbol}/>
          <Key op={true} symbol={'('} echoSymbol={this._echoSymbol}/>
          <Key op={true} symbol={')'} echoSymbol={this._echoSymbol}/>
          <Key op={true} symbol={'sin'} echoSymbol={this._echoSymbol}/>
          <Key op={true} symbol={'cos'} echoSymbol={this._echoSymbol}/>
          <Key op={true} symbol={'tan'} echoSymbol={this._echoSymbol}/>
      </ScrollView>
      </View>
      );
  }
}

const styles = StyleSheet.create({
  numpad: {
    flex: 2,
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 8,
    paddingBottom: 8,
  },
  numgroup: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
```

# ResultBox:

```javascript
import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default class ResultBox extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Text style={styles.resultbox}>{this.props.result}</Text>
      )
  }
}

const styles = StyleSheet.create({
  resultbox: {
    flex: 1,
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: '#80cbc4',
    fontSize: 26,
    textAlign: 'right',
    color: '#424242',
  },
});
```

# Plik App.js:

```javascript
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  Constants  from 'expo-constants';

import ExpressionBox from './components/ExpressionBox.js';
import ResultBox from './components/ResultBox.js';
import NumPad from './components/NumPad.js';
import { evaluate } from 'mathjs';

// We are using math.js library to calculate results from any string expression
const math = require('mathjs');

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {lastexpression: [], expression: '', result: ''}

    this._assembleExpression = this._assembleExpression.bind(this);
    this._calculateResult = this._calculateResult.bind(this);
    this._rollbackExpression = this._rollbackExpression.bind(this);
  }

  _rollbackExpression() {
    this.state.expression && this.setState((prevState) => ({
      expression: prevState.lastexpression.pop(),
      lastexpression: prevState.lastexpression
    }));
  }

  _assembleExpression(symbol) {
    this.setState((prevState) => ({
      lastexpression: [...prevState.lastexpression, prevState.expression],
      expression: prevState.expression + symbol
    }));
  }

  _calculateResult() {
    let result;
    //console.log(math.sin(4));
    try {
      result = math.evaluate(this.state.expression);
    } catch (e) {
      result = 'Error';
    }
    this.setState({result: result});
  }

  render() {
    return (
      <View style={styles.container}>
        <ExpressionBox expression={this.state.expression}/>
        <ResultBox result={this.state.result}/>
        <NumPad
          assembleExpression={this._assembleExpression}
          calculateResult={this._calculateResult}
          deletePressed={this._rollbackExpression}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});
```
