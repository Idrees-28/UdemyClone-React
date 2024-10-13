import sale from "../images/sale_img.jpg"

function Saleimg(){
    return(
      <div class="sale_image">
      <img class="sale_img" src={sale} alt="sale image"></img>
       
      <div class="sale__box">
          <h2>Udemy Flash Sale! 24 Hours to Save </h2>
          <p>Get top Courses for just  499. just one day to save but a life time to learn</p>

      </div>
  </div>
    )
  }
   export default Saleimg