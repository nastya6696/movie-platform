import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import {MovieTypesGeneral} from "./mocks";

import 'react-tabs/style/react-tabs.css';
import styles from './styles.module.scss';
import {useDispatch} from "react-redux";
import {filterMoviesRequest} from "../../../redux/actions";
import {useHistory} from "react-router-dom";

export const ResultsFilter = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const getTabsTitlesList = () => {
    return MovieTypesGeneral.map(type => <Tab key={type}>{type.toUpperCase()}</Tab>);
  }

  const handleFilterOption = (e) => {
    const filterOption = e.target.innerHTML;
    dispatch(filterMoviesRequest(filterOption));
    history.push({
      pathname: '/search',
      search: `?genre=${filterOption}`
    })
  }

  return (
    <div className={styles.resultsFilter} onClick={handleFilterOption}>
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
