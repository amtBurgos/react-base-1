import React from "react";
import { storiesOf } from "@storybook/react";
import { number } from "@storybook/addon-knobs";

import Pagination from "../";

const MyPage = ({ page }) => (
  <div>
    <h3>Page {page}</h3>
    <p>Content example - {page}</p>
  </div>
);

storiesOf("Pagination", module)
  .addDecorator(story => (
    <div style={{ textAlign: "center" }}>
      <h1>Pagination</h1>
      {story()}
    </div>
  ))

  .add("no props", () => <Pagination />)

  .add("with infinite pages", () => {
    const range = number("Page range", 5);
    return (
      <Pagination range={range}>{page => <MyPage page={page} />}</Pagination>
    );
  })

  .add("with finites pages", () => {
    const range = number("Page range", 5);
    const totalPages = number("Total pages", 10);
    return (
      <Pagination
        range={range}
        size={totalPages}
        onSelect={page => console.log("Current page:", page)}
      >
        {page => <MyPage page={page} />}
      </Pagination>
    );
  })

  .add("starting from page 5", () => {
    const range = number("Page range", 5);
    const totalPages = number("Total pages", 10);
    return (
      <Pagination
        firstPage={5}
        range={range}
        size={totalPages}
        onSelect={page => console.log("Current page:", page)}
      >
        {page => <MyPage page={page} />}
      </Pagination>
    );
  });
