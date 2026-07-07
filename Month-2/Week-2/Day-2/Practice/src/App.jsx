import "./App.css";
import Card from "./Card";
import Home from "./Home";
import Profile from "./Profile";

function App() {
  return (
    <>
      Hello
      {/* props conecept */}
      {/* <Home name={"Tapas"} age={30} obj={{email:"tapas@gmail.com",std1:{name:"student 1"}}}/> */}
      {/* <Profile fullName={"random person"} children={"children nenhi hey"}>
      <h1 className="bg-red-500">this is heading</h1>
    </Profile> */}
      <div className="w-[1200px] m-auto  grid grid-cols-3 gap-4">
        <Card
          animal={{
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZRaVTk0IvFgL9LJ60mEJfgb0xCceI9pNJmbZXwONifA&s",
            title: "Cat Title",
            desc: "this is the nice cat ",
          }}
        />
        <Card
          animal={{
            img: "https://img.magnific.com/free-vector/cute-simple-elephant-cartoon-isolated_1308-140154.jpg",
            title: "Elephant Title",
            desc: "this is the nice elephant ",
          }}
        />
        <Card
          animal={{
            img: "https://www.shutterstock.com/image-photo/tiger-peacefully-reclined-on-mossy-260nw-2519850751.jpg",
            title: "Tiger Title",
            desc: "this is the nice Tiger ",
          }}
        />
        <Card
          animal={{
            img: "https://plus.unsplash.com/premium_photo-1677850452987-d3ff550db018?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2hpdGUlMjBjb3d8ZW58MHx8MHx8fDA%3D",
            title: "Cow Title",
            desc: "this is the nice Cow ",
          }}
        />
        <Card
          animal={{
            img: "https://img.magnific.com/free-photo/closeup-adorable-golden-retriever-snowy-road-daylight_181624-60951.jpg?semt=ais_hybrid&w=740&q=80",
            title: "Dog Title",
            desc: "this is the nice Dog ",
          }}
        />
      </div>
    </>
  );
}

export default App;
