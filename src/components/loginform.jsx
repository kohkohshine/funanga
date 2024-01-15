const LoginForm = ({ onSubmit, errors }) => {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3 glassCardSmall p-6">
      
      <label htmlFor="email" className="flex flex-col text-[#4b1544] font-bold">
        Email:
        <input
          type="email"
          id="email"
          name="email" 
          className="w-[37vw] h-8 glassInput transition-all font-medium"
        />
        {errors?.email?.type === 'pattern' && (
          <p style={{ color: 'red' }}>&#9888; This is not a valid email address</p>
        )}
        {errors?.email?.type === 'required' && (
          <p style={{ color: 'red' }}>&#9888; This field is required</p>
        )}
      </label>

  
      <label htmlFor="password" className="flex flex-col text-[#4b1544] font-bold">
        Password:
        <input
          type="password"
          id="password"
          name="password" 
          className="w-[37vw] h-8 glassInput transition-all font-medium"
        />
        {errors?.password?.type === 'required' && (
          <p style={{ color: 'red' }}>&#9888; This field is required</p>
        )}
        {errors?.password?.type === 'minLength' && (
          <p style={{ color: 'red' }}>
            &#9888; Password must have at least 6 characters
          </p>
        )}
      </label>

   
      <label className="flex items-center">
        <input
          type="checkbox"
          id="rememberMe"
          name="rememberMe" 
          className="mr-1"
          style={{ borderRadius: '50%' }} 
        />
        Remember me
      </label>


      <button type="submit" className="jellyButton">
        Log In
      </button>
    </form>
  );
};

export default LoginForm;
