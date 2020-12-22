import React from 'react';
import ReactDOM from "react-dom";


import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import TodoItem from "@components/TodoItem";


it('stat onChange', () => {
  const statMock = jest.fn();
  const event = {
    preventDefault() {},
    target: { value: 'st' }
  };
  const component = shallow(<TodoItem setStatus={statMock} />);
  component.find('.jett').simulate('change', event);
  expect(statMock).toBeCalledWith('st');
});

it("should render without crashing.", () => {
	const component = shallow(<TodoItem />);
	const div = document.createElement("div");
	div.id = "mainDiv";
	ReactDOM.render(component, div);
});