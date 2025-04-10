function createInventoryItem (name, category,price){
  
  let item = {
    name : name,
    category: category,
    price: price,
    describeItem: function (){
      console.log(`Item: ${name}, Category: ${category}, Price: ${price}`)
    }
  };
  
  return item;
}

function addItemDiscount(item,discount){
   let newItem = {
     applyDiscount : function(){
                 let newprice = item.price - (10/100 * item.price);
                console.log(`Item: ${item.name}, Category: ${item.category}, Price: ${newprice}`)

     }
   };
  return newItem;
}

const item = createInventoryItem("Laptop", "Electronics", 1500);
item.describeItem();

const discountedItem = addItemDiscount(item, 10);
discountedItem.applyDiscount();
