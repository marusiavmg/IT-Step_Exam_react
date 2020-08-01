import React from "react";
import { Button } from "@material-ui/core";

const initialState = {
  name: "",
  article: "",
  count: "",
  price: "",
  date: "",
  priceSegment: "",
  image: "",
  description: "",
  id: "",
};

export class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  handleChangeName = (e) => {
    this.setState({
      name: e.target.value,
      id: Date.now(),
    });
  };

  handleChangeArticle = (e) => {
    this.setState({
      article: e.target.value,
    });
  };

  handleChangeCount = (e) => {
    this.setState({
      count: e.target.value,
    });
  };

  handleChangePrice = (e) => {
    this.setState({
      price: e.target.value,
    });
  };

  handleChangeDate = (e) => {
    this.setState({
      date: e.target.value,
    });
  };

  handleChangeRadio = (e) => {
    this.setState({
      priceSegment: e.target.value,
    });
  };
  handleChangeLink = (e) => {
    this.setState({
      image: e.target.value,
    });
  };

  handleChangeDescription = (e) => {
    this.setState({
      description: e.target.value,
    });
  };

  addItem = (e) => {
    e.preventDefault();   
    const { addItem } = this.props;
    addItem(this.state);
    //clear form
    this.setState(initialState);
  };

  render() {
    return (
      <form className="form" onSubmit={this.addItem}>
        <div className="form__title">{this.props.value}</div>

        <div>
          <label htmlFor="nameProduct">Name</label>
          <input
            value={this.state.name}
            onChange={this.handleChangeName}
            type="text"
            className="form__input"
            id={this.state.id}
            pattern="[A-Z][A-z]+"
            title="This input should contain at list 5 characters and and start with an uppercase letter "
            minLength={4}
            placeholder="Product name"
            required
          />
        </div>

        <div>
          <label htmlFor="nameArticle">Article</label>
          <input
            value={this.state.article}
            onChange={this.handleChangeArticle}
            type="text"
            className="form__input"
            id="nameArticle"
            pattern="[A-Z][0-9][0-9][A-z0-9]+"
            title="Article must begin with a capital letter and then includes 2 number"
            minLength="4"
            placeholder="F25vs6..."
            required
          />
        </div>

        <div>
          <label htmlFor="nameCount">Count</label>
          <input
            value={this.state.count}
            onChange={this.handleChangeCount}
            type="number"
            className="form__input"
            id="nameCount"
            pattern="[0-9]+"
            min="1"
            placeholder="Enter number of product"
            required
          />
        </div>

        <div>
          <label htmlFor="namePrice">Price</label>
          <input
            value={this.state.price}
            onChange={this.handleChangePrice}
            required
            className="form__input"
            pattern="[0-9]+"
            title="This input should contain only numbers"
            min="1"
            type="number"
            placeholder="Enter cost of product (100$)"
            id="namePrice"
          />
        </div>

        <div>
          <label htmlFor="creationDate">Creation date</label>
          <input
            value={this.state.date}
            onChange={this.handleChangeDate}
            type="date"
            required
            className="form__input"
            id="creationDate"
          />
        </div>

        <div className="form__heading">Price segment</div>

        <div>
          <label htmlFor="cheapSegment">Cheap</label>
          <input
            type="radio"
            value="cheap"
            checked={this.state.priceSegment === "cheap"}
            onChange={this.handleChangeRadio}
            id="cheapSegment"
            name="priceSegment"
          />
        </div>

        <div>
          <label htmlFor="optimalSegment">Optimal</label>
          <input
            type="radio"
            value="optimal"
            checked={this.state.priceSegment === "optimal"}
            onChange={this.handleChangeRadio}
            id="optimalSegment"
            name="priceSegment"
          />
        </div>

        <div>
          <label htmlFor="premiumSegment">Premium</label>
          <input
            type="radio"
            value="premium"
            checked={this.state.priceSegment === "premium"}
            onChange={this.handleChangeRadio}
            id="premiumSegment"
            name="priceSegment"
            required
          />
        </div>

        <div className="form__heading">Secondary information</div>

        <label htmlFor="picture">Image link</label>
        <input
          value={this.state.image}
          onChange={this.handleChangeLink}
          type="url"
          placeholder="http://..."
          className="form__input"
          id="picture"
        />

        <div className="form__heading">Description</div>

        <div>
          <textarea
            onChange={this.handleChangeDescription}
            value={this.state.description}
            cols="45"
            rows="5"
            placeholder="Description of product"
          />
        </div>

        <Button
          className="form__button"
          size="medium"
          type="submit"
          variant="contained"
        >
          Add
        </Button>
      </form>
    );
  }
}
