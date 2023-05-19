import Timer from "./components/Timer/Timer";

const time = 120;

function App() {
    return (
        <Timer time={time} autostart={true} steps={2} />
    );
}

export default App;