let items=['Leonardo','Alisson','John','Sarah'];
items.forEach(salute)

function salute(item,index,arr){
  return  arr[index] = "Hello, " + item
}

console.log(items.join("\n"))