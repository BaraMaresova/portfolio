import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
/* import Typography from '@material-ui/core/Typography';
 */ import Box from '@material-ui/core/Box';
import './progressBar.scss';

function CircularProgressWithLabel(props) {
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress variant="determinate" {...props} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <div className="progressCaption">{`${props.value}%`}</div>
      </Box>
    </Box>
  );
}

export default function CircularStatic(props) {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress < 100 ? prevProgress + 4 : 100
      )
    }, 150);
    return () => {
      clearInterval(timer);
    };
  }, [progress]);

  return <CircularProgressWithLabel value={props.value} />;
}
