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