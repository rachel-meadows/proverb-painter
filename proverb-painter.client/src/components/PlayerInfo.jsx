import PropTypes from 'prop-types';
import '../assets/Game.css';

const PlayerInfo = ({ player }) => {
  return (
    <div className="common-horizontalFlex">
      <div className="common-avatar smallAvatar" id={player.avatarId}>
        {player.isAdmin && <img className="crown" src="public/admin.png" />}
      </div>
      <p className="displayData">
        {player.name} ({player.points} points)
      </p>
    </div>
  );
};

PlayerInfo.propTypes = {
  player: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    avatarId: PropTypes.string.isRequired,
    roomId: PropTypes.string.isRequired,
    points: PropTypes.number.isRequired,
    isAdmin: PropTypes.bool.isRequired,
  }).isRequired,
};

export default PlayerInfo;
