import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.init";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import axios from 'axios';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {

    // All state management functions// 

    const [showPassword, setShowPassword] = useState(false);
    const [productData, setProductData] = useState([]);
    const [product, setProduct] = useState([]);
    const [cart, setCart] = useState([]);
    const [active, setActive] = useState([]);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    // Authentication System //

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }


    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    }, [])


    // fetch databases data //

    useEffect(() => {
        axios.get("https://furnil-flex-server.vercel.app/products")
            .then(res => {
                setProductData(res.data);
                setProduct(res.data);
            });
    }, []);




    // filtering data //

    const handleChair = () => {
        const chairData = productData.filter(p => p.category === "Chair")
        setProduct(chairData);
    };
    const handleClothing = () => {
        const clothingData = productData.filter(p => p.category === "Cloth")
        setProduct(clothingData);
    };
    const handleElectronics = () => {
        const clothingData = productData.filter(p => p.category === "Electronic")
        setProduct(clothingData);
    };

    // cart pricing //

    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    // function System
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => (error))
    }

    const handlePrevPage = () => {
        Swal.fire({
            position: "center",
            icon: "error",
            title: "Not Working",
            showConfirmButton: false,
            timer: 1500
        });
    }
    const handleNextPage = () => {
        Swal.fire({
            position: "center",
            icon: "error",
            title: "Not Working",
            showConfirmButton: false,
            timer: 1500
        });
    }

    // Function to increase the quantity
    const increaseQuantity = (id) => {
        const updatedQuantity = cart.map(item => {
            if (item._id === id) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        })
        setCart(updatedQuantity);
    };

    // Function to decrease the quantity
    const decreaseQuantity = (id) => {
        const updatedQuantity = cart.map(item => {
            if (item._id === id && item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        })
        setCart(updatedQuantity);
    };



    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        logOut,
        handleLogOut,
        showPassword,
        setShowPassword,
        product,
        cart,
        setCart,
        active,
        setActive,
        handleChair,
        handleClothing,
        handleElectronics,
        totalPrice,
        increaseQuantity,
        decreaseQuantity,
        handleNextPage,
        handlePrevPage
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
};