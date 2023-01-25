
function App() {

  const style = {
    button: `btn bg-primaryOrange text-white hover:shadow-[0px_0px_15px_2px_rgba(255,125,26,0.75)]`
  }

  return (
    <div>
     <button className={style.button}>Add to cart</button>
    </div>
  );
}

export default App;
