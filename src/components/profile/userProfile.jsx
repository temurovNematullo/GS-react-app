import style from "./userProfile.module.css";
import ReactDOM from "react-dom";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { useContext } from "react";
import { themeContext } from "../../providers/theme";
import { putUserData } from "../../redux/Slices/authSlice";
import { set } from "lodash";

export default function UserProfile({ isOpen, setIsOpen }) {
  const modalRef = useRef(null);
  const dispatch = useDispatch();
  const { user, setUser } = useContext(themeContext);
  const [editMode, setEditMode] = useState(false);
  //   useEffect(() => {
  //     if (isOpen && modalRef.current) {
  //       disableBodyScroll(modalRef.current);
  //     }

  //     return () => {
  //       if (modalRef.current) {
  //         enableBodyScroll(modalRef.current);
  //       }
  //     };
  //   }, [isOpen]);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => {
    console.log(data);
    dispatch(putUserData({ id: user.id, formData: data }));
    setUser({
      ...user,
      name: data.name,
      email: data.email,
    });
    setEditMode(false);
  };

  return ReactDOM.createPortal(
    isOpen && (
      <div
        className={style.user_profile_overlay}
        onClick={() => setIsOpen(false)}
      >
        <div
          ref={modalRef}
          className={style.user_modal}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={style.user_profile}>
            <div className={style.user_profile_header}>
              <h2>Личный кабинет</h2>
            </div>
            <div className={style.user_profile_content}>
              {user ? (
                !editMode ? (
                  <>
                    <div>
                      <img
                        className={style.user_profile_image}
                        src={user.avatar}
                        alt="User Avatar"
                      />
                    </div>
                    <div className={style.user_info}>
                      <p>Имя: {user.name}</p>
                      <p>Email: {user.email}</p>
                      <button onClick={() => setUser(null)}>
                        Выйти из аккаунта
                      </button>
                      <button onClick={() => setEditMode(true)}>
                        Редактировать
                      </button>
                    </div>
                  </>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                      <img
                        className={style.user_profile_image}
                        src={user.avatar}
                        alt="User Avatar"
                      />
                      {/* <input
                        type="file"
                        accept="image/*"
                        {...register("avatar", {
                          required: "Выберите изоброжение",
                        })}
                      /> */}
                      {/* <button type="button" onClick={() => {}}>
                        Загрузить изображение
                      </button> */}
                    </div>
                    <div className={style.user_profile_form}>
                      <label htmlFor="name">Имя</label>
                      <input
                        type="text"
                        id="name"
                        {...register("name", {
                          required: "Это поле обязательно",
                        })}
                      />
                      {errors.name && <p>{errors.name.message}</p>}
                    </div>
                    <div className={style.user_profile_form}>
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        {...register("email", {
                          required: "Это поле обязательно",
                          pattern: {
                            value: /^\S+@\S+$/i,
                            message: "Неверный формат email",
                          },
                        })}
                      />
                      {errors.email && <p>{errors.email.message}</p>}
                    </div>
                    <button type="submit">Сохранить изменения</button>
                    <button onClick={() => setEditMode(false)}>Отменить</button>
                  </form>
                )
              ) : (
                <p>Пожалуйста, войдите в систему.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    ),
    document.getElementById("user-profile-root")
  );
}
