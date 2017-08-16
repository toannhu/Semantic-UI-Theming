import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { Button } from "semantic-ui-react";
import { Welcome } from "@storybook/react/demo";

import "semantic-ui-css/semantic.min.css";

storiesOf("Welcome", module).add("to Storybook", () => <Welcome showApp={linkTo("Button")} />);

storiesOf("Button", module)
  .add("with text", () => <Button onClick={action("clicked")}>Hello Button</Button>)
  .add("with some emoji", () => <Button onClick={action("clicked")}>😀 😎 👍 💯</Button>);

storiesOf("Test", module)
  .add("Button", () => <Button primary onClick={action("clicked")}>Test Button</Button>);
