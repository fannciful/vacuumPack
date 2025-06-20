import React, { useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Lazy loading компонентів для оптимізації
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Catalog = React.lazy(() => import('./pages/Catalog'));

// Компонент завантаження
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="text-center">
      <div className="w-8 h-8 border-2 border-emerald-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-zinc-600">Завантаження сторінки...</p>
    </div>
  </div>
);

// Error Fallback компонент
const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="text-center p-8 max-w-md mx-auto">
      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <span className="text-red-600 text-2xl">⚠️</span>
      </div>
      <h2 className="text-2xl font-bold text-zinc-900 mb-4">Щось пішло не так</h2>
      <p className="text-zinc-600 mb-6">
        Виникла помилка при завантаженні сторінки. Спробуйте перезавантажити.
      </p>
      <div className="space-y-3">
        <button 
          onClick={resetErrorBoundary}
          className="w-full bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg transition-colors"
        >
          Спробувати знову
        </button>
        <button 
          onClick={() => window.location.href = '/'}
          className="w-full border border-zinc-300 hover:bg-zinc-50 text-zinc-700 px-6 py-3 rounded-lg transition-colors"
        >
          На головну сторінку
        </button>
      </div>
      {error && (
        <details className="mt-4 text-left">
          <summary className="text-sm text-zinc-500 cursor-pointer">Технічні деталі</summary>
          <pre className="text-xs text-red-600 mt-2 p-2 bg-red-50 rounded overflow-auto">
            {error.message}
          </pre>
        </details>
      )}
    </div>
  </div>
);

// Error Boundary клас
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('React Error Boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorFallback 
          error={this.state.error} 
          resetErrorBoundary={() => this.setState({ hasError: false, error: null })}
        />
      );
    }

    return this.props.children;
  }
}

// Компонент для автоматичного прокручування на початок сторінки
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  console.log('🎯 App компонент рендериться...');
  
  return (
    <ErrorBoundary>
      <Router>
        <div className="App">
          <ScrollToTop />
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route 
                path="/" 
                element={
                  <ErrorBoundary>
                    <Home />
                  </ErrorBoundary>
                } 
              />
              <Route 
                path="/about" 
                element={
                  <ErrorBoundary>
                    <About />
                  </ErrorBoundary>
                } 
              />
              <Route 
                path="/contact" 
                element={
                  <ErrorBoundary>
                    <Contact />
                  </ErrorBoundary>
                } 
              />
              <Route 
                path="/catalog" 
                element={
                  <ErrorBoundary>
                    <Catalog />
                  </ErrorBoundary>
                } 
              />
              {/* 404 сторінка */}
              <Route 
                path="*" 
                element={
                  <div className="min-h-screen flex items-center justify-center bg-white">
                    <div className="text-center p-8">
                      <div className="w-16 h-16 bg-zinc-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="text-zinc-400 text-2xl">📦</span>
                      </div>
                      <h1 className="text-3xl font-bold text-zinc-900 mb-4">Сторінка не знайдена</h1>
                      <p className="text-zinc-600 mb-8">Вибачте, але запитувана сторінка не існує.</p>
                      <a 
                        href="/"
                        className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg transition-colors inline-block"
                      >
                        Повернутися на головну
                      </a>
                    </div>
                  </div>
                } 
              />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;