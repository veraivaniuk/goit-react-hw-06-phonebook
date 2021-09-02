import { useSelector, useDispatch } from "react-redux";
import s from "./List.module.css";
import Button from "../Button";
import { getVisibleContacts } from "../../redux/selectors";
import contactsActions from "../../redux/actions";

function List() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  return (
    <ul>
      {contacts.map((el) => {
        return (
          <li className={s.list} key={el.id}>
            {el.name}: {el.number}
            <Button
              buttonName="Delete"
              onDelete={() => dispatch(contactsActions.deleteContact(el.id))}
            ></Button>
          </li>
        );
      })}
    </ul>
  );
}

export default List;
