import { useForm } from "react-hook-form";
import style from "./registration.module.css";
import { useDispatch, useSelector } from "react-redux";
import { postUserData, getUsersData } from "../../redux/Slices/authSlice";
import { useEffect, useState } from "react";

export default function Registration() {
  const dispatch = useDispatch();
  const { usersData } = useSelector((state) => state.registrationReducer);
  console.log(usersData);
  const [error, setError] = useState();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (usersData?.some((item) => item.email !== data.email)) {
      dispatch(postUserData(data));
      reset();
    } else {
      setError("Пользователь с этим email уже зарегистрирован)");
    }
  };

  useEffect(() => {
    dispatch(getUsersData());
  }, []);

  return (
    <form className={style.regist_Form} onSubmit={handleSubmit(onSubmit)}>
      <label>Пройдите регистрацию.)</label>
      <input
        placeholder="Имя  . . ."
        type="name"
        {...register("name", { required: "Введите имя!" })}
      />
      {errors.name && <p>{errors.name.message}</p>}
      <input
        placeholder="Email . . ."
        type="email"
        {...register("email", {
          required: "Введите адресс электронной почты!",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Некорректный email",
          },
        })}
      />
      {errors.email && <p>{errors.email.message}</p>}
      <input
        placeholder="Пароль . . ."
        type="password"
        {...register("password", {
          required: "Введите пароль",
          minLength: {
            value: 6,
            message: "Пароль должен содержать больше 6 символов",
          },
        })}
      />
      {errors.password && <p>{errors.password.message}</p>}
      <span>{error}</span>
      <button className={style.submit_registForm} onClick={onsubmit}>
        Отправить
      </button>
    </form>
  );
}
