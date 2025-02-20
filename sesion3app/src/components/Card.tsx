// src/components/Card.tsx

import React, { useState } from 'react';
import ModalFinal from './Modal';

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  techStack: string[];
  projectLink: string;
  githubLink: string;
}

const Card: React.FC<CardProps> = (props: CardProps) => {
const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="relative w-96 m-3 cursor-pointer border-2 shadow-lg rounded-xl items-center">
      {/* Imagen del proyecto */}
      <div className="flex h-28 rounded-xl items-center justify-center overflow-hidden p-2">
        <img
          src={props.imageSrc}
          alt={props.title}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Descripción */}
      <div className="p-2 border-b-2">
        <h6>{props.description}</h6>
      </div>

      {/* Tecnologías */}
      <div className="flex flex-wrap items-center m-2">
        {props.techStack.map((tech) => (
          <span
            key={tech}
            className="border border-blue-300 rounded-2xl px-2 my-1 mx-1"
          >
            #{tech}
          </span>
        ))}
      </div>

      {/* Enlaces a proyecto y GitHub */}
      <div className="flex flex-wrap items-center rounded-b-xl border-t-2 bg-white">
        <a
          href={props.projectLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="border rounded-2xl bg-blue-600 text-black shadow-sm p-1 px-2 m-2">
            Ir al proyecto
          </button>
        </a>
        <a
          href={props.githubLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="border-2 border-blue-600 rounded-2xl text-blue-600 shadow-sm p-1 px-2 m-2">
            Github
          </button>
        </a>
        <button
            onClick={() => setIsModalOpen(true)}
            className="border rounded-2xl bg-red-700 text-black
            shadow-sm p-1 px-2 m-2">
                                    Finalizar
        </button> 
      </div>
      <ModalFinal isOpen={isModalOpen} onClose={() =>
        setIsModalOpen(false)} />

    </div>
  );
};

export default Card;
