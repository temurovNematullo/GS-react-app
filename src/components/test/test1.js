import { set, useForm } from "react-hook-form";
import { useEffect, useMemo, useState } from "react";
import "../../scss/style.css";
// const FormData = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     setName(data.name);
//     setEmail(data.email);
//     console.log("Form submitted:", data);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <input
//           type="name"
//           {...register("name", { required: "Input your name" })}
//         />
//         {errors.name?.message && (
//           <p class="error-message">{errors.name.message}</p>
//         )}
//         <input
//           type="email"
//           {...register("email", { required: "Input your email" })}
//         />
//         {errors.email?.message && (
//           <p class="error-message">{errors.email.message}</p>
//         )}
//         <button type="submit">Submit</button>
//       </form>
//       <div>
//         <h2>Submitted Data:</h2>
//         <p>Name: {name}</p>
//         <p>Email: {email}</p>
//       </div>
//     </div>
//   );
// };

// export default FormData;

// const ProductList = () => {
//   const products = [
//     { id: 1, name: "Ноутбук", price: 120000 },
//     { id: 2, name: "Смартфон", price: 45000 },
//     { id: 3, name: "Часы", price: 15000 },
//     { id: 4, name: "Планшет", price: 65000 },
//   ];

//   const [searchTerm, setSearchTerm] = useState();

//   const filerByPrice = searchTerm
//     ? products.filter((item) =>
//         item.name.toLowerCase().includes(searchTerm.toLowerCase())
//       )
//     : products;

//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value);
//   };
//   return (
//     <div>
//       <input
//         type="text"
//         value={searchTerm}
//         placeholder="Search..."
//         onChange={handleSearch}
//       />
//       <ul>
//         {filerByPrice.map((item) => (
//           <li key={item.id}>
//             <span>{item.name}--</span>
//             <span>{item.price}</span>
//           </li>
//         ))}
//         <p>Вы ввели: {searchTerm}</p>
//       </ul>
//     </div>
//   );
// };
// export default ProductList;

// const TodoList = () => {
//   const [todoData, setTododata] = useState([]);

//   const [inputValue, setInputValue] = useState("");

//   const handleChange = (event) => {
//     setInputValue(event.target.value);
//   };
//   const handleClick = () => {
//     if (inputValue.trim()) {
//       setTododata([...todoData, inputValue]);
//       setInputValue("");
//     }
//   };

//   const handleClickReset = (indexTodelete) => {
//     const newTodoData = todoData.filter(
//       (item, index) => index !== indexTodelete
//     );
//     setTododata(newTodoData);
//   };

//   return (
//     <div>
//       <input type="text" value={inputValue} onChange={handleChange} />
//       <button onClick={handleClick} />
//       {todoData.map((item, index) => (
//         <>
//           <div>{item}</div>
//           <button onClick={() => handleClickReset(index)}>Delete</button>
//         </>
//       ))}
//     </div>
//   );
// };
// export default TodoList;

// const UserList = () => {
//   const [users, setUsers] = useState(["Алиса", "Боб", "Чарли"]);
//   const [newUser, setNewUser] = useState("");

//   const handleAddUser = () => {
//     if (users.includes(newUser)) {
//       alert("Пользователь уже существует");
//       setNewUser("");
//     } else if (newUser.trim()) {
//       setUsers([...users, newUser]);
//       setNewUser("");
//     }
//   };

//   const handleDeleteUser = (name) => {
//     const updateUsers = users.filter((user) => user !== name);
//     setUsers(updateUsers);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={newUser}
//         onChange={(e) => setNewUser(e.target.value)}
//       />
//       <button onClick={handleAddUser}>Добавить</button>

//       <ul>
//         {users.map((user) => (
//           <li key={user}>
//             {user}
//             <button onClick={() => handleDeleteUser(user)}>Удалить</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default UserList;

// const ProductForm = () => {
//   const initialProducts = [
//     { id: 1, name: "Ноутбук", price: 120000 },
//     { id: 2, name: "Смартфон", price: 45000 },
//     { id: 3, name: "Часы", price: 15000 },
//     { id: 4, name: "Планшет", price: 65000 },
//   ];

//   const [products, setProducts] = useState(initialProducts);
//   const [newProduct, setNewProduct] = useState({});

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setNewProduct((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleAddProduct = () => {
//     setProducts((prevProducts) => [...prevProducts, newProduct]);
//   };

//   const handleClickReset = (id) => {
//     const updatedProducts = products.filter((item) => item.id !== id);
//     setProducts(updatedProducts);
//   };

//   const handleSearch = (event) => {
//     const searchTerm = event.target.value;
//     const filteredProducts = initialProducts.filter(
//       (item) => item.price <= searchTerm
//     );
//     setProducts(filteredProducts);
//   };

//   return (
//     <div>
//       <input
//         type="number"
//         name="id"
//         placeholder="Id..."
//         onChange={handleChange}
//       />
//       <input
//         type="text"
//         name="name"
//         placeholder="Название товара..."
//         onChange={handleChange}
//       />
//       <input
//         type="number"
//         name="price"
//         placeholder="Цена товара..."
//         onChange={handleChange}
//       />
//       <div>
//         Фильр
//         <input type="number" onChange={handleSearch} />
//       </div>
//       <button onClick={handleAddProduct}>Добавить товар</button>
//       {products.map((item) => (
//         <div key={item.id}>
//           <span>{item.id}--</span>
//           <span>{item.name}--</span>
//           <span>{item.price}</span>
//           <button onClick={() => handleClickReset(item.id)}>Удалить</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductForm;

// const Timer = () => {
//   const [seconds, setSeconds] = useState(0);

//   useEffect(() => {
//     setInterval(() => {
//       setSeconds(seconds + 1);
//     }, 1000);
//   }, [seconds]);

//   return (
//     <div>
//       <p>Прошло: {seconds} сек</p>
//     </div>
//   );
// };

// export default Timer;

import React, { useRef } from "react";

// const Timer = () => {
//   const [seconds, setSeconds] = useState(0);
//   const intervalRef = useRef(null); // 🧠 сохраняем значение между рендерами

//   const startTimer = () => {
//     if (intervalRef.current !== null) return; // таймер уже работает
//     intervalRef.current = setInterval(() => {
//       setSeconds((prev) => prev + 1);
//     }, 1000);
//   };

//   const stopTimer = () => {
//     clearInterval(intervalRef.current);
//     intervalRef.current = null; // очистили, можно стартовать снова
//   };

//   return (
//     <div>
//       <p>Прошло: {seconds} сек</p>
//       <button onClick={startTimer}>Старт</button>
//       <button onClick={stopTimer}>Стоп</button>
//     </div>
//   );
// };

// export default Timer;

// const FocusInput = () => {
//   // 👉 добавь useRef
//   const inputRef = useRef(null);

//   const handleClick = () => {
//     // 👉 установи фокус на input
//     inputRef.current.focus();
//   };

//   return (
//     <div>
//       <input ref={inputRef} type="text" placeholder="Нажми кнопку ↓" />
//       <button onClick={handleClick}>Фокус</button>
//     </div>
//   );
// };

// export default FocusInput;

// const SilentCounter = () => {
//   const counterRef = useRef(0);

//   const handleClick = () => {
//     counterRef.current += 1;
//     console.log("Текущее значение:", counterRef.current);
//   };

//   return (
//     <div>
//       <p>Нажимай и смотри в консоль!</p>
//       <button onClick={handleClick}>Увеличить</button>
//     </div>
//   );
// };

// export default SilentCounter;

// const FilterProducts = () => {
//   const products = [
//     { id: 1, title: "Замок A1", price: 12000, inStock: true },
//     { id: 2, title: "Замок B2", price: 8500, inStock: false },
//     { id: 3, title: "Замок C3", price: 15000, inStock: true },
//   ];

//   const [maxPrice, setMaxPrice] = useState("");
//   const [inStockOnly, setInStockOnly] = useState(false);

//   const filteredProductss = useMemo(() => {
//     return products.filter((item) => {
//       const isInStock = inStockOnly ? item.inStock : true;
//       const isPriceOk = !maxPrice || item.price <= maxPrice;
//       return isInStock && isPriceOk;
//     });
//   }, [maxPrice, inStockOnly]);

//   return (
//     <>
//       <label>
//         <input
//           className="hasfilter"
//           type="checkbox"
//           checked={inStockOnly}
//           onChange={(e) => setInStockOnly(e.target.checked)}
//         />
//         Только в наличии
//       </label>

//       <input
//         className="maxPriceFilter"
//         type="number"
//         name="maxPriceFilter"
//         placeholder="Фильтр по максимальной цене"
//         onChange={(e) => setMaxPrice(e.target.value)}
//       />
//       {filteredProductss.map((item) => (
//         <pre>
//           <span>{item.title}</span>
//           <div></div>
//           <span>{item.price}</span>
//           <div></div>
//           {item.inStock ? "В наличии" : "Нет в наличии"}
//         </pre>
//       ))}
//     </>
//   );
// };

// export default FilterProducts;

const FilterProduct = () => {
  const products = [
    { id: 1, name: "Кресло", price: 7000, inStock: true },
    { id: 2, name: "Стол", price: 12000, inStock: false },
    { id: 3, name: "Шкаф", price: 9000, inStock: true },
    { id: 4, name: "Тумбочка", price: 5000, inStock: false },
  ];

  const [isInStock, setIsInStock] = useState(false);

  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      const isHave = isInStock ? item.inStock : true;
      return isHave;
    });
  }, [isInStock]);

  console.log(isInStock);
  return (
    <>
      <input
        type="checkbox"
        className="hasfilter"
        name="hasProduct"
        checked={isInStock}
        onChange={(e) => setIsInStock(e.target.checked)}
      />

      {filteredProducts.map((item) => (
        <>
          <span>{item.name}</span>

          <div>{item.price}</div>
          <div>{item.inStock ? "Have" : "Dont have"}</div>
        </>
      ))}
    </>
  );
};

export default FilterProduct;
