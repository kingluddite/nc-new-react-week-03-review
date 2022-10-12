# Review React Wk 3

## Branches
* main 
* 01-ternary-operator-js 
* 02-ternary-operator-react 
* 03-useEffect-hook 
* 04-css-in-react 
* 05-react-spring 
* 06-computed-properties (current)
* 07-spread-synta
* 08-regular-expressions
* 09-forms-in-react
* 10-useRef-hook
* 11-uncontrolled-forms
* 12-formik

## show react example
* semantic ui add in css cdn

* public/index.html

```
<link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.5.0/semantic.min.css"
      integrity="sha512-KXol4x3sVoO+8ZsWPFI/r5KBVB/ssCGB5tsv2nVOKwLg33wTFP3fmnXa47FdSVIshVTgsYk/1734xSk9aFIa4A=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
```

`index.js`

```
import React from 'react';
import ReactDOM from 'react-dom/client';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = { lat: null, errorMessage: '' };
  // }

  state = {
    lat: null,
    errorMessage: '',
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }
  // componentDidMount() {
  //   console.log('my component was rendered to the screen');
  // }

  // componentDidUpdate() {
  //   console.log('my component was just updated - it re-rendered!');
  // }

  // requirement for React
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <div>Loading...</div>;
  }
}
const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

```

* SeasonDisplay.js 
  
```
import React from 'react';

const seasonConfig = {
  summer: {
    seasonText: 'what a great warm day!',
    iconName: 'sun',
  },
  winter: {
    seasonText: 'baby it/s cold outside!',
    iconName: 'snowflake',
  },
};
const getSeason = (lat, month) => {
  // console.log(`month is ${month} and lat is ${lat}`);
  if (month > 2 && month < 9) {
    // if lat is > 0 then we must be in the northern hemisphere
    return lat > 0 ? 'summer' : 'winter';
  }
  return lat > 0 ? 'winter' : 'summer';
};
const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { seasonText, iconName } = seasonConfig[season];
  // const seasonText =
  //   season === 'winter' ? 'Burr, it is chilly' : "It's nice and warm!";
  // const icon = season === 'winter' ? 'snowflake' : 'sun';

  return (
    <div>
      <i className={`${iconName} icon`} />
      <h1>{seasonText}</h1>
      <i className={`${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay
```
