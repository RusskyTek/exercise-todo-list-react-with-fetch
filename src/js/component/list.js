import React from "react";
import PropTypes from "prop-types";

export function List({ list, deleteTask }) {
	return (
		<ul className="list-group">
			{list.map((task, index) => (
				<li className="list-group-item p-2 bg-secondary" key={index}>
					<p id="task">{task.label}</p>
					<button className="btn bg-warning" id="delete">
						<i
							className="fas fa-times"
							onClick={() => deleteTask(index)}></i>
					</button>
				</li>
			))}
		</ul>
	);
}

List.propTypes = {
	list: PropTypes.array,
	deleteTask: PropTypes.func
};
