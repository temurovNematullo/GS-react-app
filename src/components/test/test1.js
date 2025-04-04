import { set, useForm } from "react-hook-form";
import { useState } from "react";
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

const ProductForm = () => {
  const initialProducts = [
    { id: 1, name: "Ноутбук", price: 120000 },
    { id: 2, name: "Смартфон", price: 45000 },
    { id: 3, name: "Часы", price: 15000 },
    { id: 4, name: "Планшет", price: 65000 },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [newProduct, setNewProduct] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewProduct((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddProduct = () => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  const handleClickReset = (id) => {
    const updatedProducts = products.filter((item) => item.id !== id);
    setProducts(updatedProducts);
  };

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    const filteredProducts = initialProducts.filter(
      (item) => item.price <= searchTerm
    );
    setProducts(filteredProducts);
  };

  return (
    <div>
      <input
        type="number"
        name="id"
        placeholder="Id..."
        onChange={handleChange}
      />
      <input
        type="text"
        name="name"
        placeholder="Название товара..."
        onChange={handleChange}
      />
      <input
        type="number"
        name="price"
        placeholder="Цена товара..."
        onChange={handleChange}
      />
      <div>
        Фильр
        <input type="number" onChange={handleSearch} />
      </div>
      <button onClick={handleAddProduct}>Добавить товар</button>
      {products.map((item) => (
        <div key={item.id}>
          <span>{item.id}--</span>
          <span>{item.name}--</span>
          <span>{item.price}</span>
          <button onClick={() => handleClickReset(item.id)}>Удалить</button>
        </div>
      ))}
    </div>
  );
};

export default ProductForm;
