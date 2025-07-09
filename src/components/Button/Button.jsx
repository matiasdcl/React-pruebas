/*import "./Button.css"

interface Props {
    label: String,
    parentMethod: () => void
}

export const Button = ({ label, parentMethod }: Props) => {

    return (
    <button className="custom-button"  onClick={}>
        {label}
    </button>
    )
}*/     //CODIGO TYPESCRIPT, INGORAR



//CODIGO JSX
import "./Button.css";

export const Button = ({ label, parentMethod }) => {
    return (
        <button className="custom-button" onClick={parentMethod}>
            {label}
        </button>
    );
};
