import nav_logo from "../images/udemy logo.jpg"
function Navbar(){
    return(
      <div class="navbar">
         
      <div class="navbar_s1">
         
      
         <img  class="s1_h1" src={nav_logo} alt=""></img>
         
      </div>

      <div class="navbar_s2">     
              <i class="fa-solid fa-magnifying-glass"></i>
              <input type="search" placeholder="search something"></input>
              
      </div>

      <div class="navbar_s3">
          <p>Udemy Busniess</p>
            <div class="learn">

           <p>Learn on Udemy</p>
           <div class="learn__popup">
              <p> your did  not purchase  yet</p>

           </div>
           </div>

          <i class="fa-solid fa-cart-shopping"></i>
          <i class="fa-solid fa-bell"></i>
          
          
      </div>
        <div class="navbar_s4">
          <p class="navbar_s4_p1">Log in </p> <p class="navbar_s4_p2">Sign Up</p>
          

        </div>

  </div>

    )
  }
   export default Navbar