import { useState } from 'react'

import cart from './assets/icon-cart-white.svg'
import product1 from './assets/image-product-1.jpg'
import product2 from './assets/image-product-2.jpg'
import product3 from './assets/image-product-3.jpg'
import product4 from './assets/image-product-4.jpg'
import product1thumb from './assets/image-product-1-thumbnail.jpg'
import product2thumb from './assets/image-product-2-thumbnail.jpg'
import product3thumb from './assets/image-product-3-thumbnail.jpg'
import product4thumb from './assets/image-product-4-thumbnail.jpg'

function Main() {
	const [selectedImage, setSelectedImage] = useState(product1)
	const [count, setCount] = useState(0)

	const handleProduct1 = () => {
		setSelectedImage(product1)
	}
	const handleProduct2 = () => {
		setSelectedImage(product2)
	}
	const handleProduct3 = () => {
		setSelectedImage(product3)
	}
	const handleProduct4 = () => {
		setSelectedImage(product4)
	}

	return (
		<div className=''>
			<div className='flex flex-row gap-5 items-center'>
				<div className='grid grid-rows-2 grow grid-flow-row gap-5 items-center grid-cols-4 bg-red-400'>
					<img
						className='rounded-md col-span-4 row-span-4'
						src={selectedImage}
						alt='Currently selected'
					/>

					<div className='grid grid-flow-row grid-cols-4 row-span-1'>
						<img
							className='rounded-md'
							src={product1thumb}
							alt='Shoe thumbnail'
							onClick={handleProduct1}
						/>
						<img
							className='rounded-md'
							src={product2thumb}
							alt='Shoe thumbnail'
							onClick={handleProduct2}
						/>
						<img
							className='rounded-md'
							src={product3thumb}
							alt='Shoe thumbnail'
							onClick={handleProduct3}
						/>
						<img
							className='rounded-md'
							src={product4thumb}
							alt='Shoe thumbnail'
							onClick={handleProduct4}
						/>
					</div>
				</div>

				<div className='flex flex-col gap-1 w-2/6'>
					<h1 className='text-xs text-orange-500 font-semibold pb-2'>
						SNEAKER COMPANY
					</h1>
					<h1 className='text-3xl font-semibold pb-5'>
						Fall Limited Edition Sneakers
					</h1>
					<h1 className='text-xs text-slate-500 pb-5'>
						These low-profile sneakers are your perfect casual wear companion.
						Featuring a durable rubber outer sole, they'll withstand everything
						the weather can offer.
					</h1>
					<span className='flex flex-row gap-5'>
						<h1 className='text-lg font-semibold'>$125.00</h1>
						<h1 className='rounded-md p-1 text-sm bg-orange-100 text-orange-500 font-semibold'>
							50%
						</h1>
					</span>

					<h1 className='text-sm font-semibold text-slate-400 line-through pb-5'>
						$250.00
					</h1>
					<div className='flex flex-row justify-evenly'>
						<span className='flex flex-row gap-6 items-center'>
							<button
								className='text-orange-500 font-semibold'
								onClick={() => setCount(count > 0 ? count - 1 : 0)}
							>
								-
							</button>
							<div className='w-2 flex items-center justify-center'>
								<h1 className='font-semibold text-xs'>{count}</h1>
							</div>

							<button
								className='text-orange-500 font-semibold'
								onClick={() => setCount(count + 1)}
							>
								+
							</button>
						</span>
						<button className='gap-2 flex items-center justify-center m-5 rounded-md bg-orange-500 text-white w-48 h-10 text-xs font-semibold shadow-lg'>
							<img className='w-4' src={cart} alt='Cart icon' />
							Add to cart
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Main
