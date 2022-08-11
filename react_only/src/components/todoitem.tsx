import PropTypes from 'prop-types';

interface Todo {
    id: number;
    text: string
    onDelete: Function
  }

const TodoItem = ({id, text, onDelete}: {id: number, text:string, onDelete:Function}) => {
    return (
        <div style={{color: "red",  padding: "1em", margin: "0.5em" , border:"solid"}} >
            <p id={id.toString()}>
                <button onClick={() => onDelete(id)}>DELETE</button>
                &nbsp; 
                {text} 
            </p>
        </div>            
    )
}

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
export default TodoItem
