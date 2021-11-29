import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import {MovieTypesGeneral} from "./mocks";

import 'react-tabs/style/react-tabs.css';
import styles from './styles.module.scss';
import {useDispatch} from "react-redux";
import {filterMovies} from "../../../redux/actions";

export const ResultsFilter = ({children}) => {
  const dispatch = useDispatch();

  const getTabsTitlesList = () => {
    return MovieTypesGeneral.map(type => <Tab key={type}>{type.toUpperCase()}</Tab>);
  }

  const handleFilterOption = (e) => {
    const filterOption = e.target.innerHTML;
    dispatch(filterMovies(filterOption.substr(0,1).concat(filterOption.substr(1).toLowerCase())));
  }

  return (
    <div className={styles.resultsFilter} onClick={handleFilterOption}>
      <Tabs>
        <TabList>
          {getTabsTitlesList()}
        </TabList>

        <TabPanel>
          {children}
        </TabPanel>
      </Tabs>
    </div>
  );
}
