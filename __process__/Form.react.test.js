import React from "react";
import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

import Form from "@components/Form";

it("should call onChange", () => {
	const inputMock = jest.fn();
	const event = {
		preventDefault() {},
		target: { value: "the-value" }
	};
	const component = shallow(<Form setInput={inputMock} />);
	component.find(".nameUser").simulate("change", event);
	expect(inputMock).toBeCalledWith("the-value");
});

it("email onChange", () => {
	const emailMock = jest.fn();
	const event = {
		preventDefault() {},
		target: { value: "eunbi@gmail.com" }
	};
	const component = shallow(<Form setEmail={emailMock} />);
	component.find(".emailUser").simulate("change", event);
	expect(emailMock).toBeCalledWith("eunbi@gmail.com");
});

it("password onChange", () => {
	const passwordMock = jest.fn();
	const event = {
		preventDefault() {},
		target: { value: "kwon456" }
	};
	const component = shallow(<Form setPassword={passwordMock} />);
	component.find(".passUser").simulate("change", event);
	expect(passwordMock).toBeCalledWith("kwon456");
});

it("bd onChange", () => {
	const bdMock = jest.fn();
	const event = {
		preventDefault() {},
		target: { value: "1/1/2021" }
	};
	const component = shallow(<Form setBirth={bdMock} />);
	component.find(".bdUser").simulate("change", event);
	expect(bdMock).toBeCalledWith("1/1/2021");
});

it("genderMale onChange", () => {
	const genderMock = jest.fn();
	const event = {
		preventDefault() {},
		target: { value: "Female" }
	};
	const component = shallow(<Form setGender={genderMock} />);
	component.find(".genderUser").simulate("change", event);
	expect(genderMock).toBeCalledWith("Female");
});

it("genderFemale onChange", () => {
	const genderFMock = jest.fn();
	const event = {
		preventDefault() {},
		target: { value: "Male" }
	};
	const component = shallow(<Form setGender={genderFMock} />);
	component.find(".genderFUser").simulate("change", event);
	expect(genderFMock).toBeCalledWith("Male");
});

it("position onChange", () => {
	const positionMock = jest.fn();
	const event = {
		preventDefault() {},
		target: { value: "Mobile-Developer" }
	};
	const component = shallow(<Form setPosition={positionMock} />);
	component.find(".formSelect").simulate("change", event);
	expect(positionMock).toBeCalledWith("Mobile-Developer");
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
	

	let wrapper;
	beforeEach(() => {
		wrapper = mount(<Form  />);
	});

	it("renders", () => {
		expect(wrapper).not.toBeNull();
	});

	it('sub', () => {
		wrapper.find('button.btnSub').simulate('click');
		expect(wrapper).not.toBe("coco");
	});

	it("clear", () => {
		wrapper.find("button.btnClear").simulate("click");
		expect(wrapper).not.toBe("coco");
	});
});


//===========================test=================================//

// import React from "react";
// import { shallow, mount } from "enzyme";
// import Form from "@components/Form";


// describe('<Form />', ()=> {
//   let wrapper;

//   beforeEach(() => {
//     wrapper = shallow(< Form/>);
//   });

//   it('It has an input field', () => {
//     const input = wrapper.find('.nameUser')
//     expect(input.props().value).toBe(undefined)
//   });

// });


//===========================test=================================//

// import React from "react";
// import Enzyme from "enzyme";
// import Adapter from "enzyme-adapter-react-16";
// import Form from "@components/Form";

// Enzyme.configure({adapter: new Adapter() });


// describe("<NewPost />", () => {
// 	let wrapper;
// 	const setState = jest.fn();
// 	const useStateSpy = jest.spyOn(React, "useState")
// 	useStateSpy.mockImplementation((init) => [init, setState]);

// 	beforeEach(() => {
// 			wrapper = Enzyme.mount(Enzyme.shallow(<Form />).get(0))
// 	});

// 	afterEach(() => {
// 			jest.clearAllMocks();
// 	})
// 	describe("Title input", () => {
// 		it("Should capture title correctly onChange", () => {
// 				const title = wrapper.find("input").at(1);
// 				title.instance().value = "Test";
// 				title.simulate("change");
// 				expect(setState).toHaveBeenCalledWith("Test");
// 		});
// 	});
// })


