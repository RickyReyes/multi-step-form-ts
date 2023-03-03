import { ReactNode } from "react";

interface CardProps {
  heading: string;
  desc: string;
  body: ReactNode;
}

const Card = ({ heading, desc, body }: CardProps) => {
  return (
    <section className="card">
      <h1 className="card__heading">{heading}</h1>
      <p className="card__desc">{desc}</p>
      {body}
    </section>
  );
};

export default Card;
