import PropTypes from 'prop-types';
import s from './FeedbackStatistics.module.css';
import Notification from '../Notification';

const StatisticsFeedback = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <p className={s.statisticText}>Statistics</p>
      {total > 0 ? (
        <>
          <ul className={s.statisticList}>
            <li className={s.statisticItem}>Good:{good}</li>
            <li className={s.statisticItem}>Neutral:{neutral}</li>
            <li className={s.statisticItem}>Bad:{bad}</li>
          </ul>

          <ul>
            <li className={s.statisticItem}>Total:{total}</li>
            <li className={s.statisticItem}>
              Positive feedback:{positivePercentage}%
            </li>
          </ul>
        </>
      ) : (
        <Notification />
      )}
    </div>
  );
};

StatisticsFeedback.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
export default StatisticsFeedback;
