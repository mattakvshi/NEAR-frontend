import React from 'react';
import './style.css';
// import CustomCursorContext from "./context/CustomCursorContext";

// TODO: Hide if cursor not moved
const CustomCursor = ({ cursorSpeed }) => {
	// const { type } = useContext(CustomCursorContext);
	const secondaryCursor = React.useRef(null);
	const positionRef = React.useRef({
		mouseX: 0,
		mouseY: 0,
		destinationX: 0,
		destinationY: 0,
		distanceX: 0,
		distanceY: 0,
		key: -1,
	});

	React.useEffect(() => {
		document.addEventListener('mousemove', event => {
			const { clientX, clientY } = event;

			const mouseX = clientX;
			const mouseY = clientY;

			positionRef.current.mouseX =
				mouseX - secondaryCursor.current?.clientWidth / 2;
			positionRef.current.mouseY =
				mouseY - secondaryCursor.current?.clientHeight / 2;
		});

		return () => {};
	}, []);

	React.useEffect(() => {
		console.log(cursorSpeed);
		const followMouse = () => {
			positionRef.current.key = requestAnimationFrame(followMouse);
			const {
				mouseX,
				mouseY,
				destinationX,
				destinationY,
				distanceX,
				distanceY,
			} = positionRef.current;
			if (!destinationX || !destinationY) {
				positionRef.current.destinationX = mouseX;
				positionRef.current.destinationY = mouseY;
			} else {
				positionRef.current.distanceX = (mouseX - destinationX) * cursorSpeed;
				positionRef.current.distanceY = (mouseY - destinationY) * cursorSpeed;
				if (
					Math.abs(positionRef.current.distanceX) +
						Math.abs(positionRef.current.distanceY) <
					0.1
				) {
					positionRef.current.destinationX = mouseX;
					positionRef.current.destinationY = mouseY;
				} else {
					positionRef.current.destinationX += distanceX;
					positionRef.current.destinationY += distanceY;
				}
			}
			if (secondaryCursor && secondaryCursor.current)
				secondaryCursor.current.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`;
		};
		followMouse();
	}, [cursorSpeed]);
	return (
		<div className={`cursor-wrapper default`}>
			<div className='secondary-cursor' ref={secondaryCursor}></div>
		</div>
	);
};

export default CustomCursor;
