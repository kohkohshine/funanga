import Image from '../assets/images/3DShape2.jpg';
import LoginForm from '../components/loginform';

export default function LoginPage () {



return (
    <>
    <div
      style={{
        backgroundImage: `url(${Image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backdropFilter: 'blur(50px)', 
      }}
    >
      <div>
        <LoginForm />
      </div>
    </div>
    </>
)

}