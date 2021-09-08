import Img from "./Img";
import trains from '../nd1/data'

const data =trains;
console.log(data);
function App() {
    return (<>
        {data.map((data,i) => <Img title={data.desc} img={'../nd1/' +data.img} key={i}/>)}
        
    </>);
    }
    
export default App;