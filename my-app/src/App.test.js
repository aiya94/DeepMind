import React from "react";
import { render } from "@testing-library/react";

import AgentsList from "./Components/AgentsList";

it("renders AgentList Componenets", () => {
  const wrapper = render(<AgentsList />);
  expect(wrapper).toMatchSnapshot();
});
