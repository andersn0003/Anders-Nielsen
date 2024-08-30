import './App.css';
import LinkBox from './components/LinkBox';
import Title from './components/Title';
import ToggleList from './components/ToggleList';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import { useRef, useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadSlim } from 'tsparticles-slim';
import Interests from './pages/Interests';
function App() {
  const handleSetPage = (pageNo) => {
    const movePage = document.getElementById(`${pageNo}`);
    if (movePage) {
      movePage.scrollIntoView({ behavior: 'smooth' })
    }
  }
  const particlesRef = useRef({
    particles: {
      number: {
        value: 400,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#6b7280"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000"
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 10,
        random: false,
        anim: {
          enable: true,
          speed: 10,
          size_min: 40,
          sync: false
        }
      },
      line_linked: {
        enable: false,
        distance: 200,
        color: "#000000",
        opacity: 1,
        width: 2
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: "bubble"
        },
        onclick: {
          enable: true,
          mode: "repulse"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 0.5
          }
        },
        bubble: {
          distance: 400,
          size: 4,
          duration: 0.3,
          opacity: 1,
          speed: 3
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  }
  );
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <div className="flex flex-row w-screen h-screen justify-center px-[20%] max-2xl:px-[10%] max-xl:px-[5%] max-[970px]:px-0 max-[860px]:flex-col ">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesRef.current}
      />
      <div className='w-[30%] h-full bg-gradient-to-br from-white via-gray-500 to-white px-[1px] shadow-[5px_0px_10px] z-30 max-[860px]:hidden'>
        <header className="w-full h-full  bg-[rgba(255_255_255_55)] py-10 px-4 flex flex-col items-center gap-5">
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
      <main className='flex flex-col h-full w-full bg-white overflow-auto p-10 gap-10 z-20'>
        <div id='1' className='w-full flex flex-col gap-4 items-center'>
          <Title content={'Work Experience'} />
          <Experience />
        </div>
        <div id='2' className='w-full flex flex-col gap-4 items-center'>
          <Title content={'Education'} />
          <Education />
        </div>
        <div id='3' className='w-full flex flex-col gap-4 items-center'>
          <Title content={'Skill'} />
          <Skills />
        </div>
      </main>
    </div>
  );
}

export default App;
