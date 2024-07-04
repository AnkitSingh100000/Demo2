import Header from "../Header"
import Container from "../Container"
import Footer from "../Footer"
export default function Home()
{
    return(<div style={{background:'#ced6e0'}}>
        <div>
            <Header/>
        </div>
        <div>
        <Container/>
        </div>
        <div style={{marginTop:'1.6%'}}>
        <Footer/>
        </div>
    </div>)
}