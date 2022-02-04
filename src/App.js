import './App.css'

import Navbar from './components/Navbar'
import Main from './components/Main'

function App() {
	return (
		<div className='h-full min-h-screen flex flex-col items-center'>
			<div className='max-w-7xl'>
				<Navbar />
				<hr className='m-5'></hr>
				<Main />
			</div>
		</div>
	)
}

export default App
