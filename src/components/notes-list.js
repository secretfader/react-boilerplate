import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

function NotesList({ notes }) {
	return (
		<div>
			{notes.map(note => {
				return (
					<p key={note.id}>{note.content}</p>
				);
			})}
		</div>
	);
}

NotesList.propTypes = {
	notes: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		content: PropTypes.string
	}))
};

function mapStateToProps(state) {
	return {
		notes: state.notes.payload
	};
}

export default connect(
	mapStateToProps
)(NotesList);
