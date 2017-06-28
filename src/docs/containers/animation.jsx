import React from 'react';

import { Button } from '../../index.js';
import { lucidClassNames } from '../../util/style-helpers';

const cx = lucidClassNames.bind('Animation');

export default class Animation extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={cx('&')}>
				<Button className={cx('&-button')}>Animate!</Button>
			</div>
		);
	}
}
