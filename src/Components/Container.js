import ContainerFirstImage2 from "../assets/ContainerFirstImage2.svg";
import { BsPencil } from "react-icons/bs";
import ContainerFirstImage from "../assets/ContainerFirstImage.svg";
import { IoIosRocket } from "react-icons/io";
import { TiFlashOutline } from "react-icons/ti";
import { IoAccessibility } from "react-icons/io5";
import { TextField } from "@mui/material";
import { IoIosPartlySunny } from "react-icons/io";
import useMediaQuery from "@mui/material/useMediaQuery";
import { FaSimCard } from "react-icons/fa";
export default function Container() {
    const matches = useMediaQuery("(max-width:1100px)");
  return (
    <div
      style={{
        marginTop: "1.6%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#ced6e0",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          width:matches?'95%': "80%",
          height: "auto",
          background: "#fff",
          display: "flex",
          flexDirection:matches?'column':'row'
        }}
      >
        <div style={{ width:matches?'90%':"48%", height: "auto", marginTop: "5%" }}>
          <div
            style={{
              fontSize: "3.8vw",
              lineHeight: "1",
              fontWeight: 700,
              marginLeft: "8%",
              textAlign:matches?'center':'left'
            }}
          >
            A new <span style={{ color: "#6929c4" }}>proactive strategy</span>{" "}
            to reduce organizational attack surface
          </div>
          <div
            style={{
              marginLeft: "8%",
              marginTop: "5%",
              color: "#878d96",
              fontSize:matches?"2vw":"20px",
              lineHeight: 1.5,
              textAlign:matches?'center':'left'
            }}
          >
            Freeze rips your data away from the brokers that jeopardize your
            operations and reputation.
          </div>
          <div style={{ marginLeft: matches?'15%':"8%", marginTop: "5%" }}>
            <div
              style={{
                border: "solid 1px #6929c4",
                borderColor: "#6929c4",
                background: "#6929c4",
                width:matches?'30%':"7vw",
                color: "#fff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: matches?5:20,
                cursor: "pointer",
                fontWeight: 500,
                borderRadius: 4,
             
              }}
            >
              Get started
            </div>
          </div>
        </div>
        <div style={{ width: matches?'100%':"52%", height: "auto", marginTop: "2%" }}>
          <img
            src={ContainerFirstImage}
            style={{ width: "100%", height: "100%" }}
          ></img>
        </div>
      </div>

      <div
        style={{
          width:matches?'95%':"80%",
          height: "auto",
          background: "#fff",
          display: "flex",
          flexDirection:matches?'column':"row"
        }}
      >
        <div style={{ width:matches?'96%': "48%", height: "auto", marginTop: "5%" }}>
          <img
            src={ContainerFirstImage2}
            style={{ width: "100%", height: "100%" }}
          ></img>
        </div>
        <div style={{ width:matches?'100%': "52%", height: "auto", marginTop: "2%" }}>
          <div style={{ width: "85%" }}>
            <div
              style={{
                fontSize: "16px",
                fontWeight: 600,
                color: "#6929c4",
                marginLeft: "5%",
              }}
            >
              THE HIGH COST OF DATA-DRIVEN ATTACKS
            </div>
            <div
              style={{
                fontSize:matches?'3vw': "1.8vw",
                lineHeight: "2.25rem",
                fontWeight: 700,
                color: "#4d5358",
                marginLeft: "5%",
                marginTop: "2%",
                letterSpacing: "-.025em",
              }}
            >
              A cybersecurity failure will permanently strain the financial and
              operational stability of your business
            </div>
            <div
              style={{
                marginLeft: "5%",
                marginTop: "4%",
                color: "#878d96",
                fontSize:matches?'2vw' :"1.2vw",
                lineHeight: 1.2,
              }}
            >
              These attacks result in substantial financial losses, damage your
              reputation, require extensive time for recovery, and disrupt
              everyday operations.
            </div>
            <div
              style={{
                marginLeft: "5%",
                marginTop: "8%",
                color: "#6929c4",
                fontSize: "18px",
                fontWeight: 600,
              }}
            >
              Immediate monetary loss
            </div>
            <div
              style={{
                marginLeft: "5%",
                marginTop: "2%",
                color: "#878d96",
                fontSize:matches?'2vw' :"1.1vw",
                lineHeight: 1.2,
              }}
            >
              Direct costs like ransom payments, plus indirect costs such as
              lost revenue and reduced productivity.
            </div>
            <div
              style={{
                marginLeft: "5%",
                marginTop: "8%",
                color: "#6929c4",
                fontSize: "18px",
                fontWeight: 600,
              }}
            >
              Eroded customer trust
            </div>
            <div
              style={{
                marginLeft: "5%",
                marginTop: "2%",
                color: "#878d96",
                fontSize:matches?'2vw' :"1.1vw",
                lineHeight: 1.2,
              }}
            >
              Loss of clients and investor confidence, impacting long-term
              business relationships.
            </div>

            <div
              style={{
                marginLeft: "5%",
                marginTop: "8%",
                color: "#6929c4",
                fontSize: "18px",
                fontWeight: 600,
              }}
            >
              Prolonged recovery process
            </div>
            <div
              style={{
                marginLeft: "5%",
                marginTop: "2%",
                color: "#878d96",
                fontSize:matches?'2vw' :"1.1vw",
                lineHeight: 1.2,
              }}
            >
              Time spent investigating, repairing, and upgrading systems, taking
              away from growth activities.
            </div>

            <div
              style={{
                marginLeft: "5%",
                marginTop: "8%",
                color: "#6929c4",
                fontSize: "18px",
                fontWeight: 600,
              }}
            >
              Business operation interruptions
            </div>
            <div
              style={{
                marginLeft: "5%",
                marginTop: "2%",
                color: "#878d96",
                fontSize:matches?'2vw' :"1.1vw",
                lineHeight: 1.2,
              }}
            >
              Diverting resources to breach response, leading to operational
              delays and halted initiatives.
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          width: matches?'95%':"80%",
          height: "auto",
          background: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            marginTop: matches?'10%':"6%",
            color: "#6929c4",
            fontSize: "18px",
            fontWeight: 600,
          }}
        >
          Security is personal
        </div>
        <div
          style={{
            fontSize: matches?"3vw":"2.4vw",
            fontWeight: 700,
            color: "#000",
            marginTop: "1%",
          }}
        >
          Freeze protects your employees to defend your organization
        </div>
        <div
          style={{
            fontSize: matches?"2vw":"1.2vw",
            fontWeight: 400,
            color: "#4d5358",
            marginTop: "1.6%",
            textAlign: "center",
            width: "70%",
            lineHeight: "1.5",
          }}
        >
          Attackers don't just rely on data from the dark web. A massive,
          ever-growing set of personal data about your employees is legally
          available in an open market.
        </div>
      </div>
      <div
        style={{
          width:matches?"95%": "80%",
          height: "auto",
          background: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div style={{display:'flex',width:'92%',flexDirection:matches?'column':'row'}}>
          <div  style={{padding:8,gap:'auto'}}>
             <div style={{display:'flex',position:'relative',alignItems:'center',justifyContent:'center',flexDirection:'column',width:'95%',height:280,marginTop:'20%',background:'#ced6e0',borderRadius:8}} >
                <div style={{background:'#6929c4',position:'absolute',top:-25, width:'56px' ,height:'56px',display:'inline-flex',alignItems:'center',justifyContent:'center',borderRadius:'10px'}}>
                  <BsPencil style={{fontSize:'25px',color:'white'}}/>
                </div>
            <div style={{marginTop:'0%',color:'#000',fontSize:"18px",fontWeight:500}}>Threat Discovery</div>
              <div style={{marginTop:'10%',display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center',width:'80%',color:'#4d5358',lineHeight:'2'}}>
                Freeze relentlessly scours the industry for companies selling
                data that puts your organization at risk
              </div>
            </div>
          </div>

          <div  style={{padding:8,gap:'auto'}}>
             <div style={{display:'flex',position:'relative',alignItems:'center',justifyContent:'center',flexDirection:'column',width:'95%',height:280,marginTop:'20%',background:'#ced6e0',borderRadius:8}} >
                <div style={{background:'#6929c4',position:'absolute',top:-25, width:'56px' ,height:'56px',display:'inline-flex',alignItems:'center',justifyContent:'center',borderRadius:'10px'}}>
                  <IoIosRocket style={{fontSize:'25px',color:'white'}}/>
                </div>
            <div style={{marginTop:'0%',color:'#000',fontSize:"18px",fontWeight:500}}>Employee and Family Protection</div>
              <div style={{marginTop:'10%',display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center',width:'80%',color:'#4d5358',lineHeight:'2'}}>
                Freeze relentlessly scours the industry for companies selling
                data that puts your organization at risk
              </div>
            </div>
          </div>

          <div  style={{padding:8,gap:'auto'}}>
             <div style={{display:'flex',position:'relative',alignItems:'center',justifyContent:'center',flexDirection:'column',width:'95%',height:280,marginTop:'20%',background:'#ced6e0',borderRadius:8}} >
                <div style={{background:'#6929c4',position:'absolute',top:-25, width:'56px' ,height:'56px',display:'inline-flex',alignItems:'center',justifyContent:'center',borderRadius:'10px'}}>
                  <IoAccessibility style={{fontSize:'25px',color:'white'}}/>
                </div>
            <div style={{marginTop:'0%',color:'#000',fontSize:"18px",fontWeight:500}}>Complete Audit Trail</div>
              <div style={{marginTop:'10%',display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center',width:'80%',color:'#4d5358',lineHeight:'2'}}>
                Freeze relentlessly scours the industry for companies selling
                data that puts your organization at risk
              </div>
            </div>
          </div>
            
        </div>
      </div>



      <div
        style={{
          width: matches?'95%':"80%",
          height: "auto",
          background: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div style={{display:'flex',width:'92%',flexDirection:matches?'column':'row'}}>
          <div  style={{padding:8,gap:'auto'}}>
             <div style={{display:'flex',position:'relative',alignItems:'center',justifyContent:'center',flexDirection:'column',width:'95%',height:280,marginTop:'20%',background:'#ced6e0',borderRadius:8}} >
                <div style={{background:'#6929c4',position:'absolute',top:-25, width:'56px' ,height:'56px',display:'inline-flex',alignItems:'center',justifyContent:'center',borderRadius:'10px'}}>
                  <IoIosPartlySunny style={{fontSize:'25px',color:'white'}}/>
                </div>
            <div style={{marginTop:'0%',color:'#000',fontSize:"18px",fontWeight:500}}>Instant Protection</div>
              <div style={{marginTop:'10%',display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center',width:'80%',color:'#4d5358',lineHeight:'2'}}>
                Freeze relentlessly scours the industry for companies selling
                data that puts your organization at risk
              </div>
            </div>
          </div>

          <div  style={{padding:8,gap:'auto'}}>
             <div style={{display:'flex',position:'relative',alignItems:'center',justifyContent:'center',flexDirection:'column',width:'95%',height:280,marginTop:'20%',background:'#ced6e0',borderRadius:8}} >
                <div style={{background:'#6929c4',position:'absolute',top:-25, width:'56px' ,height:'56px',display:'inline-flex',alignItems:'center',justifyContent:'center',borderRadius:'10px'}}>
                  <FaSimCard  style={{fontSize:'25px',color:'white'}}/>
                </div>
            <div style={{marginTop:'0%',color:'#000',fontSize:"18px",fontWeight:500}}>Fast Configuration</div>
              <div style={{marginTop:'10%',display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center',width:'80%',color:'#4d5358',lineHeight:'2'}}>
                Freeze relentlessly scours the industry for companies selling
                data that puts your organization at risk
              </div>
            </div>
          </div>

          <div  style={{padding:8,gap:'auto'}}>
             <div style={{display:'flex',position:'relative',alignItems:'center',justifyContent:'center',flexDirection:'column',width:'95%',height:280,marginTop:'20%',background:'#ced6e0',borderRadius:8}} >
                <div style={{background:'#6929c4',position:'absolute',top:-25, width:'56px' ,height:'56px',display:'inline-flex',alignItems:'center',justifyContent:'center',borderRadius:'10px'}}>
                  <TiFlashOutline style={{fontSize:'25px',color:'white'}}/>
                </div>
            <div style={{marginTop:'0%',color:'#000',fontSize:"18px",fontWeight:500}}>Monthly Reporting</div>
              <div style={{marginTop:'10%',display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center',width:'80%',color:'#4d5358',lineHeight:'2'}}>
                Freeze relentlessly scours the industry for companies selling
                data that puts your organization at risk
              </div>
            </div>
          </div>
            
        </div>
      </div>

      <div
        style={{
          width: matches?"95%":"80%",
          height: "auto",
          background: "#fff",
       
        }}
      >
    <div style={{fontSize:'22px',fontWeight:600,color:'#2d3436',marginLeft:'5%',marginTop:'5%'}}>
    Get started with Freeze
    </div>
    <div style={{marginLeft:'5%',marginTop:'.5%'}}>Ready to protect your business? Please provide your contact information to learn more about reducing your attack surface and safeguarding your enterprise.</div>
      <div style={{fontWeight:500,fontSize:'15px',marginLeft:'5%',marginTop:'4%'}}>
        First Name<span style={{color:'red'}}>*</span>
      </div>  
      <div style={{marginLeft:'5%'}}>
      <TextField
             id="standard-password-input"
             type="password"
             autoComplete="current-password"
             variant="standard" size="small" style={{width:'95%',background:'#fff',marginTop:'1%'}}  />
      </div>

      <div style={{fontWeight:500,fontSize:'15px',marginLeft:'5%',marginTop:'4%'}}>
        Last Name<span style={{color:'red'}}>*</span>
      </div>  
      <div style={{marginLeft:'5%'}}>
      <TextField
             id="standard-password-input"
             type="password"
             autoComplete="current-password"
             variant="standard" size="small" style={{width:'95%',background:'#fff',marginTop:'1%'}}  />
      </div>
      
      <div style={{fontWeight:500,fontSize:'15px',marginLeft:'5%',marginTop:'4%'}}>
        Company Name<span style={{color:'red'}}>*</span>
      </div>  
      <div style={{marginLeft:'5%'}}>
      <TextField
             id="standard-password-input"
             type="password"
             autoComplete="current-password"
             variant="standard" size="small" style={{width:'95%',background:'#fff',marginTop:'1%'}}  />
      </div>
      
      <div style={{fontWeight:500,fontSize:'15px',marginLeft:'5%',marginTop:'4%'}}>
        Email<span style={{color:'red'}}>*</span>
      </div>  
      <div style={{marginLeft:'5%'}}>
      <TextField
             id="standard-password-input"
             type="password"
             autoComplete="current-password"
             variant="standard" size="small" style={{width:'95%',background:'#fff',marginTop:'1%'}}  />
      </div>
      
      <div style={{fontWeight:500,fontSize:'15px',marginLeft:'5%',marginTop:'4%'}}>
        Phone Number<span style={{color:'red'}}>*</span>
      </div>  
      <div style={{marginLeft:'5%'}}>
      <TextField
             id="standard-password-input"
             type="password"
             autoComplete="current-password"
             variant="standard" size="small" style={{width:'95%',background:'#fff',marginTop:'1%',}}  />
      </div>

      <div style={{ marginLeft: "5%", marginTop: "4%",}}>
            <div
              style={{
                border: "solid 1px #6929c4",
                borderColor: "#6929c4",
                background: "#6929c4",
                width:matches?'12%': "10%",
                color: "#fff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: 14,
                cursor: "pointer",
                fontWeight: 600,
                borderRadius: 4,
                marginBottom:'3%'
              }}
            >
              Submit
            </div>
          </div>


      </div>


    </div>
  );
}


// <div
// style={{
//   position: "relative",
//   height: 200,
//   width: 200,
//   backgroundColor: "black",
// }}
// >
// <div
//   style={{
//     position: "absolute",
//     backgroundColor: "red",
//     top: -10,
//     color: "#fff",
//   }}
// >
//   textfhgfh
// </div>
// </div>