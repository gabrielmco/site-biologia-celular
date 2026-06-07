# Biologia Celular 🧪

Website interativo, responsivo e de alta performance dedicado ao aprendizado e exploração da **Biologia Celular**. O projeto foi construído utilizando práticas modernas de desenvolvimento web e animações sofisticadas para criar uma jornada imersiva no estudo da célula.

---

## 🛠️ Tecnologias Utilizadas

O projeto utiliza tecnologias de ponta do ecossistema front-end para garantir suavidade, velocidade e design premium:

*   **[React](https://react.dev/)** — Biblioteca principal para a criação de componentes de interface.
*   **[Vite](https://vite.dev/)** — Ferramenta de build extremamente rápida para o desenvolvimento local.
*   **[Tailwind CSS](https://tailwindcss.com/)** — Framework utilitário para estilização rápida e responsiva.
*   **[GSAP (GreenSock Animation Platform)](https://greensock.com/gsap/)** (com `@gsap/react`) — Para animações e efeitos de revelação com controle preciso via ScrollTrigger.
*   **[Lenis](https://lenis.darkroom.engineering/)** — Para garantir rolagem (scroll) suave e consistente em todos os navegadores.
*   **[Framer Motion](https://www.framer.com/motion/)** — Biblioteca para animações baseadas no estado do React.

---

## ✨ Funcionalidades e Efeitos

*   **Experiência de Rolagem Suave:** Lenis sincronizado ao GSAP ScrollTrigger para transições fluidas e dinâmicas baseadas no movimento da página.
*   **Temas Dinâmicos por Seção:** O fundo da página muda de cor de maneira fluida à medida que novas seções da célula são exploradas.
*   **Transições Customizadas (Transition Section):** Seção imersiva com tipografia expressiva e efeitos de entrada de badges.
*   **Imagens e Recursos Visuais em WebP:** Otimizados para manter o carregamento instantâneo da página.
*   **Interface Totalmente Responsiva:** Perfeitamente adaptável para celulares, tablets e desktops de alta resolução.

---

## 🚀 Como Executar o Projeto Localmente

Siga os passos abaixo para testar a aplicação na sua máquina:

### 1. Pré-requisitos
Tenha instalado em seu computador:
*   [Node.js](https://nodejs.org/) (versão LTS recomendada).
*   Gerenciador de pacotes `npm` ou similar.

### 2. Instalação de Dependências
Abra o terminal na pasta do projeto e rode:
```bash
npm install
```

### 3. Executando o Servidor de Desenvolvimento
Inicie o servidor local do Vite:
```bash
npm run dev
```
O endereço local (normalmente `http://localhost:5173`) será exibido no terminal.

### 4. Build de Produção
Para gerar os arquivos finais otimizados para deploy:
```bash
npm run build
```
Para testar o build localmente:
```bash
npm run preview
```
