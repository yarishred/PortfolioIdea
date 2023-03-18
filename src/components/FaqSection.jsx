import React from "react";
import { Faq } from "../styles";
import { Toggle } from "./reusableComponents/Toggle";

//Framer Motion
import { LayoutGroup } from "framer-motion";

export const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <LayoutGroup>
        <Toggle title="How Do I Start?">
          <h4></h4>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus ullam inventore laborum illo vero, adipisci ea nam
              alias tenetur molestias?
            </p>
          </div>
        </Toggle>
        <Toggle title="Daily Schedule">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus ullam inventore laborum illo vero, adipisci ea nam
              alias tenetur molestias?
            </p>
          </div>
        </Toggle>
        <Toggle title="Different Payment Methods?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus ullam inventore laborum illo vero, adipisci ea nam
              alias tenetur molestias?
            </p>
          </div>
        </Toggle>
        <Toggle title="What Products Do You Offer?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus ullam inventore laborum illo vero, adipisci ea nam
              alias tenetur molestias?
            </p>
          </div>
        </Toggle>
      </LayoutGroup>
    </Faq>
  );
};
