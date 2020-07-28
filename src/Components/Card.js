import React from "react";
import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";
import EditIcon from "@material-ui/icons/Edit";

export class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggle: false,
      isInEditMode: false,
    };
  }

  handleClick = () => {
    this.setState({ isToggle: !this.state.isToggle });
  };

  edit = () => {
    this.setState({ isInEditMode: true });
  };

  handleClickChangeImage = (e) => {
    this.setState({ changeImage: e.target.value });
  };

  handleClickChangeName = (e) => {
    this.setState({ changeName: e.target.value });
  };

  handleClickChangePrice = (e) => {
    this.setState({ changePrice: e.target.value });
  };

  handleClickChangeCount = (e) => {
    this.setState({ changeCount: e.target.value });
  };

  handleClickChangeArticle = (e) => {
    this.setState({ changeArticle: e.target.value });
  };

  setLastOne = () => {
    if (this.props.count === 1) {
      return " (LAST ONE) ";
    }
  };

  setDefaultImg = () => {
    if (!this.props.image) {
      return "https://avatars.mds.yandex.net/get-pdb/1895114/f5ef2db2-2dea-48f7-bcec-c7593611dff8/s600";
    } else {
      return this.props.image;
    }
  };

  setDescription = () => {
    if (this.props.description) {
      return (
        <div className={this.state.isToggle ? "description" : "hidden"}>
          {this.props.description}
        </div>
      );
    } else {
      return "";
    }
  };

  updateItem = (e) => {
    e.preventDefault();
    // console.log(this.state);
    const { updateItem, id } = this.props;
    updateItem(id, this.state);
    this.setState({
      isInEditMode: false,
    });
  };

  componentDidMount() {
    this.setState({
      changeImage: this.props.image,
      changeName: this.props.name,
      changeCount: this.props.count,
      changePrice: this.props.price,
      changeArticle: this.props.article,
    });
  }

  renderNorm() {
    return (
      <div className={this.props.className} id={this.props.id}>
        <div>
          <img className="card__img" src={this.setDefaultImg()} />
        </div>
        <div>Name: {this.props.name}</div>
        <div>Price: {this.props.price}</div>
        <div>
          Count: {this.props.count}
          <span className="red">{this.setLastOne()}</span>
        </div>
        <div>Article: {this.props.article}</div>
        <div>Date: {this.props.date}</div>

        <div className="card__button">
          <Button variant="contained" onClick={this.handleClick}>
            Description
          </Button>
        </div>
        <div className="card__description">{this.setDescription()}</div>

        <Button
          className="card__button"
          variant="contained"
          startIcon={<EditIcon />}
          onClick={this.edit}
        >
          EDIT
        </Button>

        <span className="card__button">
          <Button
            variant="contained"
            color="secondary"
            startIcon={<DeleteIcon />}
            onClick={() => this.props.deleteItem(this.props.id)}
          >
            Delete
          </Button>
        </span>
      </div>
    );
  }

  renderEdit() {
    return (
      <form
        className={this.props.className}
        id={this.props.id}
        onSubmit={this.updateItem}
      >
        <div>
          <img className="card__img" src={this.setDefaultImg()} />
        </div>
        <div>
          <label className="card__label">
            Image
            <input
              value={this.props.changeImage}
              onChange={this.handleClickChangeImage}
              defaultValue={this.props.image}
              type="url"
              className="card__input"
            />
          </label>
        </div>

        <div>
          <label className="card__label">
            Name
            <input
              value={this.props.changeName}
              onChange={this.handleClickChangeName}
              defaultValue={this.props.name}
              pattern="[A-Z][A-z]+"
              title="This input should contain at list 5 characters and and start with an uppercase letter "
              minLength={5}
              className="card__input"
              required
            />
          </label>
        </div>

        <div>
          <label className="card__label">
            Price
            <input
              value={this.props.changePrice}
              onChange={this.handleClickChangePrice}
              defaultValue={this.props.price}
              pattern="[0-9]+"
              title="This input should contain only numbers"
              min={1}
              required
              className="card__input"
            />
          </label>
        </div>
        <div>
          <label className="card__label">
            Count
            <input
              value={this.props.changeCount}
              onChange={this.handleClickChangeCount}
              defaultValue={this.props.count}
              pattern="[0-9]+"
              min={1}
              title="This input should contain only numbers"
              className="card__input"
              required
            />
          </label>
        </div>
        <div>
          <label className="card__label">
            Article
            <input
              value={this.props.changeArticle}
              onChange={this.handleClickChangeArticle}
              defaultValue={this.props.article}
              pattern="[A-Z][0-9][0-9][A-z0-9]+"
              title="Article must begin with a capital letter and then includes 2 number"
              minLength={4}
              className="card__input"
              required
            />
          </label>
        </div>

        <div className="card__button">
          <Button
            type="submit"
            startIcon={<SaveIcon />}
            variant="contained"
            onClick={this.edit}
          >
            Save
          </Button>
        </div>
      </form>
    );
  }

  render() {
    return this.state.isInEditMode ? this.renderEdit() : this.renderNorm();
  }
}
