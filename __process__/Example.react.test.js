import React from "react";
import ReactDOM from "react-dom";

import { cleanup } from "@testing-library/react";
import { mount, shallow } from "enzyme";

import Example, { renderToDOM } from "@components/Example";

describe("mount", () => {
	let wrapper;

	beforeEach(() => {
		wrapper = mount(<Example />);
	});

	it("init", () => {
		const render = wrapper.find(".app");
		expect(render).not.toBe("");
	});
});

// it("init filter", () => {
// 	const filMock = jest.fn();
// 	const event = {
// 		preventDefault() {},
// 		target: { status: "st" }
// 	};

// 	const component = shallow(<Example filterFn={filMock} />);

// 	component.find(filterFn).simulate("change", event);
// 	expect(filterFn).toBe(true);
// });

describe("<Example/>", () => {
	const originalRender = ReactDOM.render;
	const originalGetElement = global.document.getElementById;

	beforeEach(() => {
		global.document.getElementById = () => true;
		ReactDOM.render = jest.fn();
	});
	afterEach(cleanup);

	afterAll(() => {
		global.document.getElementById = originalGetElement;
		ReactDOM.render = originalRender;
	});

	it("should render without crashing.", () => {
		const component = shallow(<Example />);
		const div = document.createElement("div");
		div.id = "mainDiv";
		ReactDOM.render(component, div);
	});

	it("should call ReactDOM.render", () => {
		renderToDOM();
		expect(ReactDOM.render).toHaveBeenCalled();
	});
});
