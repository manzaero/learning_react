import {Product} from "./components/Product";
import {useProduct} from "./hooks/products";
import {Loader} from "./components/loader";
import {ErrorMessage} from "./components/ErrorMessage";
import {Modal} from "./components/Modal";
import {CreateProduct} from "./components/CreateProduct";
import {createElement, useState} from "react";
import {IProduct} from "./models";


function App() {


    const [modal, setModal] = useState(true)

    const {loading, error, products, addProduct} = useProduct()

    const createHandler = (product: IProduct) => {
        setModal(false)
        addProduct(product)
    }

    return (
        <div className='container mx-auto max-w-2xl pt-5'>

            { loading && <Loader/> }
            { error && <ErrorMessage error={error}/> }

            { products.map((product, index) => <Product product={product} key={index}/>)}

            {modal && <Modal title='Create new product.' onClose={ ()=> setModal(false)}>

                <CreateProduct onCreate={createHandler}/>

            </Modal>}

            <button
                className='button fixed bg-blue-500 w-200 rounded px-10 mb-10 top-1 right-10'
                onClick={() => setModal(true)}
            >
                Modal
            </button>

            <button
                className='button fixed bg-blue-500 w-200 rounded px-10 mb-10 w-120 top-10 right-10'
                onClick={() => setModal(false)}
            >
                Close
            </button>

            {/*<Modal title='Warning!!'>*/}
            {/*    <Danger/>*/}
            {/*</Modal>*/}

            {/*<Product product={ products[0] }/>*/}
            {/*<Product product={ products[1] }/>*/}
        </div>
    )
}

export default App;
