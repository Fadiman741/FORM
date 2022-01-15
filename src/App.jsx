import React,{useState} from 'react';
import './App.css';

function App() {
	const [values, setValues]=useState({
	firstName:"",
	lastName:"",
	idNumber:"",
	occupation:"",
	gender:"",

	});
	const [submitted,setSubmitted]=useState(false);

	const handleFirstNameinputChange =(event) => {
		setValues({...values,firstName: event.target.value})
	}
	const handlelastNameinputChange =(event) => {
		setValues({...values,lastName: event.target.value})
	}


  return (
    <div className="form-container">
			<form className="my-form">
				<input
					value={values.fisrtName}
					className="form-field"
					placeholder="First Name"
					name="FirstName"
				/>
				<span>Please type first name</span>
				<input
					value={values.lastName}
					className="form-field"
					placeholder="Last Name"
					name="LastName"
				/>
				<span>Please type last name</span>
				<input
					value={values.idNumber}
					className="form-field"
					placeholder="ID Number"
					name="IDNumber"
				/>
				<span>Please type ID number</span>
				<input
					value={values.occupation}
					className="form-field"
					placeholder="Occupation"
					name="occupation"
				/>
				<span>Please type your Occupation</span>
				<input
					value={values.gender}
					className="form-field"
					placeholder="Gender"
					name="gender"
				/>
				<span>Please select Gender</span>
				<button className="form-field" type="Submit">Sign up</button>
			
			</form>
		
		
		</div>
  );
}

export default App;