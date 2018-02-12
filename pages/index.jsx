import React, { Component } from 'react';
import Layout from '../common/Layout';


export default class Index extends Component {
  constructor() {
    super();
    this.state = {
      menuD: null,
      cartItems: []
    };
    this.addCartItem = (item) => {
      this.setState({cartItems: this.state.cartItems.slice().concat([item])})
    };
    this.emptyCart = () => {
      this.setState({cartItems: []})
    };
    this.cartSum = () => this.state.cartItems.reduce((sum, item) => (sum + item.price), 0);
    this.cartCalories = () => this.state.cartItems.reduce((sum, item) => (sum + item.calories), 0);
  }

  componentDidMount() {
    const URL = "http://localhost:3004/menuData";
    fetch(URL)
      .then(res => res.json())
      .then(json => {
        this.setState({menuD: json});
      });
  }

  render() {
    const menuD = this.state.menuD;
    if (!menuD) return <div>Loading</div>;
    return (
      <Layout title="Menu App">
        <div className="container justify-content-center menu">
          {menuD.map((item, index) => {
            const imgURL = `http://localhost:3000/static/img/${item.img}.jpeg`;
            return (
              <section className="row" key={index}>
                <div className="col-md-4 menu-img">
                  <img src={imgURL}/>
                </div>
                <div className="col-md-4">
                  <h2>{item.menuItem}</h2>
                  <p>Calories: {item.calories}, Total Fat: {item.fat}</p>
                  <p>Carbs: {item.carbs}, Protein: {item.protein}</p>
                  <p>Price: {item.price}</p>
                </div>
                <div className="col-md-4">
                  <button className="btn btn-primary btn-large"
                          onClick={() => this.addCartItem(item)}>
                    Add To Cart</button>
                </div>
              </section>
            )
          })}
          <div className="row">
            <h3 className="col-md-12">
              Your Cart
            </h3>
          {this.state.cartItems.map((item) => (
              <span className="col-md-2">{item.menuItem}</span>
          ))}
          </div>
          <div className="row justify-content-center">
            <h5 className="col-md-3">Number of Item: {this.state.cartItems.length}</h5>
            <h5 className="col-md-3">The Price: {this.cartSum()}</h5>
            <h5 className="col-md-3">The Calories: {this.cartCalories()}</h5>
            <button
              className="col-md-3 btn btn-danger btn-large"
              onClick={this.emptyCart}
            >
              Clear Button
            </button>
          </div>
        </div>
      </Layout>
    );
  }
}