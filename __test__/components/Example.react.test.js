import React from 'react'
import ReactDOM from 'react-dom'

import renderer from 'react-test-renderer'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { cleanup, render, fireEvent, waitFor } from '@testing-library/react'

Enzyme.configure({ adapter: new Adapter() })

import Example, { renderToDOM } from '@components/Example'

describe('<Example/>', () => {
	const originalRender = ReactDOM.render
	const originalGetElement = global.document.getElementById

	beforeEach(() => {
		global.document.getElementById = () => true
		ReactDOM.render = jest.fn()
	})
	afterEach(cleanup)

	afterAll(() => {
		global.document.getElementById = originalGetElement
		ReactDOM.render = originalRender
	})

	// it('render props without crashing', () => {
	// 	render(<Example />)
	// })

	it('should render without crashing.', () => {
		const component = shallow(<Example />)
		const div = document.createElement('div')
		div.id = 'mainDiv'
		ReactDOM.render(component, div)
	})

	it('should call ReactDOM.render', () => {
		renderToDOM()
		expect(ReactDOM.render).toHaveBeenCalled()
	})
})
