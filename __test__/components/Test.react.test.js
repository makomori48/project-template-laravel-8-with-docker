import React from 'react'
import ReactDOM from 'react-dom'

import renderer from 'react-test-renderer'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { cleanup, render, fireEvent, waitFor } from '@testing-library/react'

Enzyme.configure({ adapter: new Adapter() })

import Test from '@components/Test'

describe('<Test/>', () => {
	beforeEach(() => {})
	afterEach(cleanup)

	// it('render props without crashing', () => {
	// 	render(<Test />)
	// })

	it('should render without crashing.', () => {
		const component = shallow(<Test />)
		const div = document.createElement('div')
		ReactDOM.render(component, div)
	})

	it('should add count when click add', () => {
		const { getByText } = render(<Test />)
		fireEvent.click(getByText('add'))
	})
})
