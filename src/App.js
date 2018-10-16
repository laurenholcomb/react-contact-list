// import ContactForm from './src/index.js';

// const Example = () => {
//     return (
//       <div>
//         <p className="text-muted">Contact<center/></p>
     
//       </div>
//     );
//   };
  
//   export default Example;

//   import React from 'react';

// const Example = () => {
//   return (
//     <div className="bg-info clearfix" style={{ padding: '.5rem' }}>
//       <button className="btn btn-secondary float-left">Example Button floated left</button>
//       <button className="btn btn-danger float-right">Example Button floated right</button>
//     </div>
//   );
// };

// export default Example;
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import ContactList from './components/ContactList';

const styles ={
    bodyWrapper: {
        display: 'flex'
        // height: '100vh' 
    }
}

const app = () => {
    return (
        <BrowserRouter>
        <div className="App">
        <Header/>
        <div style={styles.bodyWrapper}>
        <ContactList/>
        </div>
        </div>
        </BrowserRouter>
    );
}
export default app;
