import React from 'react';
import ReactDOM from 'react-dom';
import Ecology from 'ecology';
import Radium, { Style } from 'radium';
import * as docgen from "react-docgen";
import { VictoryAxis } from "../../src/index";
import { VictoryTheme } from 'formidable-landers';

@Radium
class Docs extends React.Component {
  render() {
    return (
      <div>
        <Ecology
          overview={require('!!raw!./ecology.md')}
          source={docgen.parse(require("!!raw!../../src/components/victory-axis/victory-axis"))}
          scope={{React, ReactDOM, VictoryAxis}}
          playgroundtheme='elegant' />
        <Style rules={VictoryTheme}/>
      </div>
    )
  }
}

export default Docs;
