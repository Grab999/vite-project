import Fruit from "./Fruit";
export default function Fruits () {
    //const fruits = ["Apple", "Orange", "Banana",];
    const fruits = [
        { name: "Apple", price: 30, emoji: "🍎", soldout: true },
        { name: "Orange", price: 20, emoji: "🍊", soldout: false},
        { name: "Banana", price: 20, emoji: "🍌", soldout: false},
        { name: "mango", price: 30, emoji: "🥭", soldout: true},
        { name: "cake", price: 30, emoji: "🎂", soldout: true},
    ]
    return (
       <div>
        <ul>
            {fruits.map((fruit) => (
             <Fruit
              key={fruit.name}
              name={fruit.name}
              price={fruit.price}
              emoji={fruit.emoji}
              soldout={fruit.soldout} 
              />
            ))}
        </ul>
       </div>
    );
    
}