import React from 'react';
import { Progress } from '../lib';

const defaultWidthStyle = {
  width: 500,
};

const topMarginStyle = {
  marginTop: 10,
};

const centerStyle = {
  textAlign: 'center',
};

const ProgressExample = () => (
  <div style={defaultWidthStyle}>
    <div style={centerStyle}>0%</div>
    <Progress />
    <div style={centerStyle}>25%</div>
    <Progress value="25" />
    <div style={centerStyle}>50%</div>
    <Progress value={50} />
    <div style={centerStyle}>75%</div>
    <Progress value={75} />
    <div style={centerStyle}>100%</div>
    <Progress value="100" />
    <div style={centerStyle}>Multiple bars</div>
    <Progress multi>
      <Progress bar value="15" />
      <Progress bar color="success" value="30" />
      <Progress bar color="info" value="25" />
      <Progress bar color="warning" value="20" />
      <Progress bar color="danger" value="5" />
    </Progress>
  </div>
);

const ProgressAnimated = () => (
  <div style={defaultWidthStyle}>
    <Progress animated value={2 * 5} />
    <Progress animated color="success" value="25" style={topMarginStyle} />
    <Progress animated color="info" value={50} style={topMarginStyle} />
    <Progress animated color="warning" value={75} style={topMarginStyle} />
    <Progress animated color="danger" value="100" style={topMarginStyle} />
    <Progress multi style={topMarginStyle}>
      <Progress animated bar value="10" />
      <Progress animated bar color="success" value="30" />
      <Progress animated bar color="warning" value="20" />
      <Progress animated bar color="danger" value="20" />
    </Progress>
  </div>
);

const ProgressColor = () => (
  <div style={defaultWidthStyle}>
    <Progress value={2 * 5} />
    <Progress color="success" value="25" style={topMarginStyle} />
    <Progress color="info" value={50} style={topMarginStyle} />
    <Progress color="warning" value={75} style={topMarginStyle} />
    <Progress color="danger" value="100" style={topMarginStyle} />
  </div>
);

const ProgressLabels = () => (
  <div style={defaultWidthStyle}>
    <Progress value="25" style={topMarginStyle}>
      25%
    </Progress>
    <Progress value={50} style={topMarginStyle}>
      1/2
    </Progress>
    <Progress value={75} style={topMarginStyle}>
      {"You're almost there!"}
    </Progress>
    <Progress color="success" value="100" style={topMarginStyle}>
      You did it!
    </Progress>
    <Progress multi style={topMarginStyle}>
      <Progress bar value="15">
        Meh
      </Progress>
      <Progress bar color="success" value="30">
        Wow!
      </Progress>
      <Progress bar color="info" value="25">
        Cool
      </Progress>
      <Progress bar color="warning" value="20">
        20%
      </Progress>
      <Progress bar color="danger" value="5">
        !!
      </Progress>
    </Progress>
  </div>
);

const ProgressMax = () => (
  <div style={defaultWidthStyle}>
    <div style={centerStyle}>1 of 5</div>
    <Progress value="1" max="5" />
    <div style={centerStyle}>50 of 135</div>
    <Progress value={50} max="135" />
    <div style={centerStyle}>75 of 111</div>
    <Progress value={75} max={111} />
    <div style={centerStyle}>463 of 500</div>
    <Progress value="463" max={500} />

    <div style={centerStyle}>Various (40) of 55</div>
    <Progress multi>
      <Progress bar value="5" max={55}>
        5
      </Progress>
      <Progress bar color="success" value="15" max={55}>
        15
      </Progress>
      <Progress bar color="warning" value="10" max={55}>
        10
      </Progress>
      <Progress bar color="danger" value="10" max={55}>
        10
      </Progress>
    </Progress>
  </div>
);

const ProgressMulti = () => (
  <div style={defaultWidthStyle}>
    <div style={centerStyle}>Plain</div>
    <Progress multi>
      <Progress bar value="15" />
      <Progress bar color="success" value="20" />
      <Progress bar color="info" value="25" />
      <Progress bar color="warning" value="20" />
      <Progress bar color="danger" value="15" />
    </Progress>
    <div style={centerStyle}>With Labels</div>
    <Progress multi>
      <Progress bar value="15">
        Meh
      </Progress>
      <Progress bar color="success" value="35">
        Wow!
      </Progress>
      <Progress bar color="warning" value="25">
        25%
      </Progress>
      <Progress bar color="danger" value="25">
        LOOK OUT!!
      </Progress>
    </Progress>
    <div style={centerStyle}>Stripes and Animations</div>
    <Progress multi>
      <Progress bar striped value="15">
        Stripes
      </Progress>
      <Progress bar animated color="success" value="30">
        Animated Stripes
      </Progress>
      <Progress bar color="info" value="25">
        Plain
      </Progress>
    </Progress>
  </div>
);

const ProgressStriped = () => (
  <div style={defaultWidthStyle}>
    <Progress striped value={2 * 5} />
    <Progress striped color="success" value="25" style={topMarginStyle} />
    <Progress striped color="info" value={50} style={topMarginStyle} />
    <Progress striped color="warning" value={75} style={topMarginStyle} />
    <Progress striped color="danger" value="100" style={topMarginStyle} />
    <Progress multi style={topMarginStyle}>
      <Progress striped bar value="10" />
      <Progress striped bar color="success" value="30" />
      <Progress striped bar color="warning" value="20" />
      <Progress striped bar color="danger" value="20" />
    </Progress>
  </div>
);

export default [
  { name: 'Simple', story: ProgressExample },
  { name: 'Animated', story: ProgressAnimated },
  { name: 'Color', story: ProgressColor },
  { name: 'Labels', story: ProgressLabels },
  { name: 'Max', story: ProgressMax },
  { name: 'Multi', story: ProgressMulti },
  { name: 'Striped', story: ProgressStriped },
];
