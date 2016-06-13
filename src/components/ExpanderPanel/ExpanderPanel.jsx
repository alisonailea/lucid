import _ from 'lodash';
import React from 'react';
import { lucidClassNames } from '../../util/style-helpers';
import { createClass, findTypes }  from '../../util/component-types';

import ChevronIcon from '../Icon/ChevronIcon/ChevronIcon';
import Panel from '../Panel/Panel';

import * as reducers from '../Expander/Expander.reducers';

const cx = lucidClassNames.bind('&-ExpanderPanel');

const {
	bool,
	func,
	node,
	object,
	string,
} = React.PropTypes;

/**
 * {"categories": ["layout"], "madeFrom": ["ChevronIcon", "Expander", "Panel"]}
 *
 * This is a container that provides a toggle that controls when the content is
 * shown.
 */
const ExpanderPanel = createClass({
	displayName: 'ExpanderPanel',

	components: {
		Header: createClass({
			displayName: 'ExpanderPanel.Header',
			propName: 'Header',
			propTypes: {
				/**
				 * Used to identify the purpose of this switch to the user -- can be
				 * any renderable content.
				 */
				children: node,
			},
		}),
	},

	reducers,

	propTypes: {
		/**
		 * Expandable content.
		 */
		children: node,

		/**
		 * Appended to the component-specific class names set on the root
		 * element.
		 */
		className: string,

		/**
		 * Indicates that the component is in the "expanded" state when true
		 * and in the "unexpanded" state when false.
		 */
		isExpanded: bool,

		/**
		 * Called when the user clicks on the component's header.
		 *
		 * Signature: `(isExpanded, { event, props }) => {}`
		 */
		onToggle: func,

		/**
		 * Passed through to the root element.
		 */
		style: object,
	},

	getDefaultProps() {
		return {
			isExpanded: false,
			onToggle: _.noop,
		};
	},

	handleToggle(event) {
		this.props.onToggle(!this.props.isExpanded, {
			event,
			props: this.props,
		});
	},

	render() {
		const {
			children,
			className,
			isExpanded,
			style,
			...passThroughs,
		} = this.props;

		const headerChildProps = _.get(_.first(findTypes(this.props, ExpanderPanel.Header)), 'props');

		return (
			<Panel
				{...passThroughs}
				className={cx('&', {
					'&-is-collapsed': !isExpanded,
				}, className)}
				style={style}
			>
				<Panel.Header
					className={cx('&-header')}
					onClick={this.handleToggle}
				>
					<span className={cx('&-icon')}>
						<ChevronIcon direction={isExpanded ? 'up' : 'down'} />
					</span>

					<span {...headerChildProps} />
				</Panel.Header>

				<div className={cx('&-content', {
					'&-content-is-expanded': isExpanded,
				})}>
					<div className={cx('&-content-inner')}>
						{children}
					</div>
				</div>
			</Panel>
		);
	},
});

export default ExpanderPanel;
