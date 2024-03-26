import classNames from "classnames";
import { useState } from "react";

export const App = () => {

  const [tab, setTab] = useState()
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  return (
    <div className="bg-cyan-200 min-h-screen">
      <div className="flex justify-between xl:p-[16px] p-[8px] bg-white">
        <div className="xl:hidden w-[36px] h-[36px]"></div>
        <div className="flex justify-center items-center">
          <img src="/images/logo.png" className="h-[64px]" />
        </div>
        <div className="xl:flex xl:gap-x-[64px] xl:items-center hidden">
          <p className="titleL cursor-pointer select-none">Home</p>
          <p className="titleL cursor-pointer select-none">Project</p>
          <p className="titleL cursor-pointer select-none">About</p>
        </div>
        <div className="xl:hidden flex relative items-center">
          <div 
            className="flex justify-center items-center border border-black rounded w-[36px] h-[36px] cursor-pointer"
            onClick={() => {
              setIsOpenMenu(!isOpenMenu)
            }}
          >
            <p className="titleL">≡</p>
          </div>
          <div className={classNames('bg-white absolute flex gap-y-[8px] z-50 justify-center divide-y-2 divide-black items-center flex-col w-[128px] rounded-lg shadow-2xl', {
            'top-[56px] right-0': isOpenMenu,
            'hidden': !isOpenMenu
          })}>
            <div className="p-[8px]">
              <p className="titleM cursor-pointer select-none">Home</p>
            </div>
            <div className="p-[8px]">
              <p className="titleM cursor-pointer select-none">Project</p>
            </div>
            <div className="p-[8px]">
              <p className="titleM cursor-pointer select-none">About</p>
            </div>
          </div>
        </div>
        <div className="xl:flex hidden xl:h-[64px] xl:w-[64px] w-[36px] h-[36px]"></div>
      </div>
      <div className="xl:max-w-6xl xl:mx-auto xl:my-[40px] mx-[24px] my-[24px]">
        <div className="xl:flex xl:justify-between">
          <div className="xl:flex xl:flex-col">
            <p className='titleL text-gray-600'>Hi, I'm Pongpichet</p>
          </div>
          <div className="xl:flex xl:justify-center xl:items-center xl:p-[30px] xl:border xl:border-violet-600 rounded-full">
            <img src='/images/profile.jpg' className='xl:w-[360px] xl:h-[360px] rounded-full transform scale-x-[-1]' />
          </div>
          
        </div>
        
      </div>
    </div>
  );
}