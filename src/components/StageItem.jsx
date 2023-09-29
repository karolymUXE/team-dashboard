import PropTypes from 'prop-types'

function StageItem({ stage, candidates }) {
  return (
    <div>
      <h3>{stage.name}</h3>
      <ul>
        {candidates.map((candidate) => (
          <li key={candidate.id}>{candidate.name}</li>
        ))}
      </ul>
    </div>
  );
}

StageItem.propTypes = {
  stage: PropTypes.object,
  candidates: PropTypes.array,
};

export default StageItem;