//import {Link} from 'react-router-dom';
import './Header.css';

export const Header = () => {
    return (
        <header className='head py-2 shadow-sm'>
            <div className="container d-flex flex-wrap align-items-center justify-content-center justify-content-md-between">
                <h1 className="col-12 col-md-6 text-wrap text-center text-lg-start m-0">Interviews Reports</h1>
                {/* <Link>Candidates</Link> */}
                <button className='candidatesBtn px-5 py-2 my-2'>Candidates</button>
            </div>
        </header>
    );
}