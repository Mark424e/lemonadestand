import '../output.css';

function Header() {

  return (
    <header className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white mb-10 shadow-lg'>
      <div className='container mx-auto py-8'>
        <div className="flex justify-between items-center">
          <a className='uppercase font-bold' href='index.js'>Lemonade Stand</a>
          <ul className='flex items-center gap-5'>
            <li className=''><a href='./index.js'>About</a></li>
            <li className='nav-item'><a href='index.js'>Contact</a></li>
          </ul>
        </div>
      </div>
    </header>
    
  );
}

export default Header;
