import './radioButtonComponent.css';

export default function RadioButtonComponent({ children, id, name, value }) {
	return (
		<div className='input-container-radio'>
			<input id={id} type='checkbox' name={name} value={value} />
			<label htmlFor={id}>{children}</label>
		</div>
	);
}
