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
        axios.get('http://localhost:5000/products')
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


    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        logOut,
        showPassword,
        setShowPassword,
        product,
        active,
        setActive,
        handleChair,
        handleClothing,
        handleElectronics
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