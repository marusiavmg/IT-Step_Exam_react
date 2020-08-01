import React from "react";
import "./App.css";
import { Card } from "./Components/Card.js";
import { SearchForm, CategoryForm, SortForm } from "./Components/FilterForm.js";
import { Form } from "./Components/Form.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      model: [
        {
          article: "R25h",
          count: 1,
          date: "2012/06/13",
          image:
            "https://img.5element.by/import/images/ut/goods/good_0b2c1508-ffa0-11e9-80c7-005056840c70/good_img_a6d82613-006c-11ea-80c7-005056840c70_600.jpg",
          name: "Macbook",
          price: 2000,
          description: "Very good Very good ",
          priceSegment: "premium",
          id: "1",
        },
        {
          article: "B42h4",
          count: 3,
          date: "2019/05/11",
          name: "CDplayer",
          price: 500,
          description: "Very good Very good ",
          priceSegment: "optimal",
          id: "2",
        },
        {
          article: "M18h4",
          count: 4,
          date: "2018/03/12",
          image:
            "https://avatars.mds.yandex.net/get-mpic/175985/img_id3041853602201130185.jpeg/9hq",
          name: "Camera",
          price: 800,
          description: "Very good Very good ",
          priceSegment: "cheap",
          id: "3",
        },
        {
          article: "G999",
          count: 13,
          date: "2020/01/15",
          image:
            "https://images.ru.prom.st/405057671_w200_h200_vstraivaemyj-morozilnik-teka.jpg",
          name: "Refrigerator",
          price: 1000,
          description: "Very good Very good ",
          priceSegment: "optimal",
          id: "4",
        },
        {
          article: "V66hkh",
          count: 8,
          date: "2020/04/18",
          image:
            "https://static.digit.in/default/dcdcd4470d86a2b3f07fd3977b0b2dbc8271975e.png?tr=w-1200",
          name: "Notebook",
          price: 1800,
          priceSegment: "optimal",
          id: "5",
        },
        {
          article: "R45jk",
          count: 1,
          date: "2020/07/21",
          image:
            "https://ekitimarket.com/wp-content/uploads/2020/02/1-11-5.jpg",
          name: "Television",
          price: 1500,
          priceSegment: "premium",
          id: "6",
        },
        {
          article: "V66hkh",
          count: 2,
          date: "2020/01/16",
          image:
            "https://images-na.ssl-images-amazon.com/images/I/71cSp62H%2BmL._AC_SL1500_.jpg",
          name: "Iron",
          price: 300,
          description: "Variable Steam and Temperature - Independent controls let you customize steam and temperature settings to get the best results every time",
          priceSegment: "cheap",
          id: "7",
        },
      ],

      search: "",
      priceCategory: {
        cheap: true,
        optimal: true,
        premium: true,
      },
      sortBy: "name",
    };
  }

  addItem = (item) => {
    console.log(item);
    const newItems = [...this.state.model, item];
    this.setState({
      model: newItems,
    });
  };

  deleteItem = (id) => {
    const filteredItems = this.state.model.filter((item) => item.id !== id);
    this.setState({
      model: filteredItems,
    });
  };

  updateItem = (
    id,
    card 
  ) => {
      const updateCard = this.state.model.map((item) =>
      item.id === id
        ? {
            ...item,
            name: card.changeName,
            image: card.changeImage,
            price: card.changePrice,
            count: card.changeCount,
            article: card.changeArticle,
            date: new Date().toLocaleDateString('zh-Hans-CN'),
          }
        : item
    );
    this.setState({
      model: updateCard,
    });
  };

  searchFilterCallback = (item) => {
    return item.name.toLowerCase().startsWith(this.state.search.toLowerCase());
  };

  priceCategoryFilterCallBack = (item) => {
    // console.log(this.state.priceCategory);
    const priceCategoryArray = [];
    Object.keys(this.state.priceCategory).forEach((key) => {
      if (this.state.priceCategory[key] === true) priceCategoryArray.push(key);
    });
    if (priceCategoryArray.includes(item.priceSegment)) return true;
  };

  sortCallBack = (itemFirst, itemSecond) => {
    if (itemFirst[this.state.sortBy] > itemSecond[this.state.sortBy]) {
      return 1;
    }
    if (itemFirst[this.state.sortBy] < itemSecond[this.state.sortBy]) {
      return -1;
    }
    if (itemFirst[this.state.sortBy] === itemSecond[this.state.sortBy]) {
      return 0;
    }
  };

  render() {
    return (
      <div className="wrapper">
        <Form value="Product addition form" addItem={this.addItem} />
        <div className="wrapperContainer">
          <div className="wrapperSearchFormsContainer">
            <SearchForm
              searchCallback={(value) => this.setState({ search: value })}
            />
            <CategoryForm
              changePriceCategoryCallback={(object) =>
                this.setState({
                  priceCategory: {
                    ...this.state.priceCategory,
                    ...object,
                  }
                })
              }
              currentValue={this.state.priceCategory}
            />
            <SortForm
              dataSort={(value) => this.setState({ sortBy: value })}
              currentValue={this.state.sortBy}
            />
          </div>
          <div className="product-container">
            {this.state.model
              .filter(this.searchFilterCallback)
              .filter(this.priceCategoryFilterCallBack)
              .sort(this.sortCallBack)
              .map((item) => (
                <Card
                  id={item.id}
                  key={item.id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  count={item.count}
                  article={item.article}
                  date={item.date}
                  description={item.description}
                  className={
                    item.priceSegment === "cheap"
                      ? "card card_border-grey"
                      : item.priceSegment === "optimal"
                      ? " card card_border-green"
                      : " card card_border-gold"
                  }
                  deleteItem={this.deleteItem}
                  updateItem={this.updateItem}
                />
              ))}
          </div>
        </div>
      </div>
    );
  }
}
export default App;
