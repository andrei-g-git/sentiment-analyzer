import { Provider } from 'react-redux';
import { makeStore } from './redux/makeStore';
import MainComponent from './components/MainComponent';

const store = makeStore();

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <MainComponent/>
            </Provider>
        </div>
    )
}

export default App;
