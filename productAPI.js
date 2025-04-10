async function getData() {
    const url = "https://fakestoreapi.com/products";  // api url
    try {
      const response = await fetch(url); // wait for the response
      if (!response.ok) { // if api request is failed
        throw new Error(`Failed to fetch products. Please try again later`);
      }
  
      const data = await response.json();
      console.log(data);

      // using reduce method to calculate the total price
      let totalPrice = data.reduce((sum, product) => sum + product.price, 0);


      console.log("Total price :",totalPrice)
    } catch (error) { // handle the error and display error message
      console.error(error.message);
    }
  }
  getData();