import Timer from "./components/Timer/Timer";

const time = 120;

function App() {
    return (
        <Timer time={time} autostart={true} />
    );
}

export default App;