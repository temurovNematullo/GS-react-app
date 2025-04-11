import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../../scss/style.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../redux/Slices/categoriesSlice";
import { themeContext } from "../../providers/theme";

const Categories = () => {
  const dispatch = useDispatch();
  const { theme } = useContext(themeContext);
  const { categories } = useSelector((state) => state.categories);

  const navigate = useNavigate();

  const handleClick = (link) => {
    navigate(link);
  };

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <section class={`category category__${theme}`}>
      <h2 class="category-title">Категории</h2>
      <div class="category_info">
        <ul class="category_info-list">
          {categories.map((item) => (
            <li
              class={`category_info-item category_item__${theme}`}
              key={item.id}
            >
              <img className="category_Img" src={item.image} />
              <span class={`category_info-text category_text__${theme}`}>
                {item.name}
              </span>
              <button
                onClick={() => handleClick(item.id)}
                class={`category_info__button category_info__button_${theme}`}
              >
                Перейти
              </button>
            </li>
          ))}
        </ul>
      </div>

      <NavLink to="/Все категории">
        <button class="category-button">Все категории</button>
      </NavLink>
    </section>
  );
};

export default Categories;
