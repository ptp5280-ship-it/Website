import React from 'react';
import styles from './MissionStatement.module.css';

const MissionStatement = () => {
  return (
    <section id="mission" className={`${styles.missionSection} ${styles.py5} ${styles.bgLight}`}>
      <div className={`${styles.container} ${styles.textCenter}`}>
        <h2 className={`${styles.marginBottom5} ${styles.fwBold} ${styles.textPrimary}`}>A Message from Our Owner</h2>
        <div className={styles.row}>
          <div className={`${styles.colLg10} ${styles.mxAuto}`}>
            <blockquote className={`${styles.blockquote} ${styles.bgWhite} ${styles.p5} ${styles.rounded} ${styles.shadowSm}`}>
              <p className={`${styles.lead} ${styles.marginBottom0}`}>
                &quot;When you support small local business you&apos;re not
                helping a CEO buy a third vacation home or another new car,
                you&apos;re directly helping local families meet everyday needs,
                such as buying groceries or paying for children&apos;s
                activities like dance lessons, or a team jersey, or a student
                pay for college, when you shop small you help real people meet
                basic needs and keep the money you spend locally making our
                community more vibrant and resilient.&quot;
              </p>
              <footer className={`${styles.blockquoteFooter} ${styles.marginTop3}`}>Jonathan</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionStatement;
