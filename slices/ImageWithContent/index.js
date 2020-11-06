import React from "react";
import { array, shape } from "prop-types";
import { RichText } from "prismic-reactjs";

const section = {
  maxWidth: "1190px",
  margin: "4em",
};

const h2 = {
  color: "#8592e0",
};

const img = {
  width: "100%",
};

const MySlice = ({ slice }) => {
  const { title, description, image } = slice.primary;
  return (
    <section style={section}>
      {title ? (
        <RichText render={title} />
      ) : (
        <h2 style={h2}>Template slice, update me!</h2>
      )}
      {description ? (
        <RichText render={description} />
      ) : (
        <p>start by editing this slice from inside the SliceMachine builder!</p>
      )}
      {image ? <img src={image.url} /> : <img src="" />}
    </section>
  );
};

MySlice.propTypes = {
  slice: shape({
    primary: shape({
      title: array.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MySlice;
