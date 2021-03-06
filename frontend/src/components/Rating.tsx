import React from "react";

interface RatingProps {
  value: number | undefined;
  text: string;
  color?: string;
}

const Rating: React.FC<RatingProps> = (props) => {
  const { value, text, color } = props;

  return (
    <div className="rating">
      <span>
        <i
          style={{ color }}
          className={
            value && value >= 1
              ? "fas fa-star"
              : value && value >= 0.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        />
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value && value >= 2
              ? "fas fa-star"
              : value && value >= 1.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        />
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value && value >= 3
              ? "fas fa-star"
              : value && value >= 2.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        />
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value && value >= 4
              ? "fas fa-star"
              : value && value >= 3.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        />
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value && value >= 5
              ? "fas fa-star"
              : value && value >= 4.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        />
      </span>
      <span>{text && text}</span>
    </div>
  );
};

Rating.defaultProps = {
    color: "#f8e825"
}

export default Rating;
