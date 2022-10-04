import React from "react";
import FrontendStore from "../assets/frontend-store.png";
import MyFoods from "../assets/my-foods.png";
import TrybeWallet from "../assets/trybe-wallet.png";
import BlogsAPI from "../assets/blogs-api.png";
import StoreManager from "../assets/store-manager.jpg";
import TicTacToe from "../assets/tic-tac-toe.png";
import ReactTestingLibrary from "../assets/react-testing-library.png";
import Doguinhos from "../assets/doguinhos.jpg";
import OneForAll from "../assets/one-for-all.jpg";
import Project from "./Project";

const Work = () => {
  return (
    <div name="work" className="w-full h-auto text-gray-300 bg-[#0a192f] pt-20">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#1C92C3]">
            Projects
          </p>
          <p className="py-6">// Check out some of my recent projects</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Project
            img={FrontendStore}
            title="Frontend Store"
            desc="Loja online"
            demo="https://frontend-store-jpoliveiramateus.vercel.app/"
            code="https://github.com/jpoliveiramateus/frontend-store"
          />
          <Project
            img={MyFoods}
            title="My Foods"
            desc="Aplicativo de Receitas"
            demo="https://my-foods.vercel.app/"
            code="https://github.com/jpoliveiramateus/my-foods"
          />
          <Project
            img={TrybeWallet}
            title="Trybe Wallet"
            desc="Carteira Digital"
            demo="https://trybe-wallet-bay.vercel.app/"
            code="https://github.com/jpoliveiramateus/project-trybe-wallet"
          />
          <Project
            img={BlogsAPI}
            title="Blogs API"
            desc="API de conteúdo para um blog"
            code="https://github.com/jpoliveiramateus/blogs-api"
          />
          <Project
            img={StoreManager}
            title="Store Manager"
            desc="API para gerenciamento de vendas"
            code="https://github.com/jpoliveiramateus/store-manager"
          />
          <Project
            img={TicTacToe}
            title="Tic Tac Toe"
            desc="Jogo da velha"
            demo="https://tic-tac-toe-blush-sigma.vercel.app/"
            code="https://github.com/jpoliveiramateus/tic-tac-toe"
          />
          <Project
            img={ReactTestingLibrary}
            title="React Testing Library"
            desc="Testes com RTL"
            code="https://github.com/jpoliveiramateus/react-testing-library"
          />
          <Project
            img={OneForAll}
            title="One for All"
            desc="Banco de dados"
            code="https://github.com/jpoliveiramateus/one-for-all"
          />
          <Project
            img={Doguinhos}
            title="Doguinho's"
            desc="LP - Clínica Veterinária"
            demo="https://jpoliveiramateus.github.io/doguinhos/"
            code="https://github.com/jpoliveiramateus/doguinhos"
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
