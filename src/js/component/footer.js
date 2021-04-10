import React from "react";
import PropTypes from "prop-types";

export function Footer({ list }) {
	return (
		<div className="text-break text-light">
			{list.length !== 0 ? `${list.length} Tasks to do` : "No tasks"}
		</div>
	);
}

Footer.propTypes = {
	list: PropTypes.array,
	deleteTask: PropTypes.func
};
