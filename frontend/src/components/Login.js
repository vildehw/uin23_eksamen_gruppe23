export default function Login({setEmail, login, user}) {

  // Funksjon som setter staten email til verdien av email-input feltet, så vi kan sjekke om mailen stemmer overens med en bruker
  function handleClick(){
    setEmail(document.getElementById("email-input").value)
    login()
    console.log(user)
  }

  return(
    <section id="login-window">
      <form>
      <label htmlFor="email" >Email</label>
      <input type="text" id="email-input" name="email" placeholder="olanordmann@hotmail.no"></input>
      </form>
      <button id="login-btn" onClick={handleClick}>LOGIN</button>
    </section>
  )
}