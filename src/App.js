import useFetch from "./Hook/usefetch";
import { useState } from "react";


function App() {
  const { data, error, loading } = useFetch('https://api.github.com/users ')
  const [search, setSearch] = useState('');
  const filterUser = (e) => {
    setSearch(e.target.value)
  }
  return (
    <div className="App">
      <div className="navbar">
        <input type="text" onchange={filterUser} placeholder="Plese enter the username"></input>
      </div>

      <div className="container">
        {
          loading ? <h2>Working....</h2> : data.map((val) => {
            if (val.login.includes(search.toLowerCase()))
              return <card data={val} />
          })
        }

      </div>

    </div>
  );
}

export default App;
