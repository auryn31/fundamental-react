import Checkbox from '../Forms/Checkbox';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

const ListSelection = ({
    checkBoxAriaLabel,
    className,
    children,
    onChange,
    selected,
    ...props
}) => {
    const [selectedState, setSelectedState] = useState(selected || false);

    const ListSelectionClasses = classnames(
        'fd-form-item',
        'fd-list__form-item',
        className
    );

    return (
        <>
            <div {...props} className={ListSelectionClasses}>
                <Checkbox
                    ariaLabel={checkBoxAriaLabel}
                    checked={selectedState}
                    inline
                    onChange={(e, checked) => {
                        setSelectedState(checked);
                        onChange(e, checked);
                    }} />
            </div>
            {children}
        </>
    );
};

ListSelection.displayName = 'List.Selection';

ListSelection.propTypes = {
    /** aria-label for the checkbox */
    checkBoxAriaLabel: PropTypes.string.isRequired,
    /** Node(s) to render within the component */
    children: PropTypes.node,
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** Boolean value controlled by parent List.Item*/
    selected: PropTypes.bool,
    /**
     * Callback function; triggered when the change event fires on the underlying HTML checkbox `<input>`
     * of the parent `<li>`.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent. See https://reactjs.org/docs/events.html.
     * @param {Boolean} checkedState - represents the final checked state of the HTML checkbox input.
     * @returns {void}
    */
    onChange: PropTypes.func
};

export default ListSelection;
