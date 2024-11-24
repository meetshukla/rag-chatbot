import FileUpload from "./components/FileUpload";
import Chat from "./components/Chat";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <FileUpload />
      <Chat />
    </div>
  );
};

export default App;
