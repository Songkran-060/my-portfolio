import './App.css';

function App() {
  return (
    <div className="flex flex-col gap-y-[16px] w-full p-12 justify-center items-center">
      <p className='text-3xl Header'>Pongpichet's Portfolio</p>
      <img src='/images/profile.jpg' alt="Songkran's Profile" className='w-[200px] h-[200px] rounded-full border-8 border-black hover:rotate-180 transform duration-1000' />
    </div>
  );
}

export default App;
