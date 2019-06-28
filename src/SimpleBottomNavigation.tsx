import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ShoppingIcon from '@material-ui/icons/ShoppingCart';
import AppsIcon from '@material-ui/icons/Apps';
import SettingsIcon from '@material-ui/icons/Settings';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'connected-react-router';

const useStyles = makeStyles({
  root: {
    position: 'sticky',
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

function SimpleBottomNavigation({ value, onNavigation }: { value: string; onNavigation: any }) {
  const classes = useStyles();
  const buttonClasses = buttonStyles();

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        onNavigation(newValue);
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
        value="/orders"
      />
      <BottomNavigationAction
        classes={{
          root: buttonClasses.root,
          label: buttonClasses.label,
          selected: buttonClasses.selected,
        }}
        icon={<AppsIcon />}
        value="/"
      />
      <BottomNavigationAction
        classes={{
          root: buttonClasses.root,
          label: buttonClasses.label,
          selected: buttonClasses.selected,
        }}
        icon={<SettingsIcon />}
        value="/settings"
      />
    </BottomNavigation>
  );
}

const mapStateToProps = (state: any) => ({
  value: state.router.location.pathname,
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      onNavigation: (link: string) => push(link),
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SimpleBottomNavigation);
