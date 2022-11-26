import classes from './StartingPageContent.module.css';

const StartingPageContent = () => {
  return (
    <section className={classes.starting}>
      <div className={classes.about}>
        <h2>About Us!</h2>
        <p>Automotive is a web application for garage management.
           Automotive is the best software for managing your garage job card, estimate, invoice,
            income, expenses, inventory sell and buys parts and customer interactions</p>
      </div>
      
      {/* <h1>Welcome on Board!</h1> */}
    </section>
  );
};

export default StartingPageContent;
