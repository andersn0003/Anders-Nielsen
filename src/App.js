import './App.css';
import LinkBox from './components/LinkBox';
import Title from './components/Title';
import ToggleList from './components/ToggleList';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Interests from './pages/Interests';
function App() {
  const handleSetPage = (pageNo) => {
    const movePage = document.getElementById(`${pageNo}`);
    if (movePage) {
      movePage.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="flex flex-row w-screen h-screen justify-center px-[15%] max-2xl:px-[10%] max-xl:px-[5%] max-[970px]:px-0 max-[860px]:flex-col ">
      <div className='w-[40%] h-full bg-gradient-to-br from-white via-gray-500 to-white px-[1px] shadow-[5px_0px_10px] z-30 max-[860px]:hidden'>
        <header className="w-full h-full  bg-[rgba(255_255_255_55)] py-16 px-8 flex flex-col items-center gap-5">
          <img src='/img/avatar.png' alt="" className='rounded-full shadow-md' />
          <div className='text-[36px] text-center hover:drop-shadow-[0px_0px_3px_gray]'>Anders Nielsen</div>
          <div className='text-center text-[20px] font-serif font-semibold'>Kyiv, Ukraine</div>
          <LinkBox />
          <ToggleList setPageNum={handleSetPage} />
          <Interests />
        </header>
      </div>
      <div className='hidden max-[860px]:flex flex-row items-center justify-between gap-[4%] sticky top-0 px-10 py-4 bg-gradient-to-bl from-slate-500 via-white to-slate-500 opacity-90 shadow-[0px_5px_10px] z-40'>
        <div className='flex flex-col items-center'>
          <img src='/img/avatar.png' alt="" className='rounded-full shadow-md w-40 h-40 max-[470px]:w-32 max-[470px]:h-32' />
          <img src="https://readme-typing-svg.herokuapp.com?font=Serif&size=30&color=15F748FF&pause=3000&size=32&center=true&vCenter=true&width=300&height=50&lines=Anders+Nielson;Kyiv+Ukraine;Co-Founder;Program+Engineer" alt="Headline" />
          <LinkBox />
        </div>
        <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=14&pause=1000&color=15F748&center=false&vCenter=true&multiline=true&width=300&height=150&lines=Non-Fungible+Token;Trading;DeFi/DEX;Cross+Chain;Generative+AI" alt="Typing SVG" />
      </div>
      <main className='flex flex-col h-full w-full bg-gray-200 overflow-auto px-10 py-20 gap-10 z-20'>
        <div id='1' className='w-full flex flex-col gap-8 items-center'>
          <Title content={'Work Experience'} />
          <Experience />
        </div>
        <div id='2' className='w-full flex flex-col gap-8 items-center'>
          <Title content={'Education'} />
          <Education />
        </div>
        <div id='3' className='w-full flex flex-col gap-8 items-center'>
          <Title content={'Skill'} />
          <Skills />
        </div>
      </main>
    </div>
  );
}

export default App;
