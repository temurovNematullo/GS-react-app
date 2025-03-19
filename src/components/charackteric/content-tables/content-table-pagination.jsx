import { useState } from "react"
import CharacteristicTable from "../characteristicTable";
import DescriptionTables from "./description";
import ReviewsAndForm from "./reviewsANDform";

export default function Tabulate(){

const [activeTab, setactiveTab] = useState("characteric")

console.log(activeTab)
    return(
        <>
        <div class="vcladki">
        <ul class="vcladki_list">
            <li class="vcladki_item active" data-tab="characteristics" onClick={()=> setactiveTab("characteric")} >Характеристики</li>
            <li  class="vcladki_item" data-tab="description" onClick={()=> setactiveTab("description")} >Описание</li>
            <li class="vcladki_item" data-tab="reviews" onClick={()=> setactiveTab("reviews")}>Отзывы</li>
        </ul>
    </div>

{activeTab === "characteric" && <CharacteristicTable />}
{activeTab === "description" && <DescriptionTables />}
{activeTab === "reviews" && <ReviewsAndForm/>}

    </>
    )
}