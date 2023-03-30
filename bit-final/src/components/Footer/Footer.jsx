import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer py-1 fixed-bottom shadow-sm'>
            <div className='container d-flex align-items-center flex-column'>
                <h4 className='p-0'>&copy; 2023 BIT Students:</h4>
                <div className='d-flex flex-md-row align-items-center justify-content-center'>
                    <a href='https://github.com/danicamih' target='_blank' rel='noopener noreferrer' className='px-3 py-1 text-decoration-none text-center'>Danica Mihailovic</a>
                    <a href='https://github.com/Djanelej1' target='_blank' rel='noopener noreferrer' className='px-3 py-1 text-decoration-none text-center'>Jelena Dabic</a>
                    <a href='https://github.com/IvaKrsmanovic' target='_blank' rel='noopener noreferrer' className='px-3 py-1 text-decoration-none text-center'>Iva Krsmanovic</a>
                    <a href='https://github.com/andjelijastankovic' target='_blank' rel='noopener noreferrer' className='px-3 py-1 text-decoration-none text-center'>Andjelija Stankovic</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;