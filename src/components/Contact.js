import {MdCall} from 'react-icons/md';
import {CgMail} from "react-icons/cg";
const Contact = () => {
    return ( 
        <div className="Contact" id="Contact">
            <h1 style={{color:"black",padding:"30px"}}>Contact Me</h1>
            {/* <hr style={{color:"#FFCB05", width:"120px" ,opacity:"100%",}}/> */}
            <h4>Hire me for your next project</h4>
            <hr style={{color:"#C1C1C1" ,opacity:"100%"}}/>
            <h5 style={{marginTop:"20px"}}><CgMail/> ishikaj1520@gmail.com</h5>
            <h5><MdCall/>+91 7042772662</h5>

        </div>
        
     );
}
 
export default Contact;