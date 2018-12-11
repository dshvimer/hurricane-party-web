import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Select from 'react-select';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import NoSsr from '@material-ui/core/NoSsr';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import MenuItem from '@material-ui/core/MenuItem';
import CancelIcon from '@material-ui/icons/Cancel';
import { emphasize } from '@material-ui/core/styles/colorManipulator';

const suggestions = [
  { label: 'Alachua' },
  { label: 'Baker' },
  { label: 'Bay' },
  { label: 'Bradford' },
  { label: 'Brevard' },
  { label: 'Broward' },
  { label: 'Calhoun' },
  { label: 'Charlotte' },
  { label: 'Citrus' },
  { label: 'Clay' },
  { label: 'Collier' },
  { label: 'Columbia' },
  { label: 'DeSoto' },
  { label: 'Dixie' },
  { label: 'Duval' },
  { label: 'Escambia' },
  { label: 'Flagler' },
  { label: 'Franklin' },
  { label: 'Gadsden' },
  { label: 'Gilchrist' },
  { label: 'Glades' },
  { label: 'Gulf' },
  { label: 'Hamilton' },
  { label: 'Hardee' },
  { label: 'Hendry' },
  { label: 'Hernando' },
  { label: 'Highlands' },
  { label: 'Hillsborough' },
  { label: 'Holmes' },
  { label: 'Indian River' },
  { label: 'Jackson' },
  { label: 'Jefferson' },
  { label: 'Lafayette' },
  { label: 'Lake' },
  { label: 'Lee' },
  { label: 'Leon' },
  { label: 'Levy' },
  { label: 'Liberty' },
  { label: 'Madison' },
  { label: 'Manatee' },
  { label: 'Marion' },
  { label: 'Martin' },
  { label: 'Miami-Dade' },
  { label: 'Monroe' },
  { label: 'Nassau' },
  { label: 'Okaloosa' },
  { label: 'Okeechobee' },
  { label: 'Orange' },
  { label: 'Osceola' },
  { label: 'Palm Beach' },
  { label: 'Pasco' },
  { label: 'Pinellas' },
  { label: 'Polk' },
  { label: 'Putnam' },
  { label: 'Santa Rosa' },
  { label: 'Sarasota' },
  { label: 'Seminole' },
  { label: 'St. Johns' },
  { label: 'St. Lucie' },
  { label: 'Sumter' },
  { label: 'Suwannee' },
  { label: 'Taylor' },
  { label: 'Union' },
  { label: 'Volusia' },
  { label: 'Wakulla' },
  { label: 'Walton' },
  { label: 'Washington' },
].map(suggestion => ({
  value: suggestion.label,
  label: suggestion.label,
}));

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 250,
  },
  input: {
    display: 'flex',
    padding: 0,
  },
  valueContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
    overflow: 'hidden',
  },
  chip: {
    margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`,
  },
  chipFocused: {
    backgroundColor: emphasize(
      theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700],
      0.08,
    ),
  },
  noOptionsMessage: {
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
  },
  singleValue: {
    fontSize: 16,
  },
  placeholder: {
    position: 'absolute',
    left: 2,
    fontSize: 16,
  },
  paper: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0,
  },
  divider: {
    height: theme.spacing.unit * 2,
  },
});

function NoOptionsMessage(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.noOptionsMessage}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

function inputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />;
}

function Control(props) {
  return (
    <TextField
      fullWidth
      InputProps={{
        inputComponent,
        inputProps: {
          className: props.selectProps.classes.input,
          inputRef: props.innerRef,
          children: props.children,
          ...props.innerProps,
        },
      }}
      {...props.selectProps.textFieldProps}
    />
  );
}

function Option(props) {
  return (
    <MenuItem
      buttonRef={props.innerRef}
      selected={props.isFocused}
      component="div"
      style={{
        fontWeight: props.isSelected ? 500 : 400,       //500 : 400
      }}    
      {...props.innerProps}
    >
      {props.children}
    </MenuItem>
  );
}

function Placeholder(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.placeholder}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

function SingleValue(props) {
  return (
    <Typography className={props.selectProps.classes.singleValue} {...props.innerProps}>
      {props.children}
    </Typography>
  );
}

function ValueContainer(props) {
  return <div className={props.selectProps.classes.valueContainer}>{props.children}</div>;
}

function MultiValue(props) {
  return (
    <Chip
      tabIndex={-1}
      label={props.children}
      className={classNames(props.selectProps.classes.chip, {
        [props.selectProps.classes.chipFocused]: props.isFocused,
      })}
      onDelete={props.removeProps.onClick}
      deleteIcon={<CancelIcon {...props.removeProps} />}
    />
  );
}

function Menu(props) {
  return (
    <Paper square className={props.selectProps.classes.paper} {...props.innerProps}>
      {props.children}
    </Paper>
  );
}

const components = {
  Control,
  Menu,
  MultiValue,
  NoOptionsMessage,
  Option,
  Placeholder,
  SingleValue,
  ValueContainer,
};

class Locations extends React.Component {
  state = {
    single: null,
    multi: null,
  };

  handleChange = name => value => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { classes, theme } = this.props;

    const selectStyles = {
      input: base => ({
        ...base,
        color: theme.palette.text.primary,
        '& input': {
          font: 'inherit',
        },
      }),
    };

    return (
      <div className={classes.root}>
        <NoSsr>
          <Select
            classes={classes}
            styles={selectStyles}
            options={suggestions}
            components={components}
            value={this.state.single}
            onChange={this.handleChange('single')}
            placeholder="Search for a FL county"
          />
          <div className={classes.divider} />
        </NoSsr>
      </div>
    );
  }
}

Locations.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Locations);