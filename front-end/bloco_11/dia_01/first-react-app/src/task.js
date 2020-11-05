const task = (value, key) => {
  return (
    <li key={key.toString()}>{value}</li>
  ); 
}

export default task;