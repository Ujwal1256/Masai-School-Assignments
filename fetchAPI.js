async function getData() {
  const url = "https://jsonplaceholder.typicode.com/users";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const data = await response.json();

   let names = data.map(item => item["name"])
    
    console.log(names);
  } catch (error) {
    console.error(error.message);
  }
}
getData();