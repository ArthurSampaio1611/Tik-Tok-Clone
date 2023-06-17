import './App.css';
import Video from './pages/Video';

function App() {
  return (
    <div className="App">
      <div className='app-videos'>
        <Video 
          likes={111}
          messages={222}
          shares={333}
          name="Arthur"
          description="Brecker o goleiro"
          music="musica épica"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z"
        />
        <Video 
          likes={444}
          messages={555}
          shares={666}
          name="Julio"
          description="Gato Pulando"
          music="musiiquinha"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4?t=2023-05-22T19%3A40%3A47.052Z"
        />
      </div>
    </div>
  );
}

export default App;
