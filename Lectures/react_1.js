function App() {
  const fruitlist = [
    { name: "apple", img: "/apple.png" },
    { name: "banana", img: "/banana.png" },
    { name: "cherry", img: "/cherry.png"}
  ];
  
  return (
    <div>
      <h1>Fruit List</h1>
      <ul>
        {fruitlist.map(fruit => {
          <li key={fruit.name}>
            <img
              src={fruit.img}
              alt={fruit.name}
              width="300"
              height="300"
            />
          </li>
        })}
      </ul>
    </div>
  )
}

export default App;