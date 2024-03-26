export const App = () => {
  return (
    <div className="xl:max-w-6xl md:max-w-3xl mx-auto my-[40px]">
      <div className="flex justify-between">
        <div className="">
          <img src="/images/logo.jpeg" className="w-[40px] h-[40px]" />
        </div>
      </div>
      <p className='text-3xl' style={{ fontFamily: "LINE Seed Sans TH Regular"}}>Pongpichet's Portfolio</p>
      <img src='/images/profile.jpg' className='w-[200px] h-[200px] rounded-full border-8 border-black hover:rotate-180 transform duration-1000' />
    </div>
  );
}