import "./style.css";

function ItemListContainer(props) {
  const saludo = props.greatings;
  return (
    <div className="itContainer">
      <h1>{saludo}</h1>
    </div>
  );
}
export default ItemListContainer;
