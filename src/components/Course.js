import Python from "../images/pyhthon.jpg"
import Web from "../images/web.png"
import ui_ux from "../images/ui_ux.jpg"
import java from "../images/java.png"
function Couse() {
    return (

        <div class="recommended ">
            <h1 class="recom_h1"> Recommended For You </h1>
            <p class="recom_p1"> Pick the best fit</p>
            <div class="recom_container">

                <div class="couse_card1">
                    <img class="python" src={Python} alt=" python"></img>
                    <h3> 2024 Python Data Visualisation Masterclass</h3>
                    <p class="card1_p1"> Col steel</p>
                    <p class="card1_p2"> 4.9 ⭐⭐⭐⭐⭐</p>
                    <p class="card1_p3">$449 <del>2999</del></p>
                </div>

                <div class="couse_card2">
                    <img class="web" src={Web} alt=" web Development"></img>
                        <h3> Web Developement Bootcamp 2023/ Advance</h3>
                        <p class="card1_p1"> Col steel</p>
                        <p class="card1_p2"> 3.9⭐⭐⭐⭐</p>
                        <p class="card1_p3">$449 <del>2999</del></p>
                </div>

                <div class="couse_card3">
                <img class="ui_ux" src={ui_ux} alt=" ui&ux"></img>
                <h3> Master UI/UX Design With Figma</h3>
                <p class="card1_p1"> Col steel</p>
                <p class="card1_p2"> 2.9⭐⭐</p>
                <p class="card1_p3">$449 <del>1999</del></p>
               </div>
                 
               <div class="couse_card4">
                <img class="java" src= {java} alt=" java"></img>
                <h3>  Addvance Java Core Training</h3>
                <p class="card1_p1"> Col steel</p>
                <p class="card1_p2"> 4.9⭐⭐⭐⭐⭐</p>
                <p class="card1_p3">$449 <del>2999</del></p>
               </div>
            </div>
        </div>
    )
}
export default Couse