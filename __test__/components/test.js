import React from 'react'
import RowDetailGrid from '../../../src/pages/risk_model/row_detail_grid'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })
import ReactDOM from 'react-dom'
import '@babel/polyfill'
import { cleanup, render, fireEvent, waitFor } from '@testing-library/react'
import RiskModalData from '../../../__mocks__/pages/risk_model/risk_modal.data.json'
jest.mock('/services/riskmodel', () =>
	require('../../../__mocks__/services/riskmodel')
)
import * as MockRiskRatingService from '../../../__mocks__/services/riskmodel'

describe('<RowDetailGrid/>', () => {
	let contextValues = null
	afterEach(cleanup)
	beforeEach(() => {
		contextValues = {
			closeModal: jest.fn(),
			hideModal: jest.fn(),
			printDoc: jest.fn(),
			onExport: jest.fn(),
			exportPDF: jest.fn(),
			handleCloseRiskDetail: jest.fn(),
			handleRowClick: jest.fn()
		}
	})

	it('render props without crashing', () => {
		render(<RowDetailGrid {...RiskModalData.row_detail_grid_props} />)
	})

	it('should render without crashing.', () => {
		jest.spyOn(React, 'useContext').mockImplementation(() => contextValues)
		const component = shallow(
			<RowDetailGrid {...RiskModalData.row_detail_grid_props} />
		)
		const div = document.createElement('div')
		ReactDOM.render(component, div)
	})

	it.only('render byattributes props without crashing', () => {
		const aa = render(<RowDetailGrid {...RiskModalData.row_detail_grid_props} />)
		console.log('test', aa.debug())
	})

	// it("should render without crashing when updateAttributeScore fail", async() => {
	//     const updateAttributeScoreSpy  =jest.spyOn(MockRiskRatingService, "updateAttributeScore").mockImplementation(() => new Promise((res,rej)=> rej({data:{message:"Unkwon Error"},response:{status:400}})));
	//     const {getByText} = render(<RowDetailGrid {...RiskModalData.row_detail_grid_props}/>);
	//     await waitFor(() => Promise.resolve({}))
	//     fireEvent.click(getByText('Risk Rating'))
	//     await waitFor(() => Promise.resolve({}))
	//     expect(updateAttributeScoreSpy).toHaveBeenCalled();
	//     updateAttributeScoreSpy.mockRestore();
	// });RiskRatingScoreInlineModal
})
