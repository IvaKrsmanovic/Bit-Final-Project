import PersonalInfo from "../PersonalInfo/PersonalInfo";
import ReportsTable from "../Table/Table";

import styles from './ReportsPage.module.css';

function ReportsPage () {
    return ( 
      <>
      <main className={styles.globalMargin}>
        <section>
          <PersonalInfo/>
        </section>
        <section>
          <ReportsTable/>       
        </section>
      </main>
      </>
    );
  }

export default ReportsPage;