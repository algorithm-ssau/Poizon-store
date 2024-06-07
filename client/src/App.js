import { observer } from 'mobx-react-lite';
import './App.css';
import AppRouter from './components/AppRouter';
import {Context} from "//Poizon-store/client/src/index";
import React, {useContext, useState, useEffect} from 'react';
import {check} from "./http/userAPI"
import {Spinner} from "react-bootstrap";

 
const App = observer(() => {
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    check().then(data => {
        user.setUser(true)
        user.setIsAuth(true)
    }).finally(() => setLoading(false))
}, [])

if (loading) {
    return <Spinner animation={"grow"}/>
}
  return (
    <>
      <AppRouter/>
    </>
  );
})

export default App;
