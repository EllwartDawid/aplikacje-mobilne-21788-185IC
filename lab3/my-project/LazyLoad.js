import React, { useState, useEffect } from "react";
import * as api from "./api";
import ListLazy from "./ListLazy";
export default function LazyLoad() {
 function fetchItems() {
 return api
 .fetchItems()
 .then(resp => resp.json())
 .then(({ items }) => {
 setData(
 items.map((value, i) => ({
 key: i.toString(),
 value
 }))
 );
 });
 }
 const [data, setData] = useState([]);
 const [asc, setAsc] = useState(true);
 const [filter, setFilter] = useState("");
 useEffect(() => {
 fetchItems();
 }, []);
 return <ListLazy data={data} fetchItems={fetchItems} />;
}

