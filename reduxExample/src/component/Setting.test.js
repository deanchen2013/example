/* To adapter the enzyme for react 16 */
import React from 'react'
import {shallow} from 'enzyme'

import {Setting} from './Setting.js'

describe('TestSetting',() => {
	it('TestSetting',() => {
		const wrapper = shallow(<Setting
				displayMode={1}
				autoSearch={true}
			/>)
		
		console.log('The html:',wrapper.html())
		expect(wrapper.find('.display-mode')).toHaveLength(1)
	})
})
