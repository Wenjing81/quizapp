const Result = ({score, restartQuiz }) =>(
<section>
    <h2>Resultat</h2>
    <p>Du fick {score} rätta svar!</p>
    <p><button onClick ={restartQuiz}> Börja om </button></p>
</section>

)

export default Result;