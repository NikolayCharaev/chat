import Register from '@/components/pages/Register';
import Auth from '@/components/pages/Auth';

function App() {
  return (
    <div className="app">
      <div className="flex justify-center items-center w-full h-screen">
        {/* <Auth/> */}
        <Register />
      </div>
    </div>
  );
}

export default App;
