import "./App.css";

function App() {
	const openAlert = () => {
		alert(
			"Woaaaah! You're a bit early for that! We'll let you know when you can RSVP."
		);
	};

	return (
		<div className="App">
			<div className="date" onClick={openAlert}>
				{/* <a
					className="date"
					href="https://calendar.app.google/k6NXMeqSvjMYcBfMA"
					target="_blank"
				>
					Calendar Invite
				</a> */}
			</div>
		</div>
	);
}

export default App;
