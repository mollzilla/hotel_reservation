// solo lo podemos usar cuandolo vamosa invocar
// import Button from '@material-ui/core/Button';
const { Button } = window['MaterialUI'];

const App = () => {
  return (
    <div>
      <HotelContainer data={hotelsData} />
    </div>

  )
}



ReactDOM.render(<App />, document.getElementById("root"));