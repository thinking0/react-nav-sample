
import React from 'react';
import "./category.css";
import {Route, BrowserRouter, BrowserRoute,Nav,NavLink } from "react-router-dom";
import Accordion2 from "../accordion"


const Style={
    item:{
        width:50,
        height:50,
        borderRadius:50/2
    }

}
function CategoryItem(props) {
    return (
    <div className="container">
        <img className="item" alt='d' src={props.src} style={Style.item}/>
    </div>
    )
}

function Category() {
  return (
    <div>
            <div>
                <NavLink activeClassName="is-active" to="/c1">
                    <CategoryItem src={'https://images.homify.com/c_fill,f_auto,h_500,q_auto,w_1280/v1534144700/p/photo/image/2675075/%EB%B6%80%EC%B2%9C_%EC%98%A5%EA%B8%B8_%EC%9E%90%EC%9D%B4_%EC%9D%B4%EC%A6%88%ED%99%88%EC%9D%B8%ED%85%8C%EB%A6%AC%EC%96%B4_2.jpg'} />
                </NavLink>
                <NavLink activeClassName="is-active" to="/cc">
                    <CategoryItem src={'https://images.homify.com/c_fill,f_auto,h_500,q_auto,w_1280/v1534144700/p/photo/image/2675075/%EB%B6%80%EC%B2%9C_%EC%98%A5%EA%B8%B8_%EC%9E%90%EC%9D%B4_%EC%9D%B4%EC%A6%88%ED%99%88%EC%9D%B8%ED%85%8C%EB%A6%AC%EC%96%B4_2.jpg'} />
                </NavLink>
            </div>
    </div>
    )
}
class App extends React.Component {

    render(){

        return<div></div>
    }
}

export default Category;
