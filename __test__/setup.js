global.console = {
	...console,
	log: jest.fn(),
	debug: jest.fn()
}


import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter()});