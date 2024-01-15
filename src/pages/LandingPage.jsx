import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Image from '../assets/images/3DShape2.jpg';


export default function LandingPage () {
return(
<>
<NavBar/>
<div style={{
    backgroundImage: `url(${Image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    marginTop: "0",
    width:'100vw',
    height:'100vh',
    marginTop:'-8vh'}}
>
<div className="flex h-screen items-center justify-center">
      <p className="text-2xl">Welcome to Funanga</p>
    </div>
</div>
<Footer/>
</>

)



}