import { useState } from "react";

const RegistrationForm = () => {
    const [error, setError] = useState("")
    const [submittedData, setSubmittedData] = useState(null)
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        age: "",
        gender: "",
        role: "Student",
        acceptTerms: false,
    })

    function handleChange(e) {
        const { name, value, type, checked } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()

        if (formData.fullName.trim() === "" 
        & formData.age.trim() === "" 
        &  formData.email.trim() === "" 
        & formData.gender.trim() === "" 
        & !formData.acceptTerms) {
            setError("Please complete all required files")
        } else if (formData.fullName.trim() === "") {
            setError("Input your full name")
        } else if (formData.age.trim() === "" || formData.age.trim() < 1) {
            setError("Input your age")
        } else if (formData.email.trim() === "") {
            setError("Input your email")
        } else if (formData.gender.trim() === "") {
            setError("Select your gender")
        } else if (!formData.acceptTerms) {
            setError("You must accept the terms and conditions")
        } else {
            setSubmittedData(formData)
        }
    }

    return (
        <>
            <div className="regitstration-form-container">
                <h2 className="registration-form-title">Registration Form</h2>
                <hr />
                <form className="registration-form">

                    <label htmlFor="fullName">Full Name: </label>
                    <input 
                        type="text" 
                        name="fullName" 
                        id="registration-form-fullname" 
                        value={formData.fullName}
                        placeholder="John Doe"  
                        onChange={handleChange} 
                    />

                    <label htmlFor="email">Email: </label>
                    <input 
                        type="email" 
                        name="email" 
                        id="registration-form-email" 
                        value={formData.email}
                        placeholder="john@example.com" 
                        onChange={handleChange} 
                    />

                    <label htmlFor="age">Age: </label>
                    <input 
                        type="number" 
                        name="age" 
                        id="registration-form-age" 
                        value={formData.age}
                        placeholder="28" 
                        onChange={handleChange} 
                    />

                    <label htmlFor="gender">Gender: </label>
                    <div id="registration-form-gender-container">
                        <input 
                            type="radio" 
                            name="gender" 
                            value="male" 
                            checked={formData.gender === "male"}
                            onChange={handleChange}  
                        /> Male

                        <input 
                            type="radio" 
                            name="gender" 
                            value="female"
                            checked={formData.gender === "female"} 
                            onChange={handleChange}  
                        /> Female
                    </div>

                    <label htmlFor="role">Role: </label>
                    <select 
                        name="role" 
                        id="registration-form-role" 
                        value={formData.role}
                        onChange={handleChange}
                    >
                        <option value="Student">Student</option>
                        <option value="Teacher">Teacher</option>
                        <option value="Admin">Admin</option>
                    </select>

                    <div id="registration-form-terms-container">
                        <input 
                            type="checkbox" 
                            name="acceptTerms"
                            id="registration-form-terms"
                            checked={formData.acceptTerms}
                            onChange={handleChange} 
                        />
                        Accept Terms And Condition
                    </div>

                    <button 
                        id="registration-form-btn" 
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </form>

                <hr />
                <p id="error-text">{error}</p>
            </div>

            {submittedData &&(
                <div id="registration-sumarry">
                    <h2>Registration Sumarry</h2>
                    <hr />
                    <p>Full Name : {formData.fullName}</p>
                    <p>Email : {formData.email}</p>
                    <p>Age : {formData.age}</p>
                    <p>Gender : {formData.gender}</p>
                    <p>Role : {formData.role}</p>
                    <p>Accepted Terms : {formData.acceptTerms ? "Yes" : "No"}</p>
                </div>
            )}
        </>
    )
}

export default RegistrationForm;
