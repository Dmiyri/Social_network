import React from 'react';
import {Field, reduxForm} from "redux-form";

const LoginForm =(props)=>{
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field placeholder={'Login'} component={'input'} name={'Login'}/>
			</div>
			<div>
				<Field placeholder={'Password'} component={'input'} name={'Password'}/>
			</div>
			<div>
				<Field type={'Checkbox'} component={'input'} name={'Remember me'}/> Remember me
			</div>
			<div>
				<button>Login</button>
			</div>
		</form>
	)
}

const LoginReduxForm = reduxForm({form:'login'})(LoginForm)

const Login =(props)=>{
const onSubmit = (formData)=>{
	console.log(formData)
}
	return <div>
		<h1>Login</h1>
		<LoginReduxForm onSubmit ={onSubmit}/>
	</div>
}

export default Login;