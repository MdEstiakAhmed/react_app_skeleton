import { BrowserRouter } from "react-router-dom";
import Routing from "./Routing";
import { Provider } from "../context/Context";

const App = () => {
    return (
        <Provider>
            <BrowserRouter>
                <Routing />
            </BrowserRouter>
        </Provider>
    )
}

export default App;
