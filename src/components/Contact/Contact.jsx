import "./Contact.css"

const Contact = () => {
  return (
    <div id="Contact">
         <h1>Contact</h1>
         <p>Vous avez un projet ? Discutons-en !</p>
         <form action="#" method="post">
			<label htmlFor="name">Nom</label>
            <input type="text" name="name" id="name" placeholder="Entrez votre nom" required/>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Entrez votre email" required/>
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" placeholder="Entrez votre message" cols="30" rows="10" required></textarea>
            <input id="submit" type="submit" value="Envoyer"/>
		</form>
    </div>
  )
}

export default Contact