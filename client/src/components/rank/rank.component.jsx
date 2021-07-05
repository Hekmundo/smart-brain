import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectCurrentUserEntries,
  selectCurrentUserName,
} from '../../redux/user/user.selectors';

const Rank = () => {
  const entries = useSelector(selectCurrentUserEntries);
  const name = useSelector(selectCurrentUserName);

  return (
    <div>
      <div className='white f3 mh3'>
        {`${name}, your current entry count is...`}
      </div>
      <div className='white f1'>{`#${entries}`}</div>
    </div>
  );
};

export default Rank;
