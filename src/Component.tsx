import { useState } from 'react';
import { toast } from 'react-toastify';

type ComponentProps = {
  title: string;
  description: string;
  image_url: string;
};

export function Component(props: ComponentProps) {
  const { description, image_url, title } = props;

  function handleAlertOnClick() {
    toast(`${title} clicou tantas vezes `);
  }

  return (
    <div
      onClick={handleAlertOnClick}
      style={{ border: '1px solid red', margin: 10 }}
    >
      <img src={image_url} alt={title} />
      <div>
        <p>{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}
