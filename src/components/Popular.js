import Python from "../images/xiaole-tao-Fo-HQUlRGkU-unsplash (1).jpg"
import Web from "../images/emile-perron-xrVDYZRGdw4-unsplash.jpg"
import ui_ux from "../images/xiaole-tao-Fo-HQUlRGkU-unsplash.jpg"
import java from "../images/java.png"

function Popular() {
    return (
        <div class="popular">

            <h1 class="popular_h1"> Most Popular</h1>
            <p class="popular_p"> Pick the best</p>

            <div class="popular_cards_1">

                <div class="couse_card5">
                    <img class="web" src={Web} alt=" web Development"></img>
                    <h3> 2024 Python Data Visualisation Masterclass</h3>
                    <p class="card1_p1"> Col steel</p>
                    <p class="card1_p2"> 3.9⭐⭐⭐⭐</p>
                    <p class="card1_p3">$449 <del>1999</del></p>
                </div>

                <div class="couse_card4">
                    <img class="java" src={java} alt=" java"></img>
                    <h3>  Addvance Java Core Training</h3>
                    <p class="card1_p1"> Col steel</p>
                    <p class="card1_p2"> 4.9⭐⭐⭐⭐⭐</p>
                    <p class="card1_p3">$449 <del>2999</del></p>
                </div>

                <div class="couse_card3">
                    <img class="ui_ux" src={ui_ux} alt=" ui&ux"></img>
                    <h3> Master UI/UX Design With Figma</h3>
                    <p class="card1_p1"> Col steel</p>
                    <p class="card1_p2"> 2.9⭐⭐</p>
                    <p class="card1_p3">$449 <del>1999</del></p>
                </div>

                <div class="couse_card1">
                    <img class="python" src={Python} alt=" python"></img>
                    <h3> 2024 Python Data Visualisation Masterclass</h3>
                    <p class="card1_p1"> Col steel</p>
                    <p class="card1_p2"> 4.9 ⭐⭐⭐⭐⭐</p>
                    <p class="card1_p3">$449 <del>2999</del></p>
                </div>


            </div>

            <div class="popular_cards_2">

                <div class="couse_card4">
                    <img class="java" src={java} alt=" java"></img>
                    <h3>  Addvance Java Core Training</h3>
                    <p class="card1_p1"> Col steel</p>
                    <p class="card1_p2"> 4.9⭐⭐⭐⭐⭐</p>
                    <p class="card1_p3">$449 <del>2999</del></p>
                </div>

                <div class="couse_card1">
                    <img class="python" src={Python} alt=" python"></img>
                    <h3> 2024 Python Data Visualisation Masterclass</h3>
                    <p class="card1_p1"> Col steel</p>
                    <p class="card1_p2"> 4.9 ⭐⭐⭐⭐⭐</p>
                    <p class="card1_p3">$449 <del>2999</del></p>
                </div>

                <div class="couse_card5">
                    <img class="web" src={Web} alt=" web Development"></img>
                    <h3> 2024 Python Data Visualisation Masterclass</h3>
                    <p class="card1_p1"> Col steel</p>
                    <p class="card1_p2"> 3.9⭐⭐⭐⭐</p>
                    <p class="card1_p3">$449 <del>1999</del></p>
                </div>

                <div class="couse_card3">
                    <img class="ui_ux" src={ui_ux} alt=" ui&ux"></img>
                    <h3> Master UI/UX Design With Figma</h3>
                    <p class="card1_p1"> Col steel</p>
                    <p class="card1_p2"> 2.9⭐⭐</p>
                    <p class="card1_p3">$449 <del>1999</del></p>
                </div>

            </div>

        </div>
    )
}




export default Popular