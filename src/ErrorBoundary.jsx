import { Component } from 'react';
import { Link } from 'react-router-dom';


class ErrorBoundary extends Component {
  state = { hasError: false};
  // this is a lifecycle method that gets called whenever there is an error in the component
   
  static getDerivedStateFromError() { 
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // log the error to an error reporting service
    console.error('ErrorBoundary caught an error', error, info);
  }
 
  render() {
    if (this.state.hasError) {
      return (
        <h1>
          There was an error with this listing. <Link to="/">Click here</Link> to go back to the home page or wait five seconds.
        </h1>
      );
    }

    return this.props.children;
  }

}


export default ErrorBoundary;