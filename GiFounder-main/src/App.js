import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import Gif from "./Components/gif";

function App() {
    const [gifs, setGifs] = useState([]);
    const [search, setSearch] = useState();
    const [load, setLoad] = useState(false);

    const find = (e) => {

    }
    async function getGifs(e) {
        e.preventDefault();
        setLoad(true)

            setGifs([]);

            let response = await fetch('https://api.giphy.com/v1/gifs/search?api_key=qmrAg05PpHCmXoRWXRxNjxZT85noW2DM&q='+search);
            let responseJson = await response.json();
            for(let i = 0; i < 25; i++){
                console.log(load)
                const temp = {id: i, url: responseJson.data[i].embed_url}
                setGifs(gifs => [...gifs, temp]);
                console.log(responseJson.data[i].embed_url)
            }

        setLoad(false)

    }
  return (
      <div>
          <h1>Find a GIF</h1>
          <form>

            <input placeholder="Введите название" className='myInput' type="text"  value={search} onChange={e => setSearch(e.target.value)}/>
            <button className='btnCreate' onClick={getGifs}>
                Найти!
            </button>
          </form>

          {load ? (<div className="lds-ring">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
              </div>
              ) : (gifs.map(gif => <Gif url={gif.url} key={gif.id} />))}
          <img className="gifLogo" src="https://uc9685a55b005874828cf2a9fe1d.previews.dropboxusercontent.com/p/thumb/ABhRLA9jN7he1nVplbRfxr5XJPm1SNMaENvVNvoW3PdFGaS39gh1KCz4qyuf3lP6TrzGu7hb-xqz9Q262mF3rCVt-BuAMJxdVJ4NUIQfYuSsozrRT6BemHBvPihdNiWmrNmcsgA4AIqESCjWGs9c1Cg8yqEc3SGpJ60BH8FBaGB1N2bWb2UmTy88CYNNlmsS8Z8t8ni6iYWd8sNq_EHBSQKcQXyzzDJ6VW6B2IAIYqKSFMvf8nHZyr6k62vaUUJsTaKNn49o5vVGaMpotgR0BeyIiT0H4qUsKV1u8T4RmC6kITFVtV-2YVzZv6XCwQPMQhrwvEhrm2obCStPg1P36joP-ocw9goqdFpWiTE2DBrjGvAeujDEa_rmD4ahgw8PrUhu5r4rxPmHfARhm_Aw5gd_/p.png" alt=""/>
      </div>
  );
}

export default App;
