import React from 'react';

const NossoProposito = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">Nosso Propósito</h1>
        <p className="mb-4 text-xl text-gray-600">
          Esta é a página do nosso propósito.
        </p>
        <a href="/" className="text-blue-500 underline hover:text-blue-700">
          Voltar para a página inicial
        </a>
      </div>
    </div>
  );
};

export default NossoProposito;
