import React from "react";

import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

import Todo from "@components/Todo";

describe("Todo", () => {
	let wrapper;
	const setMock = jest.fn();
	const todos = ["ccc", "ddd"];
	const todo = ["aaa", "bbb"];

	beforeEach(() => {
		wrapper = mount(<Todo todos={todos} todo={todo} setTodos={setMock} />);
	});

	it("renders", () => {
		const render = wrapper.find(".todo__con");
		expect(render).not.toBe("");
	});

	it("btn add employ", () => {
		window.alert = jest.fn();
		wrapper.find(".addToEmploy").simulate("click");
		expect(wrapper).not.toBeNull();
		window.alert.mockClear();
	});

	it("clear", () => {
		window.alert = jest.fn();
		wrapper.find(".delta").simulate("click");
		expect(wrapper).not.toBe("");
		window.alert.mockClear();
	});
});


it("password onChange", () => {
	const passMock = jest.fn();
	const event = {
		preventDefault() {},
		target: { value: "eunbi" }
	};
	const component = shallow(<Todo setTodoInpit={passMock} />);
	component.find(".kwon").simulate("change", event);
	expect(passMock).not.toBe("");
});

it("delta delete", () => {
	const setMock = jest.fn();

	const psMock = "bbi";
	const data = "bbi";
	const todos = ["aaa", "bbb"];
	const filter = ["bbb", "ccc"];
	const todo = ["eee", "fff"];

	const component = shallow(
		<Todo
			setTodos={setMock}
			filter={todos}
			todos={filter}
			todo={todo}
			setTodoInpit={psMock}
			password={data}
		/>
	);
	component.find(".delta").simulate("click");
	expect(component).not.toBe("");
});

