import AddRoom from './components/room/AddRoom'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import ExistingRooms from './components/room/ExistingRooms';

// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import "/node_modules/bootstrap/dist/js/bootstrap.min.js"

function App() {

  return (
    <>
      <AddRoom/>
      <ExistingRooms />
    </>
  )
}

export default App
