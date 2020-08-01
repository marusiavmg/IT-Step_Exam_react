import React from "react";
import { RadioGroup, Radio, FormControlLabel } from "@material-ui/core";
import { FormGroup, Checkbox } from "@material-ui/core";

export function SearchForm(props) {
  return (
    <form className="search-form">
      <label>
        Search
        <input
          className="search-form__input"
          onChange={(event) => props.searchCallback(event.target.value)}
        />
      </label>
    </form>
  );
}

export function CategoryForm(props) {
 
  return (
    <form className="search-form">
      
      <div className="search-form__title">Filter by prise segment</div>
      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox
              defaultChecked={props.currentValue.cheap}
              onChange={(event) =>
                props.changePriceCategoryCallback({
                  cheap: event.target.checked,
                })
              }
              name="cheap"
              color="primary"
            />
          }
          label="Cheap"
          labelPlacement="start"
        />

        <FormControlLabel
          control={
            <Checkbox
              defaultChecked={props.currentValue.optimal}
              onChange={(event) =>
                props.changePriceCategoryCallback({
                  optimal: event.target.checked,
                })
              }
              name="optimal"
              color="primary"
            />
          }
          label="Optimal"
          labelPlacement="start"
        />

        <FormControlLabel
          control={
            <Checkbox
              defaultChecked={props.currentValue.optimal}
              onChange={(event) =>
                props.changePriceCategoryCallback({
                  premium: event.target.checked,
                })
              }
              name="premium"
              color="primary"
            />
          }
          label="Premium"
          labelPlacement="start"
        />
      </FormGroup>
    </form>
  );
}

export function SortForm(props) {
  const { dataSort } = props;

  return (
    <form className="sort-form">
      <div className="search-form__title">Sort by</div>
      <RadioGroup
        row
        aria-label="position"
        name="position"
        defaultValue="start"
        value={props.currentValue}
        onChange={(event) => dataSort(event.target.value)}
      >
        <FormControlLabel
          value="name"
          control={<Radio color="primary" />}
          labelPlacement="start"
          label="Name"
        />
        <FormControlLabel
          value="article"
          control={<Radio color="primary" />}
          labelPlacement="start"
          label="Article"
        />
        <FormControlLabel
          value="count"
          control={<Radio color="primary" />}
          labelPlacement="start"
          label="Count"
        />
        <FormControlLabel
          value="price"
          control={<Radio color="primary" />}
          labelPlacement="start"
          label="Price"
        />
        <FormControlLabel
          value="date"
          control={<Radio color="primary" />}
          labelPlacement="start"
          label="Date"
        />
      </RadioGroup>
    </form>
  );
}
