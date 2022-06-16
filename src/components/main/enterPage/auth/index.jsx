import { Button } from "react-bootstrap";
import ButtonComponent from "../../../etc/buttonComponent";

function Authorization() {
    return (
        <div className="authorization d-flex flex-column align-items-center">
            <ButtonComponent />
            <label htmlFor="take_my_position">
                <input type="checkbox" name="take_my_position" id="take_my_position" className="pl-5" />
                Использовать мою геолокацию (рекомендуется)</label>
        </div>
    );
}

export default Authorization;
