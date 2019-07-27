import React, { Component } from "react";
import Header from "./Header";
import NewsListItem from "./NewsListitem";

const API_URL =
  "https://newsapi.org/v2/everything?q=bitcoin&from=2019-06-27&sortBy=publishedAt&apiKey=242d96e64f34477ca3077bed18b69ddd";
class NewsPage extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    fetch(API_URL)
      .then(data => data.json())
      .then(result => this.setState({ articles: result.articles }))
      .catch(e => console.log(e));
  }

  render() {
    // console.log("render articles state", this.state.articles);
    let newsList = this.state.articles.map(article => (
      <NewsListItem
        newsDescription={article.description}
        newsTitle={article.title}
        author={article.author}
        thumbnail={article.urlToImage}
      />
    ));

    return (
      <div>
        <Header />
        {newsList}
      </div>
    );
  }
}

export default NewsPage;
