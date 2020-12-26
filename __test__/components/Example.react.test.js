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

// test("test canmock", () => {
// 	const instance = mount(<Example filterFn />);
// 	const spy = jest.spyOn(instance, "filterFn");
// 	spy.mockReturnValue("aca");

// 	expect(instance.setStatus("aca")).toBe(true);

// 	spy.mockRestore();
// });

// test('useState mock', () => {
// 	const myInitialState = 'setStatus'
// 	const dat = 'aca'
// 	React.useState = jest.fn().mockReturnValue([myInitialState, {dat}])

// 	const wrapper = shallow(<Example />)

// 	// initial state is set and you can now test your component
// })

// it('true', () => {
// 	const loginComponent = mount(<Example setStatus='aca' status='aca' />);
// 	expect(loginComponent).toMatchSnapshot();

// });
