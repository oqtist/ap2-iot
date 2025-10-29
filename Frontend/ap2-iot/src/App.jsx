import './App.css'

function App() {

  return (
    <>
      <h1>Formulário</h1>
      <div id='form-div'>
        <form action="">
          <label htmlFor="lorem">Lorem</label>
          <input type="text" name="" id="lorem" />
          <label htmlFor="ipsum">Ipsum</label>
          <input type="text" name="" id="ipsum" />
          <label htmlFor="dolor">Dolor</label>
          <input type="text" name="" id="dolor" />
          <label htmlFor="sit">Sit</label>
          <input type="text" name="" id="sit" />
          <label htmlFor="amet">Amet</label>
          <input type="text" name="" id="amet" />
          <button id='botao-submit' type="submit">Enviar</button>
        </form>
      </div>
    </>
  )
}

export default App
