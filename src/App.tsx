import { Component } from './Component';
import { filmes } from './mocks';

export function App() {
  return (
    <div>
      {filmes.map((element) => (
        <Component key={element.title} {...element} />
      ))}
    </div>
  );
}
