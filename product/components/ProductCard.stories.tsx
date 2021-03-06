import React from "react";
import {Box} from "@chakra-ui/core";
import {action} from "@storybook/addon-actions";

import productMock from "../mock";

import ProductCard from "./ProductCard";

export default {
  title: "Product/Components/ProductCard",
  decorators: [(storyFn) => <Box maxWidth="240px">{storyFn()}</Box>],
};

export const full = () => <ProductCard product={productMock.full} onClick={action("onClick")} />;

export const raised = () => (
  <ProductCard isRaised product={productMock.full} onClick={action("onClick")} />
);

export const noVariants = () => (
  <ProductCard product={productMock.withoutVariants} onClick={action("onClick")} />
);

export const noStock = () => (
  <ProductCard
    product={{...productMock.withoutVariants, available: false}}
    onClick={action("onClick")}
  />
);
