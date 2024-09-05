import React from 'react';

const Footer = () => {
    return (
        <div className='bg py-16'>
            <footer className="footer text-base-content max-w-screen-xl mx-auto">
                <aside className='w-96'>
                    <img className='w-44' src="/icons/footer.png" alt="" />
                </aside>
                <nav className='text-lg font-medium w-96'>
                    <h6 className="text-white">About US</h6>
                    <a className="link link-hover text-c">Master Plan</a>
                    <a className="link link-hover text-c">Jobs</a>
                    <a className="link link-hover text-c">Invest</a>
                    <a className="link link-hover text-c">Pressroom</a>
                    <a className="link link-hover text-c">Blog</a>
                    <a className="link link-hover text-c">Contact</a>
                </nav>
                <nav className='text-lg font-medium w-96'>
                    <h6 className="text-white">Explore EEVE</h6>
                    <a className="link link-hover text-c">Unlock my Robot Power</a>
                    <a className="link link-hover text-c">Starlight</a>
                    <a className="link link-hover text-c">Robot Platform</a>
                    <a className="link link-hover text-c">EEVE Roadmap</a>
                </nav>
                <nav className='text-lg font-medium'>
                    <h6 className="text-white">Community & Support</h6>
                    <a className="link link-hover text-c">Willow X Community</a>
                    <a className="link link-hover text-c">Developer & Maker Access</a>
                    <a className="link link-hover text-c">Special Cases</a>
                </nav>
            </footer>
            <div className='border max-w-screen-xl mx-auto my-14'></div>
            <footer className='max-w-screen-xl mx-auto'>
                <div className='text-lg font-medium text-c flex items-center justify-between'>
                    <div className='flex items-center gap-4'>
                        <img className='w-5 h-5' src="/icons/fb.png" alt="" />
                        <img className='w-5 h-5' src="/icons/instagram.png" alt="" />
                        <img className='w-5 h-5' src="/icons/new-twitter.png" alt="" />
                        <img className='w-5 h-5' src="/icons/linkedin-02.png" alt="" />
                    </div>
                    <div className='flex items-center gap-10'>
                        <h1>March22 Recap</h1>
                        <h1>Privacy Policy</h1>
                        <h1>General Terms</h1>
                        <h1>Contact</h1>
                    </div>
                    <div className='flex items-center gap-3'>
                        <img src="/icons/🇺🇸.png" alt="" />
                        <h1>United States (English)</h1>
                    </div>
                </div>
                <footer className="footer footer-center text-c text-base-content mt-10 font-medium text-lg">
                    <aside>
                        <p>EEVE © {new Date().getFullYear()} . All right reserved.</p>
                    </aside>
                </footer>

            </footer>
        </div>
    );
};

export default Footer;