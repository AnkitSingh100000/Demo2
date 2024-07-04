import Divider from '@mui/material/Divider';
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGoogleplus } from "react-icons/io";
import useMediaQuery from "@mui/material/useMediaQuery";
export default function Footer()
{
    const matches = useMediaQuery("(max-width:700px)");
    return(<div style={{width:'100%',display:'flex',justifyContent:'center',background:'#fff',flexDirection:'column',alignItems:'center'}}>
          <div style={{width:'80%',display:'flex',flexDirection:matches?"column":'row',justifyContent:'center',alignItems:matches?'center':'normal'}}>
           
            <div style={{width:'25%',marginTop:'5%'}}>
                <div style={{color:'#2d3436',fontSize:'15px',fontWeight:500}}>
                PRODUCT
                </div>
                <div style={{color:'#636e72',marginTop:'6%'}}>
                    Sign in
                </div>
            </div>

            <div style={{width:'25%',marginTop:'5%'}}>
                <div style={{color:'#2d3436',fontSize:'15px',fontWeight:500}}>
                COMPANY
                </div>
                <div style={{color:'#636e72',marginTop:'6%'}}>
                Work with Freeze
                </div>
            </div>

            <div style={{width:'25%',marginTop:'5%',}}>
                <div style={{color:'#2d3436',fontSize:'15px',fontWeight:500}}>
                LEGAL
                </div>
                <div style={{color:'#636e72',marginTop:'6%'}}>
                Terms of Service
                </div>
                <div style={{color:'#636e72',marginTop:'6%'}}>
                Private Policy
                </div>
                <div style={{color:'#636e72',marginTop:'6%'}}>
                Cookies Policy
                </div>
            </div>

            <div style={{width:'25%',marginTop:'5%'}}>
                <div style={{color:'#2d3436',fontSize:'15px',fontWeight:500}}>
                LANGUAGE
                </div>
                <div style={{color:'#636e72',marginTop:'6%'}}>
                    English
                </div>
            </div>
          </div>
          <div style={{marginTop:'3%',marginBottom:'3%'}}>
          <Divider style={{width:'100%',marginBottom:'3%'}}/>
          <div style={{color:'#636e72',width:'80vw'}}>
            <span>© 2024 Freeze Inc. All rights reserved.<span style={{marginLeft:matches?'6%':'60%',fontSize:matches?'15px':'25px',color:'#636e72'}}> <FaTwitter  />  <FaFacebookF style={{marginLeft:'2%'}}/><FaLinkedinIn style={{marginLeft:'2%'}}/>  <IoLogoGoogleplus style={{marginLeft:'2%'}} /></span></span>
  
        
            </div>
            </div>
            
    </div>)
}