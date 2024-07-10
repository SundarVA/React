import React, { useState } from "react";

const Form2 = () => {
    let [formValues, setFormValues] = useState({
        minLength: "",
        maxLength: "",
        rangeLength: "",
        minValue: "",
        maxValue: "",
        rangeValue: "",
    });

    let [valueErrors, setValueErrors] = useState({})

    let { minLength, maxLength, rangeLength, minValue, maxValue, rangeValue } = formValues;

        let handleChange = (e) =>{
            let {name, value} = e.target;
            setFormValues({...formValues, [name]:value})
        }

        let handleSubmit = (e) => {
            e.preventDefault();

            let validationErrors = {}

            // MinLength
            if(minLength==""){
                validationErrors.minLength = "This field is mandatory"
            } else if(minLength.length < 6){
                validationErrors.minLength = "Enter min 6 chars"
            }

            //MaxLength
            if(maxLength == ""){
                validationErrors.maxLength = "This feld is mandatory"
            }else if(maxLength.length > 6){
                validationErrors.maxLength = "Enter max ^ chars"
            }

            //RangeLength
            if(rangeLength == ""){
                validationErrors.rangeLength = "This field is mandatory"
            }else if(rangeLength.length < 6 || rangeLength.length > 20){
                validationErrors.rangeLength = "This length is invalid"
            }

            //MinValue
            if(minValue == ""){
                validationErrors.minValue = "This field is mandatory"
            }else if(minValue < 6){
                validationErrors.minValue = "Min value should be 6"
            }

            //MaxValue
            if(maxValue == ""){
                validationErrors.maxValue = "This field is mandatory"
            }else if(maxValue > 6){
                validationErrors.maxValue = "Max value should be 6"
            }

            setValueErrors(validationErrors)
            

        }

    return(
    <>
        <form className="w-2/4 py-5 px-9">
            <h3 className="text-lg font-bold text-red-800 border-b-[2px]">Form Validation</h3>
            
            {/* MinLength */}
            <section  className="form-group p-2 my-3">
                <label>Min Length</label>
                <div className="inp mt-2">
                    <input type="text" name="minLength" placeholder="Min 6 characters" 
                    className="bg-gray-50 border w-full rounded p-1"
                    value={minLength}
                    onChange={handleChange}
                    />
                     <div className="form-errors text-red-600 text-sm">
                    {valueErrors.minLength && <span> {valueErrors.minLength} </span>}
                    </div>
                </div>
            </section>

            {/* MaxLength */}
            <section className="form-group p-2 my-3">
                <label>Max Length</label>
                <div className="inp mt-2">
                    <input type="text" name="maxLength" placeholder="Max 6 characters" 
                    
                    className="bg-gray-50 border w-full rounded p-1"
                    value = {maxLength}
                    onChange={handleChange}
                    />

                </div>
            </section>

            {/* RangeLength */}
            <section className="form-group p-2 my-3">
                <label>Range Length</label>
                <div className="inp mt-2">
                    <input type="text" name="rangeLength" placeholder="6-20 chars" 
                    className="bg-gray-50 border w-full rounded p-1"
                    value = {rangeLength}
                    onChange={handleChange}
                    />
                </div>
            </section>

            {/* Minvalue */}
            <section className="form-group p-2 my-3">
                <label>Min Value</label>
                <div className="inp mt-2">
                    <input type="number" name="minValue" placeholder="Min value should be 6" 
                    className="bg-gray-50 border w-full rounded p-1"
                    value={minValue}
                    onChange={handleChange}

                    />
                </div>
            </section>

            {/* Maxvalue */}
            <section className="form-group p-2 my-3">
                <label>Max Value</label>
                <div className="inp mt-2">
                    <input type="number" name="maxValue" placeholder="Max value should be 6" 
                    className="bg-gray-50 border w-full rounded p-1"
                    value={maxValue}
                    onChange={handleChange}
                    />
                </div>
            </section>

            {/* Rangevalue */}
            <section className="form-group p-2 my-3">
                <label>Range Value</label>
                <div className="inp mt-2">
                    <input type="number" name="rangeValue" placeholder="value between 6-20" 
                    cldhdeyudyeassName="bg-gray-50 border w-full rounded p-1"
                    value={rangeValue}
                    onChange={handleChange}
                    />
                </div>
            </section>

            {/* Button */}
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

export default Form2
