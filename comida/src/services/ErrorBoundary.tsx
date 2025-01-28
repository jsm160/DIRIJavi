import React, { Component, ErrorInfo } from 'react';
import logger from './logging';

// Definir las props y el estado para nuestro ErrorBoundary
interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<React.PropsWithChildren, State> {
  constructor(props: React.PropsWithChildren) {
    super(props);
    this.state = { hasError: false }; // Inicializamos el estado para detectar errores
  }

  // Método que captura los errores en los componentes hijos
  static getDerivedStateFromError(_error: Error) {
    // Actualiza el estado para renderizar el UI de "fallback"
    return { hasError: true };
  }

  // Este método captura información adicional sobre el error
  componentDidCatch(_error: Error, errorInfo: ErrorInfo) {
    // Aquí podrías hacer un log o enviar el error a un servicio
    logger.error("Error capturado:"+ errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Puedes personalizar esta UI, por ejemplo, mostrar un mensaje genérico
      return <h1>¡Algo salió mal! Estamos trabajando para solucionarlo.</h1>;
    }

    return this.props.children; // Renderiza los componentes hijos si no hay errores
  }
}

export default ErrorBoundary;
