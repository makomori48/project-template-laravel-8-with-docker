import React from "react";
import ReactDOM from "react-dom";

import Enzyme, { shallow,mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

import TodoItem from "@components/TodoItem";

it("stat onChange", () => {
	const statMock = jest.fn();
	const data = ['fgfgdg','118111']
	const event = {
		preventDefault() {},
		target: { value: "aca" }
	};
	const component = shallow(<TodoItem filter={data} setStatus={statMock} />);
	component.find(".jett").simulate("change", event);
	expect(statMock).toBeCalledWith("aca");
	
});

it("should render without crashing.", () => {
	const data = ['fgfgdg','118111']
	const component = shallow(<TodoItem  filter={data} />);
	const div = document.createElement("div");
	div.id = "mainDiv";
	ReactDOM.render(component, div);
});





