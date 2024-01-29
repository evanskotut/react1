import { useState } from "react";
interface props {
  items: string[];
  heading: string;
  onselectitem: (item: string) => void;
}

function ListGroup({ items, heading, onselectitem }: props) {
  //   let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const [selectedindex, setselectedindex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>no item found</p>}
      <p>no item found</p>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedindex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setselectedindex(index);
              onselectitem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
