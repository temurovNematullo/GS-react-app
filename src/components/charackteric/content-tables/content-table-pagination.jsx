import { useState } from "react"
import CharacteristicTable from "../characteristicTable";
import DescriptionTables from "./description";
import ReviewsAndForm from "./reviewsANDform";
import { forwardRef } from "react";

const Tabulate = forwardRef ((props, ref)=>{

const [activeTab, setactiveTab] = useState("characteric")

console.log(activeTab)
    return(
        <>
        <div class="vcladki">
        <ul class="vcladki_list">
            <li class={`vcladki_item ${activeTab === "characteric" ? "active" : ""}`}  data-tab="characteric" onClick={()=> setactiveTab("characteric") } >Характеристики</li>
            <li  class={`vcladki_item ${activeTab === "description" ? "active" : ""}`}  data-tab="description" onClick={()=> setactiveTab("description")} >Описание</li>
            <li ref={ref} class={`vcladki_item ${activeTab === "reviews" ? "active" : ""}`}  data-tab="reviews" onClick={()=> setactiveTab("reviews")}>Отзывы</li>
        </ul>
    </div>

{activeTab === "characteric" && <CharacteristicTable  />}
{activeTab === "description" && <DescriptionTables />}
{activeTab === "reviews" && <ReviewsAndForm />}

    </>
    )
    })

    export default Tabulate