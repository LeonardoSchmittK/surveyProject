const items = [
  (item1 = {
    name: "pen",
    object: true,
  }),
  (item2 = {
    name: "love",
    object: false,
  }),
  (item3 = {
    name: "computer",
    object: true,
  }),
  (item4 = {
    name: "cloud",
    object: false,
  }),
  (item5 = {
    name: "car",
    object: true,
  }),
];

let objects = [];

const filterItems = items.filter((item, index, arr) => {
  if (item.object === true) {
    objects.push(item.name);
  }
  return objects;
});

console.log(objects);
