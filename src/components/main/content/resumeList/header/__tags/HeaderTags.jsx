import React from 'react';
import styles from './HeaderTags.module.css';
import Tag from './tag/Tag';

const Tags = () => {
  return (
    <div className={styles.tags}>
      <Tag text="frontend разработчик" count={12} />
      <Tag text="Java разработчик" count={58} />
      <Tag text="QA инженер" count={1} />
      <Tag text="Это всё балванки" count={0} />
    </div>
  );
};

export default Tags;
