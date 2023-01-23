export default function TodoElement(props) {
    return (
        <div className='todo-element'>
            <h1 >
                {props.t}
            </h1>
           <p>
        {props.c}
            </p>
        </div>
    )
}
