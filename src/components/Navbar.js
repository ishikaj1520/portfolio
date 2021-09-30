import {FaGithub,FaInstagram} from "react-icons/fa";
import {AiOutlineGoogle} from "react-icons/ai";
import {AiFillLinkedin} from "react-icons/ai";  
// import {ImageBackground} from 'react-native';
import React from 'react'
// import{
//   SafeAreaView, StyleSheet,View,
// } from 'react-native'
const Navbar = () => {
    return ( 
      <div class="d-flex flex-column bd-highlight mb-3" >
  <div class="p-2 bd-highlight">
         <nav style={{color:"whitesmoke"}}>
  <div class="container-fluid"  style={{backgroundColor:"#434142" ,display:"inline-block"}}>
    <a class="navbar-brand" href="#">Home</a>
    <a class="navbar-brand" href="#About">About</a>
    <a class="navbar-brand" href="#Skill">Skills</a>
    <a class="navbar-brand" href="#Portfolio">Portfolio</a>
    <a class="navbar-brand" href="#Contact">Contact</a>
  </div>
</nav>
<hr style={{color:"whitesmoke" ,opacity:"100%"}}/>
 </div>
  <div class="p-2 bd-highlight" style={{textAlign:"center", backgroundImage:"./assets/bg-pic.jpg"}}> 
         <p style={{color:"#ffcb05",marginTop:"130px",fontSize:"30px"}}>Hi,</p>
         <h1 style={{fontSize:"50px"}}>My name is Ishika Jain.</h1>
         <h1 style={{fontSize:"50px"}}>Front-end Developer.</h1></div>
         <div class="p-2 bd-highlight">
           <div className="icons"  style={{color:"#ffcb05",paddingBottom:"40px",wordSpacing:"10px",textAlign:"center",fontSize:"45px"}} >
             <FaGithub /> <AiOutlineGoogle/> <AiFillLinkedin/> <FaInstagram/> 
         </div> </div>
</div>
      
     );} 
//  const styles =StyleSheet.create({
//     flex:1,
//     justifyContent:'center',
//     alignitems:'center'
// });
 
export default Navbar;