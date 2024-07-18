
function Navbar() { 
    return (
        <div className="mb-20 flex items-center justify-between text-white">
            <p className='text-4xl'>Portfolio</p>
            <div className='m-8 flex items-center justify-between gap-4 text-2xl'>
                <a href='https://www.linkedin.com/in/pratik-kumbhar-08b216246'><i class="fa-brands fa-linkedin ml-2"></i></a>
                <a href='https://github.com/Pratik5357'><i class="fa-brands fa-github ml-2"></i></a>
                <a href='https://www.instagram.com/pratik7642?igsh=OHFoNWUwa2JucXZl&utm_source=qr'><i class="fa-brands fa-instagram ml-2"></i></a>
            </div>
        </div>
    )
}

export default Navbar