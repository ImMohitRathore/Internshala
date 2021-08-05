import React, {  useState } from "react";
import "./Home.css";
import{ useHistory} from "react-router-dom"


const Home = () => {
    const [input, setinput] = useState("");
    const [item, setitem] = useState([]);
    const [toggel, setoggl] = useState(true);
    const [editdata, seteditdata] = useState(null);
    const [mode , setmode] = useState(false)
    
    const history = useHistory()
  const Add = () => {
    if (!input) {
      alert("write something");
    } else if (input && !toggel) {        
      setitem(
        item.map((elem) => {
          if (elem.id === editdata) {
            return { ...elem.name, name: input };
          }
          return elem;
        })
      );
      setoggl(true);
      setinput("");
      seteditdata(null);
    } else {
      const allinputData = { id: new Date().getTime().toString(), name: input };
      setitem([...item, allinputData]);
      setinput("");
    }
  };


//   delete function
  const del = (index) => {
    const update = item.filter((arr) => {
      return index !== arr.id;
    });

    setitem(update);
  };
//   all item delete fuction
  const remove = () => {
    setitem([]);
  };

// edit fuction
  const edit = (id) => {
    const newEditItem = item.find((Ele) => {
      return Ele.id === id;
    });
    setoggl(false);
    setinput(newEditItem.name);
    seteditdata(id);
  };


  const logout = ()=>{
    
    history.push("/")
  }

  

  return (
    <>
      <div className= {mode ? "main1  light-mode" : "main1"}>
        <h1> TODO LIST </h1>
        <div className="card1">
          <div className="additem">
            <input
              type="text"
              placeholder="Add items....."
              value={input}
              onChange={(event) => {
                setinput(event.target.value);
              }}
            />
            {toggel ? (
              <button className="input_btn" onClick={Add}>
                +
              </button>
            ) : (
              <button className="input_btn" onClick={Add}>
                <i class="zmdi zmdi-edit"></i>
              </button>
            )}
          </div>
          <div className="some">
            <div className="someitem">
              {item.map((element) => {
                return (
                  <div className="each_item" key={element.id}>
                    <h3>{element.name}</h3>
                    <button
                      className="input_btn"
                      onClick={() => edit(element.id)}
                    >
                      <i class="zmdi zmdi-edit"></i>
                    </button>
                    <button
                      className="input_btn-del"
                      onClick={() => del(element.id)}
                    >
                      <i class="zmdi zmdi-delete"></i>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="last">
            <button className="lst_btn" onClick={remove}>
              check List
            </button>
          </div>
        </div>
        <div className="logout"><button onClick ={logout}>logout</button></div>
        
      </div>
    </>
  );
};
export default Home;
