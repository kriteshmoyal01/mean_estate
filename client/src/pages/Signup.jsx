import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
 return (

  // heading
      <div className='p-3 max-w-lg mx-auto'>
        <h1 className='text-3xl text-center font-semibold my'>Sign Up</h1>


{/* this are the 3 colume username password and email */}
        <form className='flex flex-col gap-3'>
          <input type="text" placeholder='username' className='border p-3 rounded-lg' id='username' />

          <input type="email" placeholder='email' className='border p-3 rounded-lg' id='email' />

          <input type="password" placeholder='password' className='border p-3 rounded-lg' id='password' />


{/* this is sign up button  */}
          <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-80'>Sign-up</button>
        </form>

        {/* this is last lines  */}
        <div className='flex gap-2 mt-5'>
<p>Have an account?</p>
        <Link to={'/sign-in'}>
          <span className='text-blue-700'>Sign in</span>
        </Link>
</div>
      </div>
  );
}