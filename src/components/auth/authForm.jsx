import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { useContext, useEffect, useState } from "react";
import { getUsersData } from "../../redux/Slices/authSlice";
import style from "../registration/registration.module.css";
import { themeContext } from "../../providers/theme";

export default function AuthForm() {
  const { usersData } = useSelector((state) => state.registrationReducer);
  const dispatch = useDispatch();
  const [authError, setAuthError] = useState();
  const { setUser } = useContext(themeContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => {
    const isAuth = usersData?.find(
      (item) => item.email === data.email && item.password === data.password
    );
    if (isAuth) {
      setUser(isAuth);
      reset();
    } else {
      setAuthError("Логин или пароль не правельны");
    }
  };

  useEffect(() => {
    dispatch(getUsersData());
  }, []);

  return (
    <form className={style.regist_Form} onSubmit={handleSubmit(onSubmit)}>
      <label>Войти)</label>
      <input
        type="email"
        placeholder="Email  . . ."
        {...register("email", { required: "Введите имя" })}
      />
      {errors.email && <p>{errors.email.message}</p>}
      <input
        type="password"
        placeholder="Пароль . . ."
        {...register("password", {
          required: "Введите пароль",
          minLength: {
            value: 6,
            message: "Пароль должен содержать больше 6 символов!",
          },
        })}
      />
      {errors.password && <p>{errors.password.message}</p>}
      <button className={style.submit_registForm} onSubmit={onSubmit}>
        Войти
      </button>
      <span>{authError}</span>
    </form>
  );
}
