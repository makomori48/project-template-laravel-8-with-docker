import React from "react";

import Enzyme, { shallow,mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

import Todo from "@components/Todo";


describe("Todo", () => {


	let wrapper;
	beforeEach(() => {
		wrapper = mount(<Todo/>);
	});

	it("renders", () => {
		expect(wrapper).not.toBeNull();
	});

	it('toggle', () => {
		wrapper.find('button.jyy').simulate('click');
		expect(wrapper).not.toBeNull();
	});

	it("clear", () => {
		wrapper.find("button.delta").simulate("click");
		expect(wrapper).not.toBe("coco");
	});
});


