import logo from "../assets/logo.svg"
import useMediaQuery from "@mui/material/useMediaQuery";
export default function Header()
{
    const matches = useMediaQuery("(max-width:1200px)");

    return(<div>
        <div style={{height:80,background:'#fff',display:'flex',alignItems:'center'}}>
            <div>
                <div style={{width:'100%'}}>
               <img src={logo} style={{width:matches?'55%':'49%',marginLeft:matches?'5%':'40%'}}></img>
                </div>
            </div>
            <div style={{width:matches?'100%':'75%',padding:5}}>
            <div style={{border:'solid 1px #6929c4',borderColor:'#6929c4',background:'#6929c4',width:matches?70:'6%',color:'#fff',display:'flex',justifyContent:'center',alignItems:'center',padding:10,marginLeft:matches?'auto':'90%',cursor:'pointer',fontWeight:500,borderRadius:4}}>Sign in</div>
            </div>
        </div>
    </div>)
}