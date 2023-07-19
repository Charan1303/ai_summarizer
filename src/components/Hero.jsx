import {logo} from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt="sumz_logo" 
        className='w-28 object-contain'/>

        <button
          type="button"
          onClick={() => window.open('https://https://github.com/Charan1303/ai_summarizer')}
          className='black_btn'
          >
          Github 
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize Articles with <br />
        <span className='orange_gradient'>OpenAI GPT-4</span>
      </h1>
      
      </header>
  )
}

export default Hero