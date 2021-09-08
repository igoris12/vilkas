import Img from "./Img";
import trains from '../nd1/data'

const data =trains;
console.log(data);
function App() {
    return (<div className='container'>
        {data.map((data,i) => <Img title={data.desc} img={'../nd1/' +data.img} key={i}/>)}
        
    </div>);
    }
    
export default App;