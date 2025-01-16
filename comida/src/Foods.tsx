import { MenuItem } from "./entities/entities";

interface FoodsProps {
    foodItems: MenuItem[];
   }
   function Foods(props: FoodsProps) {
    return (
    <>
    <h4 className="foodTitle">Choose from our Menu</h4>
    <ul className="ulFoods">
    {props.foodItems.map((item) => {
    return (
    <li key={item.id} className="liFoods">
    <img
    className="foodImg"
    src={`/img/${item.image}`}
    alt={item.name}
    />
    <div className="foodItem">
    <p className="foodDesc">{item.desc}</p>
    <p className="foodPrice">{item.price}$</p>
    </div>
    </li>
    );
    })}
    </ul>
    </>
    );
   };
   export default Foods; 