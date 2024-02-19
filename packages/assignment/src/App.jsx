import { mount, useEffect } from './components/demo';

function App() {
    //Mounting the components
    useEffect(() => {
      console.log('State changed');
    })
    mount();
}

export default App
