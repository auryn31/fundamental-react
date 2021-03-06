import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import 'fundamental-styles/dist/layout-grid.css';

/** **Container** can be used to arrange wrap the **Row** and **Column** components to create a responsive grid layout with appropriate padding.*/
const Container = React.forwardRef(({ noGap, children, className, ...props }, ref) => {

    const containerClasses = classnames(
        'fd-container',
        {
            'fd-container--no-gap': noGap
        },
        className
    );

    return (
        <div
            {...props}
            className={containerClasses}
            ref={ref}>
            {children}
        </div>
    );
});

Container.displayName = 'Container';

Container.propTypes = {
    /** Node(s) to render within the component */
    children: PropTypes.node,
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** Set to **true** to remove the margins between the panels */
    noGap: PropTypes.bool
};

export default Container;
