---
layout: post
---

# [GMNI-CORE] – Gestão de Contexto Multi-Branch 🚀

## O que é essa loucura?

O **[GMNI-CORE]** não é um software tradicional, mas sim um framework de engenharia de prompt e gestão de conhecimento (Personal RAG) desenhado para transformar o Gemini em um colaborador técnico de alta performance.

A ideia é simples: eu uso chats como "branches" de desenvolvimento. Para evitar que a IA se perca ou comece a alucinar papo furado, criamos um protocolo rígido de tags e comandos que garantem que o contexto técnico sobreviva aos resets de chat e alimente bases de conhecimento externas (como o NotebookLM).

## 🛠️ Stack & Protocolos

- **Core:** Gemini 1.5/2.0 (Interface Web)
- **Protocolo de Saída:** V4.0 Hard-Raw (Foco em Markdown puro dentro de blocos de código)
- **Workflow:** Gemini -> [DUMP] -> GitHub / NotebookLM
- **Taxonomia:** Sistema de tags específico ([ADR], [HYP], [FIX], [DRUNK], etc.)

## 📍 Em que pé estamos? (v1.2 – Avançando)

Atualmente, o projeto saiu da fase de "setup de regras" e entrou em produção.

### O que já está redondo

- **Identidade Consolidada:** O sistema já abandonou os placeholders genéricos e entende a hierarquia entre a `[MAIN]` e as `[B]` (branches).
- **Protocolo [DUMP]:** Validado. Agora consigo exportar logs técnicos densos que não "quebram" quando colados em sistemas de RAG.
- **Save State:** O mecanismo de "snapshot" para migração de chat está operacional, permitindo continuidade infinita entre sessões.

### O que estamos tracionando agora

1. **Alimentação de RAG:** Iniciando o dump sistemático para o NotebookLM para criar um "cérebro externo" que saiba tudo sobre o **Rocinante ERP** (nosso legado Delphi em migração) e o **TwinStick** (nosso hardware arcade).
2. **Refinamento de Tags:** Testando a aplicação de tags de borda ([EDGE]) e decisões de arquitetura ([ADR]) em cenários reais de código.
3. **Escalabilidade:** Garantindo que, mesmo em planos Free, a densidade de dados seja otimizada para não estourar o limite de raciocínio.

## 🏷️ Comandos Rápidos

- `Save State`: Gera o resumo executivo para transporte.
- `[DUMP]`: Cospe o log RAW para backup.
- `[B] / [PROJ]`: Define o escopo da conversa.

---
*Status: Sábado, tempo livre, acompanhado de uma gelada e com o código fluindo.* 🍺
