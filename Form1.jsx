import React, { useState } from "react";

const Form1 = () => {

     let [formData , setFormData] = useState({
      requiredfield: "",
      email : "",
      password: "",
      confirmpass : "",
      url : "",
      digits: "",
      number: "",
      alphanum : "",
      textarea:""
     })

     let {requiredfield, email,password, confirmpass, url, digits, number, alphanum, textarea} = formData;

     let handleChange = (e)=>{
         let {name, value} = e.target;
         setFormData({...formData, [name]:value})
     }

     let [errors, setErrors] = useState({})

     let handleSubmit = (e) => {
        e.preventDefault();

        let validationErrors = {}

        //required
        if(requiredfield==""){
            validationErrors.requiredfiel = "This field is mandatory"
        }

jf
        //email*
        if(email==""){
            validationErrors.email="This field is mandatory"
  dk      }else if(!/\S+@\S+\.\S+/.test(email)){
            validationErrors.email = "This should be a valid email"
        }

        //url
        const regexUrl = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/
        if(url == ""){
            validationErrors.url = "This field is mandatory"
        }else if(!regexUrl.test(url)){
            validationErrors.url = "This should be a valid url"
        }

        // digit /^[0-9]+$/ number /^-?\d+(?:\.\d+)?$/
        // alphanum /^[a-zA-Z0-9\s]+$/ 

        setErrors(validationErrors)
     }


  return (
    <>
      <form className="w-2/4 py-5 px-9">
        <h1 className="text-lg font-bold text-red-800 border-b-[2px]">
          Form Validation
        </h1>

        {/* Required */}
        <section className="form-group p-2 my-3">
          <label>Required</label>
          <div className="inp mt-2">
            <input
              type="text"
              name="requiredfield"
              placeholder="Required field"
              className="bg-gray-50 border w-full rounded p-1"
              value={requiredfield}
              onChange={handleChange}
            />
            <div className="form-errors text-red-600">
                {errors.requiredfield && <span> {errors.requiredfield} </span>}
            </div>
          </div>
        </section>

        {/* Email */}
        <section className="form-group p-2 my-3">
          <label>Email</label>
          <div className="inp mt-2">
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="bg-gray-50 border w-full rounded p-1"
              value={email}
              onChange={handleChange}
            />
             <div className="form-errors text-red-600">
                {errors.email && <span> {errors.email} </span>}
            </div>
          </div>
        </section>

        {/* Password */}
        <section className="form-group p-2 my-3">
          <label>Password</label>
          <div className="inp mt-2">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="bg-gray-50 border w-full rounded p-1"
              value={password}
              onChange={handleChange}

            />
          </div>

          {/* Confirm-Password */}
          <div className="inp mt-2">
            <input
              type="password"
              name="confirmpass"
              placeholder="Confirm Password"
              className="bg-gray-50 border w-full rounded p-1"
              value={confirmpass}
              onChange={handleChange}

            />
          </div>
        </section>

        {/* URL */}
        <section className="form-group p-2 my-3">
          <label>URL</label>
          <div className="inp mt-2">
            <input
              type="text"
              name="url"
              placeholder="url"
              className="bg-gray-50 border w-full rounded p-1"
              value={url}
              onChange={handleChange}

            />
          </div>
        </section>

        {/* DIGITS */}
        <section className="form-group p-2 my-3">
          <label>Digits</label>
          <div className="inp mt-2">
            <input
              type="text"
              name="digits"
              placeholder="DIGITS"
              className="bg-gray-50 border w-full rounded p-1"
              value={digits}
              onChange={handleChange}

            />
          </div>
        </section>

        {/* NUMBER */}
        <section className="form-group p-2 my-3">
          <label>Number</label>
          <div className="inp mt-2">
            <input
              type="text"
              name="number"
              placeholder="NUMBER"
              className="bg-gray-50 border w-full rounded p-1"
              value={number}
              onChange={handleChange}

            />
          </div>
        </section>

        {/* ALPHANUMERIC */}
        <section className="form-group p-2 my-3">
          <label>Alphanumeric</label>
          <div className="inp mt-2">
            <input
              type="text"
              name="alphanum"
              placeholder="Alphanumeric"
              className="bg-gray-50 border w-full rounded p-1"
              value={alphanum}
              onChange={handleChange}

            />
          </div>
        </section>

        {/* TEXTAREA */}
        <section className="form-group p-2 my-3">
          <label>Teaxtarea</label>
          <div className="inp mt-2">
            <textarea
              name="textarea"
              rows="5"
              placeholder="Enter some text"
              className="bg-gray-50 border w-full rounded p-1"
              value={textarea}
              onChange={handleChange}

            ></textarea>
          </div>
        </section>

        {/* BUTTON */}
        <section className="form-group p-2 my-3">
          <div className="inp">
            <button className="bg-red-800 rounded-md px-4 py-1 text-white" onClick={handleSubmit}>Submit</button>
            <button  className="bg-red-800 rounded-md px-4 py-1 text-white ms-1">Cancel</button>
          </div>
        </section>
      </form>
    </>
  );
};

export default Form1;
