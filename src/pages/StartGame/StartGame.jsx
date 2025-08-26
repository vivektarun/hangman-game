import { Link } from "react-router-dom";

function StartGame() {

    return (
        <div>
            <h1>-------------Start Game------------</h1>
            <Link to='/play'>Go to play Game </Link>
        </div>
    );
}
export default StartGame;