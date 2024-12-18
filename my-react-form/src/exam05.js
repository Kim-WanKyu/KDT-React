
import {useForm} from 'react-hook-form';
import './exam.css';

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: {error},
  } = useForm();

  return (
  <div className='container'>
    <div className='loginform'>
      <form  onSubmit={handleSubmit((data) => console.log(data))}>
          <h2>Login</h2>
          <hr />
          <div>
            <label>Email</label>
            <input {...register('email', {required:true})} />
            {
              error.email && (
                <span className='invalid_msg'>Email is required.</span>
              )
            }
          </div>
          <div>
            <label>Password</label>
            <input {...register('password', {required: true})} />
            {error.password && (
              <span className='invalid_msg'>Password is required.</span>
            )}
          </div>
          <p>
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
          </p>
      </form>
    </div>
  </div>

  );
}
