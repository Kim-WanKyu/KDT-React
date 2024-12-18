
// exam 기본 뼈대 스크립트.

import './exam.css';

export default function Login() {
  return (
    <div className='container'>
        <div className='loginform'>
        <form>
            <h2>Login</h2>
            <hr />
            <div>
                <label forName='email'>Email</label>
                <input type='email' id='email' />
            </div>
            <div>
                <label forName='password'>Password</label>
                <input type="password" id='password' />
            </div>
            <p>
                <button type="submit">Submit</button>
            </p>
        </form>
        </div>
    </div>
  );
}
