import logo from './assets/logo.svg'
import cart from './assets/icon-cart.svg'
import avatar from './assets/image-avatar.png'

function Navbar() {
	return (
		<div className='p-5 flex justify-center items-center gap-6'>
			<img className='pr-5' src={logo} alt='Site sneakers logo' />
			<button>Collections</button>
			<button>Men</button>
			<button>Women</button>
			<button>About</button>
			<div className='flex-1'>
				<button>Contact</button>
			</div>

			<div className='flex items-center justify-evenly gap-5'>
				<button className=''>
					<img src={cart} alt='Cart logo' />
				</button>
				<button className='w-2/6'>
					<img className='' src={avatar} alt='User avatar' />
				</button>
			</div>
		</div>
	)
}

export default Navbar
