const Welcome = ({ nextScreen })=>(

    <section>
        <h2>Välkommen till denna Quiz!</h2>
        <p>vill du sätta igång?</p>
        <button onClick ={nextScreen}>Ja!</button>

    </section>
)

export default Welcome;