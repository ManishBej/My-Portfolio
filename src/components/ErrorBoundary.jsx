import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error);
    console.error('Component stack:', errorInfo.componentStack);
    
    this.setState({
      error,
      errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      // Development error view with more details
      if (process.env.NODE_ENV === 'development') {
        return (
          <div className="min-h-screen flex items-center justify-center bg-primary p-4">
            <div className="bg-tertiary p-8 rounded-lg shadow-xl max-w-3xl w-full mx-4">
              <h2 className="text-2xl font-bold text-white mb-4">Something went wrong</h2>
              <div className="mb-4">
                <p className="text-red-400 mb-2">Error: {this.state.error?.message}</p>
                {this.state.errorInfo && (
                  <pre className="bg-gray-800 p-4 rounded-lg overflow-auto text-sm text-gray-300 max-h-64">
                    {this.state.errorInfo.componentStack}
                  </pre>
                )}
              </div>
              <p className="text-secondary mb-4">
                The application encountered an error. Try refreshing the page or check the console for more details.
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => window.location.reload()}
                  className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-2 rounded-lg 
                  hover:opacity-90 transition-opacity"
                >
                  Refresh Page
                </button>
              </div>
            </div>
          </div>
        );
      }
      
      // Production error view
      return (
        <div className="min-h-screen flex items-center justify-center bg-primary">
          <div className="bg-tertiary p-8 rounded-lg shadow-xl max-w-lg w-full mx-4">
            <h2 className="text-2xl font-bold text-white mb-4">Something went wrong</h2>
            <p className="text-secondary mb-4">
              The application encountered an error. Please try refreshing the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-2 rounded-lg 
              hover:opacity-90 transition-opacity"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;