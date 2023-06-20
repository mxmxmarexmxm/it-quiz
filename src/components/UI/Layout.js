import classes from './Layout.module.css';

const Layout = (props) => {
  return (
    <div className={classes.screen}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

export default Layout;
