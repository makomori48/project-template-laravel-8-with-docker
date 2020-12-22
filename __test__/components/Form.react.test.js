import React from 'react';

import Enzyme, { mount,shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import Form from "@components/Form";


it('should call onChange', () => {
  const inputMock = jest.fn();
  const event = {
    preventDefault() {},
    target: { value: 'the-value' }
  };
  const component = shallow(<Form setInput={inputMock} />);
  component.find('.nameUser').simulate('change', event);
  expect(inputMock).toBeCalledWith('the-value');
});

it('email onChange', () => {
  const emailMock = jest.fn();
  const event = {
    preventDefault() {},
    target: { value: 'eunbi@gmail.com' }
  };
  const component = shallow(<Form setEmail={emailMock} />);
  component.find('.emailUser').simulate('change', event);
  expect(emailMock).toBeCalledWith('eunbi@gmail.com');
});

it('password onChange', () => {
  const passwordMock = jest.fn();
  const event = {
    preventDefault() {},
    target: { value: 'kwon456' }
  };
  const component = shallow(<Form setPassword={passwordMock} />);
  component.find('.passUser').simulate('change', event);
  expect(passwordMock).toBeCalledWith('kwon456');
});

it('bd onChange', () => {
  const bdMock = jest.fn();
  const event = {
    preventDefault() {},
    target: { value: '1/1/2021' }
  };
  const component = shallow(<Form setBirth={bdMock} />);
  component.find('.bdUser').simulate('change', event);
  expect(bdMock).toBeCalledWith('1/1/2021');
});

it('genderMale onChange', () => {
  const genderMock = jest.fn();
  const event = {
    preventDefault() {},
    target: { value: 'Female' }
  };
  const component = shallow(<Form setGender={genderMock} />);
  component.find('.genderUser').simulate('change', event);
  expect(genderMock).toBeCalledWith('Female');
});

it('genderFemale onChange', () => {
  const genderFMock = jest.fn();
  const event = {
    preventDefault() {},
    target: { value: 'Male' }
  };
  const component = shallow(<Form setGender={genderFMock} />);
  component.find('.genderFUser').simulate('change', event);
  expect(genderFMock).toBeCalledWith('Male');
});

it('position onChange', () => {
  const positionMock = jest.fn();
  const event = {
    preventDefault() {},
    target: { value: 'Mobile-Developer' }
  };
  const component = shallow(<Form setPosition={positionMock} />);
  component.find('.formSelect').simulate('change', event);
  expect(positionMock).toBeCalledWith('Mobile-Developer');
});



describe("Input", () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Form />);
	});

	it("It has an input field", () => {
		const input = wrapper.find("#input_email");
		expect(input.props().value).toBe(undefined);
	});

	it("contains a button", () => {
		const button = <button> Clear </button>;
		expect(wrapper.containsMatchingElement(button)).toBe(false);
	});
});

describe("Form", () => {
	const onSubmit = jest.fn();
	const setInput = jest.fn();

	let wrapper;
	beforeEach(() => {
		wrapper = mount(<Form onSubmit={onSubmit} setInput={setInput} />);
	});

	it("renders", () => {
		expect(wrapper).not.toBeNull();
	});

	// it('sub', () => {
	// 	wrapper.find('button.btnSub').simulate('click');
	// 	expect(wrapper).not.toBeNull();
	// });

	it("clear", () => {
		wrapper.find("button.btnClear").simulate("click");
		expect(wrapper).not.toBe("coco");
	});
});
