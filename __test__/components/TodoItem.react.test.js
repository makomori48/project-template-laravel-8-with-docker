import React from "react";
import ReactDOM from "react-dom";

import { render, fireEvent } from '@testing-library/react';
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

import TodoItem from "@components/TodoItem";

// it("stat onChange", () => {
// 	const statMock = jest.fn();
// 	const data = ['aaa','bbb']
// 	const event = {
// 		preventDefault() {},
// 		target: { value: "aca" }
// 	};
// 	const component = mount(<TodoItem filter={data} setStatus={statMock} />);
// 	component.find(".jett").simulate("change", event);
// 	expect(statMock).toBeCalledWith("aca");

// });

// it("should render without crashing.", () => {
// 	const data = ['aaa','bbb']
// 	const component = shallow(<TodoItem  filter={data} />);
// 	const div = document.createElement("div");
// 	div.id = "mainDiv";
// 	ReactDOM.render(component, div);
// });





//===========================test=================================//


	// it('should call onChange prop with input value', () => {
	// const data = ['aaa','bbb']

	// 	const onMock = jest.fn();
	// 	const component = mount(<TodoItem filter={data} setStatus={onMock}  />);
	// 	component.find('select').simulate('change');
	// 	expect(onSearchMock).toBeCalledWith('aca');

	// });

	test('Simulates selection', () => {
		const onMock = jest.fn();
		const data = ['aaa','bbb']
		const { getByTestId, getAllByTestId } = render(<TodoItem filter={data} setStatus={onMock} />);
		fireEvent.change(getByTestId('dropdown'), { target: { value: 'aca' } })
		let options = getAllByTestId('op')
		expect(options[0].selected).toBeFalsy();
		expect(options[1].selected).toBeFalsy()
		expect(options[2].selected).toBeTruthy();
	
	})
