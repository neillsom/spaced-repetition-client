import React from 'react';
import { connect } from 'react-redux';

export function Answer(props) {
	return <section className='answer'>
		{props.answer === true ? <h2>Correct</h2> : props.answer !== null ? <h2>Incorrect</h2> : null}
		</section>
}

const mapStateToProps = state => ({
	answer: state.protectedData.result
});

export default connect(mapStateToProps)(Answer);