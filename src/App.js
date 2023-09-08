import Uplaodfile from './components/UplaodFile';
import Downloadfile from './components/DownloadFile';
import Deletefile from './components/DeleteFile';
import UpdateFile from './components/UpdateFile';

function App() {
  return (
    <div className="App">

      <center>
        <Uplaodfile />
        <Deletefile />
        <UpdateFile />
        <Downloadfile />
      </center>

    </div>
  );
}

export default App;
