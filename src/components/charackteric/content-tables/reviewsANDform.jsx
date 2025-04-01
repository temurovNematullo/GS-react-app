import { useForm } from "react-hook-form"
import "../../../scss/style.css"
import refresh from "../../../assets/icon/refresh.svg"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { fetchReviews, postReviews, setLimit } from "../../../redux/Slices/reviewsSlice"
import { useParams } from "react-router"


export default function ReviewsAndForm(){
    const dispatch = useDispatch()
const productId= useParams()
const {reviews, page} = useSelector((state)=> state.reviewsReducer)
const rating = [1,2,3,4,5]
const reviewsCount = reviews?.length || 0;
const [selectedStars, setSelectedStars] = useState()

useEffect(()=>{
    dispatch(fetchReviews(productId.id))
},[page, reviewsCount])

const{
    register,
    handleSubmit,
    reset,
    formState:{errors}
}=useForm({mode: "onBlur"})

const handleClick = (ratingItem) => {
    setSelectedStars(ratingItem);
  };

const formatDate = () => {
    const options = { day: "numeric", month: "long", year: "numeric" };
    return new Date().toLocaleDateString("ru-RU", options);
  };


const onSubmit =(data)=>{
const reviewsData = ({...data, date: formatDate(),  rating: selectedStars, productId: productId.id })
dispatch(postReviews(reviewsData))
reset()
setSelectedStars(0)
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
                 <time datetime="2021-08-20">{item.date}</time>

                 <div class="reviews--star">
{rating.map((ratingItem)=> (  <span
          key={ratingItem}
          className={ratingItem <= item.rating  ? "characteric-star_empty" : "characteric-star"}
        />))}
 </div>
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
  
    <div onClick={()=> dispatch(setLimit())} class="reviews--feedback__button" id="toggle-reviews-btn">
        <img src={refresh} alt="Обновить"/>
        <span>Показать еще</span>
    </div>
</div>
</div> 

 <form onSubmit={handleSubmit(onSubmit)} class="reviews--form__add">
<div class="reviews-inputlist"> 
<span>Ваша оценка</span>
<div class="reviews--star">
{rating.map((ratingItem)=> (  <span
          key={ratingItem}
          className={ratingItem <= selectedStars  ? "characteric-star_empty" : "characteric-star"}
          onClick={() => handleClick(ratingItem)}  // Правильно: передаём функцию
        />))}
 </div>

 <span>Ваше Имя</span>
 <input type="name" class="review-input" placeholder="Ваше имя"{...register("name",{required: "Введите имя"})}/>
 {errors.name?.message && <p class="error-message">{errors.name.message}</p>}
<span>Ваша Email</span>
<input type="email" class="review-input" placeholder="Ваш Email"{...register("email",{required: "Введите email"})}/>
<span>Ваш комментарий</span>
<textarea class="review--textarea" name="comment" id="" placeholder="Введите Ваш комментарий"{...register("text_reviews",{required: "Введите текст"})}/>
<button class="review-button">Отправить отзыв</button>
</div>
</form>
</div>
    )
}
