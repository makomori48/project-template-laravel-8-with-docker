import React from "react";
import ReactDOM from "react-dom";


import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";


Enzyme.configure({ adapter: new Adapter() });

import Navbar from "@components/Navbar";


it("should render without crashing.", () => {
	const component = shallow(<Navbar />);
	const div = document.createElement("div");
	div.id = "mainDiv";
	ReactDOM.render(component, div);
});
