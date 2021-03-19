import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import styles from "./styles";
import ProgressBar from "./ProgressBar";
export default function Third() {
 return (
 <View style={styles.content3}>
 <ActivityIndicator size="large" color="blue" />
 <Text style={styles.content3}>Trzecia strona w naszym Step Progress</Text>
 
 </View>
 );
}
Third.navigationOptions = ({ navigation }) => ({
 headerTitle: (
 <View style={styles.progress}>
 <Text style={styles.title}>Third</Text>
 <ProgressBar
 label={false}
 progress={navigation.state.params.progress(
 navigation.state.routeName)}
 />
 </View>
 ),
 headerLeft: (
 <Text style={styles.przejscie3}
 onPress={() => navigation.navigate("Second",
 navigation.state.params)}
 >
 Second
 </Text>
 ),
 headerRight: (
 <Text style={styles.przejscie3}
 onPress={() => navigation.navigate("First",
 navigation.state.params)}
 >
 First
 </Text>
 )
});