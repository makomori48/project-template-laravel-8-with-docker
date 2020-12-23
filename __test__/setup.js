// global.console = {
// 	...console,
// 	log: jest.fn(),
// 	debug: jest.fn()
// }


// import { configure } from 'enzyme'
// import Adapter from 'enzyme-adapter-react-16'

// configure({ adapter: new Adapter()});


import '@testing-library/jest-dom/extend-expect';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });