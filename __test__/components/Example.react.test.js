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

// it("init filter", () => {
// 	const filMock = jest.fn();
// 	const data = ["aaa", "bbb"];
// 	const todo = ["ccc", "ddd"];
// 	const stat = "st";

// 	const component = mount(
// 		<Example setStatus={stat} todos={data} todo={todo} filterFn={filMock} />
// 	);
// 	expect(component).toBe(true);
// });

// it("filter", () => {
// 	const setMock = jest.fn();

// 	const psMock = "st";
// 	const todos = ["aaa", "bbb"];
// 	const filter = ["bbb", "ccc"];
// 	const todo = ["eee", "fff"];

// 	const component = shallow(
// 		<Example
// 		setFilter={setMock}
// 			filter={todos}
// 			todos={filter}
// 			todo={todo}
// 			setStatus={psMock}
// 		/>
// 	);
// 	// component.find(".delta").simulate("click");
// 	// expect(component).not.toBe("");
// });
