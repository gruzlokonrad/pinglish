import React from 'react';
import styles from './Container.module.scss';

const Container = ({ sectionName, sectionColor, children }: any) => {
  return (
    <section className={sectionName} style={{ backgroundColor: sectionColor }}>
      <div className={styles.container}>
        {children}
      </div>
    </section>
  )
}

export default Container