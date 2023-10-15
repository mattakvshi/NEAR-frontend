import './inputComponent.css';

export default function InputComponent({ children, id, type, width }) {
	return (
		<div className='input-container'>
			<input id={id} className='input' type={type} placeholder=' ' />
			<div className='cut' style={{ width: width }}></div>
			<label for={id} className='placeholder'>
				{children}
			</label>
		</div>
	);
}
