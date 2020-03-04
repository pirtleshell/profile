
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';
import Counter from '../components/Counter';

const mapStateToProps = (state, ownProps) => {
  if(!state.count) return { count: 0 };
  return {
    count: state.count
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onIncClick: () => dispatch(increment),
    onDecClick: () => dispatch(decrement)
  }
};

const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default CounterContainer;
