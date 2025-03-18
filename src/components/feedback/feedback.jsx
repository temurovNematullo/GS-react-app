import { useForm } from "react-hook-form"
import '../../scss/style.css';

export default function Feedback (){

    const {register, handleSubmit, reset,
            formState:{errors}
        } = useForm({mode: 'onChange'})

    const onSubmit = (data) => {
        console.log(data)
    }

    return(
        <section class="callback">
        <form onSubmit={handleSubmit(onSubmit)} action="" class="calbackform">
            <h2 className="callback-title">Мы Вам перезвоним</h2>
            <ul className="calback_list">
                <li className="callback_list-item">
                    <div className="callback-text"> Если у вас возникли 
                    какие-то вопросы или проблемы, 
                    заполните форму и мы Вам перезвоним. </div>
                </li>
                <div className="callback-inputlist"> 
                    <input type="name" className="callback-input" placeholder="Ваше имя"{...register("name", {required: "Введите имя"})}/>
                    {errors.name && <p>{errors.name.message}</p>}
                    <input type="email" className="callback-input" placeholder="Ваш Email" {...register("email",{required: "Введите email"})}/>
                    {errors.email && <p>{errors.email.message}</p>}
                    <button type="submit" className="callback-button" >Отправить</button>
                </div>
            </ul>
        </form>
     </section>
    )
}