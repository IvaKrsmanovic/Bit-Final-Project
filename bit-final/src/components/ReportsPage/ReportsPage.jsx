import PersonalInfo from "../PersonalInfo/PersonalInfo";
import Table from "../Table/Table";

import styles from './ReportsPage.module.css';

function ReportsPage () {
    return ( 
      <>
      <main className={styles.globalMargin}>
        <section>
          <PersonalInfo/>
        </section>
        <section>
          <Table/>       
        </section>
      </main>
      </>
    );
  }

export default ReportsPage;