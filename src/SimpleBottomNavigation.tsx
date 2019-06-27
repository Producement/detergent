import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ShoppingIcon from '@material-ui/icons/ShoppingCart';
import AppsIcon from '@material-ui/icons/Apps';
import SettingsIcon from '@material-ui/icons/Settings';

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
    boxShadow: '0 -8px 20px 0 rgba(0, 0, 0, 0.1)',
  },
});

const buttonStyles = makeStyles({
  root: {
    color: 'black',
  },
  label: {
    display: 'none',
  },
  selected: {
    color: 'white !important',
    backgroundColor: '#4D00CA',
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const buttonClasses = buttonStyles();

  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        classes={{
          root: buttonClasses.root,
          label: buttonClasses.label,
          selected: buttonClasses.selected,
        }}
        icon={<ShoppingIcon />}
      />
      <BottomNavigationAction
        classes={{
          root: buttonClasses.root,
          label: buttonClasses.label,
          selected: buttonClasses.selected,
        }}
        icon={<AppsIcon />}
      />
      <BottomNavigationAction
        classes={{
          root: buttonClasses.root,
          label: buttonClasses.label,
          selected: buttonClasses.selected,
        }}
        icon={<SettingsIcon />}
      />
    </BottomNavigation>
  );
}
