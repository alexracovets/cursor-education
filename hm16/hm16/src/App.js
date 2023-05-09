import Post from './components/Post/Post';
import ANAKIN_IMAGE from './img/anakin.jpg'
import RAY_IMAGE from './img/ray.jpg'

function App() {
  return (
      <Post author={{
        name: "Anakin skywalker",
        photo: ANAKIN_IMAGE,
        nickname: "@dart_vader"
      }}
            content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
            image={RAY_IMAGE}
            date={"26 лют."}
      />
  );
}

export default App;
