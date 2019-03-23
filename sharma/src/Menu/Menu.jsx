import './Menu.css';
import React from 'react';
import Table from '../table/table';
import Table2 from '../table2/table2';
import Table3 from '../table3/table3';
import Table4 from '../table4/table4';
import Table5 from '../table5/table5';
import AntTable from '../AntTable/AntTable';
import AntTable2 from '../AntTable2/AntTable2';
import AntTable3 from '../AntTable3/AntTable3';
import AntTable4 from '../AntTable4/AntTable4';
import AntTable5 from '../AntTable5/AntTable5';
import AntTable6 from '../AntTable6/AntTable6';
import AntTable7 from '../AntTable7/AntTable7';
import AntTable8 from '../AntTable8/AntTable8';
import AntTable9 from '../AntTable9/AntTable9';
import { Switch, Route, BrowserRouter, HashRouter } from 'react-router-dom';

function template() {
  return (
    <div className="menu">
      <h1>Menu</h1>

      {/* <div>
          <div>
            <a href="/Table">Table</a>
            <a href="/Table2">Table2</a>
            <a href="/Table3">Table3</a>
            <a href="/Table4">Table4</a>
            <a href="/Table5">Table5</a>
            <a href="/AntTable">/AntTable</a>
            <a href="/AntTable2">/AntTable2</a>
            <a href="/AntTable3">/AntTable3</a>
            <a href="/AntTable4">/AntTable4</a>
            <a href="/AntTable5">/AntTable5</a>
            <a href="/AntTable6">/AntTable6</a>
            <a href="/AntTable7">/AntTable7</a>
            <a href="/AntTable8">/AntTable8</a>
            <a href="/AntTable9">/AntTable9</a>
          </div>
          <Switch>
            <Route exact path="/Table" component={Table} />
            <Route exact path="/Table2" component={Table2} />
            <Route exact path="/Table3" component={Table3} />
            <Route exact path="/Table4" component={Table4} />
            <Route exact path="/Table5" component={Table5} />
            <Route exact path="/AntTable" component={AntTable} />
            <Route exact path="/AntTable2" component={AntTable2} />
            <Route exact path="/AntTable3" component={AntTable3} />
            <Route exact path="/AntTable4" component={AntTable4} />
            <Route exact path="/AntTable5" component={AntTable5} />
            <Route exact path="/AntTable6" component={AntTable6} />
            <Route exact path="/AntTable7" component={AntTable7} />
            <Route exact path="/AntTable8" component={AntTable8} />
            <Route exact path="/AntTable9" component={AntTable9} />
          </Switch>
        </div> */}
      <HashRouter>
        <nav class="navbar navbar-default">
          <div class="container-fluid">
            <ul class="nav navbar-nav">
              <li>
                <a href="#/Table">Table</a>
              </li>
              <li>
                <a href="#/Table2">Table2</a>
              </li>
              <li>
                <a href="#/Table3">Table3</a>
              </li>
              <li>
                <a href="#/Table4">Table4</a>
              </li>
              <li>
                <a href="#/Table5">Table5</a>
              </li>
              <li>
                <a href="#/AntTable">AntTable</a>
              </li>
              <li>
                <a href="#/AntTable2">AntTable2</a>
              </li>
              <li>
                <a href="#/AntTable3">AntTable3</a>
              </li>
              <li>
                <a href="#/AntTable4">AntTable4</a>
              </li>
              <li>
                <a href="#/AntTable5">AntTable5</a>
              </li>
              <li>
                <a href="#/AntTable6">AntTable6</a>
              </li>
              <li>
                <a href="#/AntTable7">AntTable7</a>
              </li>
              <li>
                <a href="#/AntTable8">AntTable8</a>
              </li>
              <li>
                <a href="#/AntTable9">AntTable9</a>
              </li>
            </ul>
          </div>
        </nav>

        <Route exact path="/Table" component={Table} />
        <Route exact path="/Table2" component={Table2} />
        <Route exact path="/Table3" component={Table3} />
        <Route exact path="/Table4" component={Table4} />
        <Route exact path="/Table5" component={Table5} />
        <Route exact path="/AntTable" component={AntTable} />
        <Route exact path="/AntTable2" component={AntTable2} />
        <Route exact path="/AntTable3" component={AntTable3} />
        <Route exact path="/AntTable4" component={AntTable4} />
        <Route exact path="/AntTable5" component={AntTable5} />
        <Route exact path="/AntTable6" component={AntTable6} />
        <Route exact path="/AntTable7" component={AntTable7} />
        <Route exact path="/AntTable8" component={AntTable8} />
        <Route exact path="/AntTable9" component={AntTable9} />
      </HashRouter>
    </div>
  );
}

export default template;
