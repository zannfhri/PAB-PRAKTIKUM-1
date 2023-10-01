// Button Component
const MyButton = (props) => {
    return (
        <button onClick={props.onClick} value={props.value} style={{ margin: "0px" }}>
            {props.children}
        </button>
    );
}

// App Component
const MyApp = () => {
    const [count, setCount] = React.useState(0);

    const handleIncrement = (value) => {
        setCount(count + value);
    };

    return (
        <div>
            <h1>{count}</h1>
            <MyButton onClick={() => handleIncrement(-1)} value={-1}>-1</MyButton>
            <MyButton onClick={() => handleIncrement(1)} value={1}>+1</MyButton>
        </div>
    );
}

const myElement = <MyApp />;
const myApp = myElement;

ReactDOM.createRoot(document.getElementById('root')).render(myApp);
