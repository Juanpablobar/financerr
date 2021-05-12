import { Link } from 'react-router-dom' 
import Button from '../../common/button'
import './styles.scss'

// Componente de la página de error 404
const Error404 = () => {
    return(
        <div className='error404'>
            <div className='error404-content'>
                <h2>404</h2>
                <h3>PAGE NOT FOUND!</h3>
                <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable</p>
                <Button children={<Link to='./'>BACK TO HOME</Link>} />
            </div>
        </div>
    )
}

export default Error404