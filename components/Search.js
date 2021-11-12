import React, { useState } from 'react'
import Scroll from './Scroll';
import SearchList from './SearchList';
import { Form, FormControl} from 'react-bootstrap';
import Btn from './Btn';
const Search = ({ details }) => {
    const [searchField, setSearchField] = useState("");

    const filteredDate = details.filter(
        item => {
        return (
            item
            .name
            .toLowerCase()
            .includes(searchField.toLowerCase()) ||
            item
            .category
            .toLowerCase()
            .includes(searchField.toLowerCase())
        );
        }
    );

    const handleChange = e => {
        setSearchField(e.target.value);
    };

    function searchList() {
        return (
          <Scroll>
            <SearchList filteredCard={filteredDate} />
          </Scroll>
        );
      }
    return (
      <>
         <Form className="d-flex">
            <FormControl
                type="search"
                placeholder="Поиск"
                className="mr-1"
                aria-label="Search"
                onChange = {handleChange}
            />
            <Btn style={'btn-purple'} text={'Поиск'} />
        </Form>
      </>
    );
}

export default Search
