import React from 'react';
import '../styles/card.css';

export interface CardContent {
  id: number | string;
  image: string;
  title: string;
  designer: string;
  categories: string;
  likes: string;
  views: string;
}

type CardProps = {
  card: CardContent;
  children?: React.ReactNode;
};

class Card extends React.Component<CardProps> {
  render() {
    return (
      <div className="card" key={this.props.card.id}>
        <div className="card-image">
          <img className="card-picture" src={this.props.card.image} alt={this.props.card.title} />
        </div>
        <div className="card-info">
          <h3 className="card-title">{this.props.card.title}</h3>
          <h4 className="card-designer">By {this.props.card.designer}</h4>
          <p className="card-categories">{this.props.card.categories}</p>
        </div>
        <div className="card-socials">
          <p className="card-likes">{this.props.card.likes}</p>
          <p className="card-views">{this.props.card.views}</p>
        </div>
      </div>
    );
  }
}

export default Card;
