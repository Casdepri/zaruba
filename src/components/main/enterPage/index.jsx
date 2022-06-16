import './index.scss';
import Authorization from "./auth";
import Title from "./title";

function EnterPage() {
    return (
        <div className="enter-page d-flex flex-column justify-content-center">
            <Title />
            <Authorization />
        </div>
    );
}

export default EnterPage;
