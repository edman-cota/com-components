import React from "react";

const possibleSizes = ["XS", "S", "M", "L", "XL", "XXL"];

interface Props {
  selectedSize: string;
  onSizeChange: (size: string) => void;
}

const SizeSelector: React.FC<Props> = ({ selectedSize, onSizeChange }) => (
  <div style={{ display: "flex" }}>
    {possibleSizes.map((size) => (
      <button
        type="button"
        key={size}
        className={selectedSize === size ? "active" : ""}
        onClick={() => onSizeChange(size)}
      >
        {size}
      </button>
    ))}
  </div>
);

export default SizeSelector;
