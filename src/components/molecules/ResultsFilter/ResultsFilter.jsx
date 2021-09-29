import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import {MovieTypes} from "./mocks";

import 'react-tabs/style/react-tabs.css';
import styles from './styles.module.scss';

export const ResultsFilter = (props) => {
  const getTabsTitlesList = () => {
    return MovieTypes.map(type => <Tab key={type}>{type}</Tab>);
  }

  return (
    <div className={styles.resultsFilter}>
      <Tabs>
        <TabList>
          {getTabsTitlesList()}
        </TabList>

        <TabPanel>
          {props.children}
        </TabPanel>
      </Tabs>
    </div>
  );
}
