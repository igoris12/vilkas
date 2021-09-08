import Img from "./Img";
import trains from '../nd1/data'

const data =trains;
const img = '../nd1/' 
console.log(data);
function App() {
    return (<>
        {data.map((data,i) => <Img title={data.desc} img={img+data.img} key={i}/>)}
        
    </>);
    }
    
export default App;