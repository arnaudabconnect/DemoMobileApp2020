import React from 'react';
import LoadingScreen from '../LoadingScreen';
import { AppContext } from '../../../AppContext';

export default function LogoutScreen(){
    const {logout} = React.useContext(AppContext)
    React.useEffect(() => {
        logout();
    }, [])
    return (
        <LoadingScreen message="Déconnexion ..." /> 
    )
}