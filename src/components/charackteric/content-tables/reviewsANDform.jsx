import { useForm } from "react-hook-form"
import "../../../scss/style.css"
import refresh from "../../../assets/icon/refresh.svg"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchReviews } from "../../../redux/Slices/reviewsSlice"

export default function ReviewsAndForm(){
    const dispatch = useDispatch()
const {reviews} = useSelector((state)=> state.reviewsReducer)
console.log(reviews)

useEffect(()=>{
    dispatch(fetchReviews())
},[])

const{
    register,
    handleSubmit,
    reset,
    formState:{errors}
}=useForm({mode: "onBlur"})

const onSubmit =(data)=>{
console.log(data)
}

    return(

<div className="tables-content tables--reviews active">
<div class="tables-content tables--reviews" >
    <div class="reviewsConteiner">
    <div class="reviews--container" id="reviews-container">
        {reviews.map((item)=> (
             <div class="tables--reviews__list">
             <div class="reviews--head">
                 <p class="reviews--clientName">{item.name}</p>
                 <time datetime="2021-08-20">{item.data}</time>
                 <div class="reviews--star"><span class="characteric-star_empty"></span><span class="characteric-star_empty"></span><span class="characteric-star_empty"></span><span class="characteric-star "></span><span class="characteric-star "></span></div>
             </div>
             <div class="text--reviews">
                 <span>{item.text_reviews}</span>
             </div>
             <div class="reviews--feedback">
                 <div class="reviews--answer">
                     <img src="/icon/answer.svg" alt="" loading="lazy"/>
                     <span>Ответить</span>
                 </div>
                 <div class="reviews--comment">
                     <img src="/icon/comment.svg" alt="" loading="lazy"/>
                     <span class="comments--count">Комментарий</span>
                 </div>
             </div>
         </div>
         ))}
   
          
    </div>
  
    <div class="reviews--feedback__button" id="toggle-reviews-btn">
        <img src={refresh} alt="Обновить"/>
        <span>Показать еще</span>
    </div>
</div>
</div> 

 <form onSubmit={handleSubmit(onSubmit)} class="reviews--form__add">
<div class="reviews-inputlist"> 
<span>Ваша оценка</span>
<div class="reviews--star">
    <span class="characteric-star_empty"></span>
    <span class="characteric-star_empty"></span>
    <span class="characteric-star_empty"></span>
    <span class="characteric-star_empty"></span>
    <span class="characteric-star_empty"></span>
 </div>

 <span>Ваше Имя</span>
 <input type="name" class="review-input" placeholder="Ваше имя"{...register("name",{required: "Введите имя"})}/>
<span>Ваша Email</span>
<input type="email" class="review-input" placeholder="Ваш Email"{...register("email",{required: "Введите email"})}/>
<span>Ваш комментарий</span>
<textarea class="review--textarea" name="comment" id="" placeholder="Введите Ваш комментарий"{...register("text",{required: "Введите текст"})}/>
<button class="review-button">Отправить отзыв</button>
</div>
</form>
</div>
    )
}
