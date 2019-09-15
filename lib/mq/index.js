import React, { Component } from 'react';
import PropTypes from 'prop-types';

const mediaMatches = {
  xs: '(max-width: 543px)',
  /* Small devices (landscape phones, 544px and up) */
  sm: '(min-width: 544px)',
  /* Medium devices (tablets, 768px and up) The navbar toggle appears at this breakpoint */
  md: '(min-width: 768px)',
  /* Large devices (desktops, 992px and up) */
  lg: '(min-width: 992px)',
  /* Extra large devices (large desktops, 1200px and up) */
  xl: '(min-width: 1200px)',
};

export const MediaQueryContext = React.createContext('breakpoint');

export class MediaQueryProvider extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  constructor(props) {
    super(props);
    this.mqls = [];
    this.state = {
      sizes: {
        xs: { matched: false, seq: 0 },
        sm: { matched: false, seq: 1 },
        md: { matched: true, seq: 2 },
        lg: { matched: false, seq: 3 },
        xl: { matched: false, seq: 4 },
      },
    };
  }

  componentDidMount() {
    if (typeof window === 'undefined' || !window.matchMedia) {
      return;
    }

    Object.keys(mediaMatches)
      .map(size => ({
        size,
        seq: this.state.sizes[size].seq,
        mq: mediaMatches[size],
      }))
      .forEach(({ size, seq, mq }) => {
        const mql = window.matchMedia(mq);
        mql.addEventListener(
          'fullscreenchange',
          this.handleMediaChange.bind(this, size, seq),
        );
        this.mqls[size] = mql;
      });
  }

  handleMediaChange = (size, seq, event) => {
    const { sizes } = this.state;
    const pivot = event.matches ? seq : Math.max(0, seq - 1);
    Object.keys(this.state.sizes).forEach(function cb(i) {
      sizes[i].matches = sizes[i].seq <= pivot;
    });
  };

  render() {
    return (
      <MediaQueryContext.Provider value={this.state.sizes}>
        {this.props.children}
      </MediaQueryContext.Provider>
    );
  }
}
