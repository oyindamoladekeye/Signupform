import './App.css'
import { useFormik } from 'formik';
import { IconError } from './IconError';
function App() {

  const validate = values=>{
    const errors = {};

    if (!values.firstName){
      errors.firstName = "First Name cannot be empty";
    }
    if(!values.lastName){
      errors.lastName = "Last Name cannot be empty";
    }
    if(!values.password){
      errors.password = "Password cannot be empty";
    }
    else if(values.password.length < 8){
      errors.password ="Password must be 8 characters or more"
    }
    if(!values.email){
      errors.email = "Email Address cannot be empty";
    }
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
      errors.email = "Looks like this is not an email";
    }

    return errors;
  };
  const onSubmit = (values,{ resetForm }) => {
    resetForm();
  };
  const formik= useFormik({
    initialValues:{
      firstName:"",
      lastName:"",
      email:"",
      password:"",
    },
    onSubmit,
    validate,
  });
  return (
    <div className='main'>
      <div className='content'>
        <h1>Learn to code by watching others</h1>
        {/* <p>See how experienced developers solve problems in real time.<br/>Watching scripted tutorials is great but understanding how<br /> 
        developers think is invaluable. 
        </p> */}
        <p className='experience'>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, 
        but understanding how developers think is invaluable.</p>
      </div>
      <div className='form-group'>
        <a href='./' className='trial'><a  href="./" className='try'>Try it free 7 days</a>then $20/mo.thereafter</a>
      <form onSubmit={formik.handleSubmit} className='form'>
        <div className='firstname'>
          {/* <IconError /> */}
          <input
          id="firstName"
          type="text"
          aria-label="First Name"
          placeholder={!formik.touched.firstName ? "First Name" : null}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
          className={formik.errors.firstName && formik.touched.firstName && "error"}
           />
           {formik.touched.firstName && formik.errors.firstName ? (
           <div className="input">
             <div className='input-error'>{formik.errors.firstName}
             </div>
             <div className="icon-error">
             <IconError />
             </div>
           </div>
       ) : null}
        </div>
        <div>
          <input
          id="lastName"
          type="text"
          aria-label="Last Name"
          placeholder={!formik.touched.lastName ? "Last Name" : null}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
          className={formik.errors.lastName && formik.touched.lastName && "error"}
           />
          {formik.touched.lastName && formik.errors.lastName ? (
           <div className="input">
             <div className='input-error'>{formik.errors.lastName}
             </div>
             <div className="icon-error">
             <IconError />
             </div>
           </div>
           ) : null}
        </div>
        <div>
          <input
          id="email" 
          type="email"
          aria-label="Email Address"
          placeholder={!formik.touched.email ? "Email Address" : null}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className={formik.errors.email && formik.touched.email && "error"}
           />
          {formik.touched.email && formik.errors.email ? (
            <div className="input">
             <div className='input-error'>{formik.errors.email}
             </div>
             <div className="icon-error">
             <IconError />
             </div>
           </div>
       ) : null}
        </div>
        <div>
          <input
          id="password" 
          type="password"
          aria-label="Password"
          placeholder={!formik.touched.password ? "Password" : null}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          className={formik.errors.password && formik.touched.password && "error"}
           />
           {formik.touched.password && formik.errors.password ? (
            <div className="input">
              <div className='input-error'>{formik.errors.password}
              </div>
              <div className="icon-error">
                <IconError />
              </div>
            </div>
       ) : null}
        </div>
        <button type='submit'
        disabled={!formik.isValid} 
        className = {formik.isValid ? "submit" : "disabled"}>
          CLAIM YOUR FREE TRIAL
        </button>
        <p className='terms'>By clicking the button, you are agreeing to our <a href="./" className='terms-link'>Terms and Services</a></p>
      </form>
      </div>
    </div>
  )
}

export default App

