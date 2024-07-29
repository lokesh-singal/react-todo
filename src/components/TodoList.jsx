import { RiDeleteBin6Line } from "react-icons/ri";
import { IoMdCheckboxOutline } from "react-icons/io";

export const TodoList = ({
  curListItem,
  curItemCheck,
  deleteItem,
  checkItem,
}) => {
  return (
    <li className="list-style">
      <p
        className={curItemCheck == true ? "checked" : null}
        style={{
          width: "80%",
          display: "flex",
          flexWrap: "wrap",
          fontSize: "1.125rem",
        }}
      >
        {curListItem}
      </p>
      <IoMdCheckboxOutline
        style={{ fontSize: "1.25rem", fill: "green" }}
        onClick={() => checkItem(curListItem)}
      />
      <RiDeleteBin6Line
        style={{ fontSize: "1.25rem", fill: "red" }}
        onClick={() => deleteItem(curListItem)}
      />
    </li>
  );
};
