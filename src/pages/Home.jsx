import Header from '../component/Header.jsx'
import Sidebar from '../component/Sidebar.jsx'
import ProductList from '../component/ProductList.jsx'
import Footer from '../component/footer.jsx'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Pagination } from '@mui/material';


function Home() {

    return (
        <>
            <Header></Header>
            <div className='flex m-10'>
                <Sidebar></Sidebar>
                <ProductList></ProductList>
            </div>
            <Pagination count={10} className='flex justify-center' color="primary" />
            <Footer></Footer>
        </>
    )
}

export default Home
