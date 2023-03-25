import React from 'react';
import { CardContent } from 'utils/types';
import '../styles/card.css';

type CardProps = {
  card: CardContent;
  children?: React.ReactNode;
};

class Card extends React.Component<CardProps> {
  render() {
    const { id, image, title, designer, categories, likes, views } = this.props.card;
    return (
      <div className="card" key={id}>
        <div className="card-image">
          <img className="card-picture" src={image} alt={title} />
        </div>
        <div className="card-info">
          <h3 className="card-title">{title}</h3>
          <h4 className="card-designer">By {designer}</h4>
          <p className="card-categories">{categories}</p>
        </div>
        <div className="card-socials">
          <p className="card-likes">{likes}</p>
          <p className="card-views">{views}</p>
        </div>
      </div>
    );
  }
}

export default Card;
