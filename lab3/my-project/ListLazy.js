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