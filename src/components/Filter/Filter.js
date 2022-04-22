import { useSelector, useDispatch } from "react-redux";
import actions from "../../redux/contactsAction";
import { Wrapper, Input } from "./Filter.styles";
import { getFilter } from "../../redux/contactSelectors";
const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const handleChange = (evt) => {
    dispatch(actions.filterChange(evt.target.value));
  };
  return (
    <Wrapper>
      <label>
        <p>Find contacts for name</p>
        <Input type="text" value={filter} onChange={handleChange} />
      </label>
    </Wrapper>
  );
};

export default Filter;
