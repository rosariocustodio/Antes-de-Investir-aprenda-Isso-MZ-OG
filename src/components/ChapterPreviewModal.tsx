import React, { useEffect } from 'react';
import { X, FileText, CheckCircle2 } from 'lucide-react';
import { CHECKOUT_URL } from '../config/checkout';
import { CtaButton } from './CtaButton';

interface ChapterPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBuyClick: (e?: React.MouseEvent) => void;
}

export const ChapterPreviewModal: React.FC<ChapterPreviewModalProps> = ({
  isOpen,
  onClose,
  onBuyClick,
}) => {
  // Bloquear scroll do body quando o documento estiver aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Fechar com tecla Esc
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex flex-col bg-[#4A4D50]/90 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={onClose}
    >
      {/* Barra de Ferramentas Superior Estilo Word / Visualizador de Documentos */}
      <header 
        className="w-full h-13 bg-[#2D3134] text-neutral-200 px-4 sm:px-8 flex items-center justify-between border-b border-neutral-700 select-none shrink-0 z-20 shadow-md"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <FileText className="w-4 h-4 text-neutral-300" />
          <div className="flex flex-col">
            <span className="font-sans text-[12px] sm:text-[13px] font-medium text-white tracking-wide">
              Antes_de_Investir_Aprenda_Isto_Amostra_Oficial.docx
            </span>
            <span className="font-sans text-[10px] text-neutral-400 hidden xs:inline">
              Modo de Leitura A4 • Rosario Paulino • Rumos Seguros
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onBuyClick}
            className="hidden sm:inline-flex items-center justify-center font-sans text-[11.5px] font-medium text-white bg-[#801869] hover:bg-[#9a1f80] px-4 py-1.5 rounded transition-colors shadow-sm"
          >
            Adquirir Livro Completo (299 MT)
          </a>

          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar documento"
            className="w-8 h-8 rounded flex items-center justify-center text-neutral-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Área de Visualização das Folhas A4 (Área de Trabalho com Scroll Contínuo) */}
      <div 
        className="flex-1 overflow-y-auto py-6 sm:py-10 px-3 sm:px-6 flex flex-col items-center gap-8 bg-[#525659]"
        onClick={onClose}
      >
        
        {/* ==========================================
            FOLHA A4 - PÁGINA 1: IDENTIFICAÇÃO E SUMÁRIO
            ========================================== */}
        <article 
          className="w-full max-w-[760px] bg-white text-[#1A1A1A] shadow-[0_4px_24px_rgba(0,0,0,0.25)] border border-neutral-300 p-7 sm:p-14 md:p-16 flex flex-col justify-between font-serif relative"
          onClick={(e) => e.stopPropagation()}
          style={{ minHeight: '1070px' }}
        >
          <div>
            {/* Cabeçalho Superior da Página A4 (Estilo Word) */}
            <div className="flex items-center justify-between pb-3 mb-8 border-b border-neutral-200 text-[10.5px] font-sans text-neutral-400 uppercase tracking-widest select-none">
              <span>Rumos Seguros • Educação Financeira</span>
              <span>Documento de Amostra Oficial</span>
            </div>

            {/* Título Principal do Livro */}
            <div className="text-center sm:text-left mb-8">
              <span className="font-sans text-[11px] font-bold text-[#801869] uppercase tracking-[0.2em] block mb-2">
                Edição Oficial 2026
              </span>
              <h1 className="font-serif text-[26px] sm:text-[32px] font-bold text-black leading-tight tracking-tight mb-2">
                ANTES DE INVESTIR, APRENDA ISTO
              </h1>
              <h2 className="font-sans text-[14px] sm:text-[15px] font-normal text-neutral-600 tracking-normal mb-4">
                O Guia Prático Para Proteger o Capital e Começar Certo em Moçambique
              </h2>
              <div className="text-[12px] font-sans text-neutral-500 flex flex-wrap items-center gap-x-4 gap-y-1">
                <span><strong>Autor:</strong> Rosario Paulino</span>
                <span>•</span>
                <span><strong>Formato:</strong> Manual Digital (PDF)</span>
                <span>•</span>
                <span><strong>Extensão:</strong> 30 Capítulos</span>
              </div>
            </div>

            <hr className="border-t border-neutral-200 my-6" />

            {/* Secção 1: Nota Introdutória */}
            <section className="mb-8">
              <h3 className="font-sans text-[13px] font-bold text-black uppercase tracking-wider mb-3">
                1. Introdução do Autor
              </h3>
              <p className="text-[14px] sm:text-[14.5px] leading-[1.75] text-[#242424] text-justify mb-3">
                Trabalhamos trinta dias para receber um salário que, com frequência, desaparece nas primeiras semanas do mês. Em Moçambique, a inflação e a pressão dos custos do quotidiano levam muitas pessoas a procurar soluções precipitadas para multiplicar dinheiro, caindo em armadilhas financeiras por desconhecimento do básico.
              </p>
              <p className="text-[14px] sm:text-[14.5px] leading-[1.75] text-[#242424] text-justify">
                Este manual foi escrito com um objectivo rigoroso: ensinar a proteger aquilo que já conquistou antes de arriscar um único Metical. Investir com maturidade não é procurar lucros milagrosos, mas sim dominar as regras do sistema económico e agir com previsibilidade.
              </p>
            </section>

            {/* Secção 2: Estrutura Geral dos 30 Capítulos */}
            <section className="mb-6">
              <h3 className="font-sans text-[13px] font-bold text-black uppercase tracking-wider mb-3">
                2. Estrutura dos 30 Capítulos (Sumário da Obra)
              </h3>
              
              <div className="border border-neutral-200 divide-y divide-neutral-200 text-[12px] font-sans">
                <div className="p-3 bg-neutral-50">
                  <span className="font-bold text-[#801869] block mb-0.5">MÓDULO I: FUNDAMENTOS & BLINDAGEM DO SALÁRIO</span>
                  <p className="text-neutral-600">
                    Cap. 1 a 7 • Para onde vai o dinheiro todos os meses, estancar despesas invisíveis e criar a reserva de emergência em moeda local.
                  </p>
                </div>
                <div className="p-3">
                  <span className="font-bold text-[#801869] block mb-0.5">MÓDULO II: O SISTEMA FINANCEIRO EM MOÇAMBIQUE</span>
                  <p className="text-neutral-600">
                    Cap. 8 a 15 • Bancos, taxas de juro, impacto real da inflação e como avaliar depósitos a prazo e contas poupança.
                  </p>
                </div>
                <div className="p-3 bg-neutral-50">
                  <span className="font-bold text-[#801869] block mb-0.5">MÓDULO III: RENDA FIXA & TÍTULOS PÚBLICOS</span>
                  <p className="text-neutral-600">
                    Cap. 16 a 22 • Obrigações do Tesouro, Bilhetes do Tesouro e instrumentos institucionais de baixo risco.
                  </p>
                </div>
                <div className="p-3">
                  <span className="font-bold text-[#801869] block mb-0.5">MÓDULO IV: BOLSA DE VALORES & GESTÃO DE LONGO PRAZO</span>
                  <p className="text-neutral-600">
                    Cap. 23 a 30 • Introdução prática à BVM, diversificação de carteira e proteção do património familiar.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Rodapé da Página A4 */}
          <div className="pt-4 border-t border-neutral-200 flex items-center justify-between text-[11px] font-sans text-neutral-400 select-none">
            <span>Antes de Investir, Aprenda Isto — Rosario Paulino</span>
            <span>Página 1</span>
          </div>
        </article>

        {/* ==========================================
            FOLHA A4 - PÁGINA 2: CAPÍTULO 1 NA ÍNTEGRA
            ========================================== */}
        <article 
          className="w-full max-w-[760px] bg-white text-[#1A1A1A] shadow-[0_4px_24px_rgba(0,0,0,0.25)] border border-neutral-300 p-7 sm:p-14 md:p-16 flex flex-col justify-between font-serif relative"
          onClick={(e) => e.stopPropagation()}
          style={{ minHeight: '1070px' }}
        >
          <div>
            {/* Cabeçalho Superior da Página A4 (Estilo Word) */}
            <div className="flex items-center justify-between pb-3 mb-8 border-b border-neutral-200 text-[10.5px] font-sans text-neutral-400 uppercase tracking-widest select-none">
              <span>Capítulo 1 • Texto Integral</span>
              <span>Amostra Oficial de Leitura</span>
            </div>

            {/* Cabeçalho do Capítulo 1 */}
            <div className="mb-6">
              <span className="font-sans text-[11px] font-bold text-neutral-500 uppercase tracking-wider block mb-1">
                Capítulo 1
              </span>
              <h2 className="font-serif text-[22px] sm:text-[25px] font-bold text-black leading-tight mb-4">
                A Pressa de Multiplicar sem Proteger
              </h2>
            </div>

            {/* Texto do Capítulo 1 formatado no estilo de documento Word limpo */}
            <div className="text-[14px] sm:text-[14.5px] leading-[1.8] text-[#242424] text-justify space-y-4">
              <p>
                O primeiro erro de quem decide investir não é a falta de dinheiro — é a pressa de multiplicar aquilo que ainda não aprendeu a defender.
              </p>
              
              <p>
                Na nossa sociedade, fomos habituados a associar investimentos a esquemas de enriquecimento acelerado ou a apostas arriscadas. Vemos pessoas a colocar quantias que fariam falta para as despesas da casa em oportunidades duvidosas, acreditando que vão duplicar o valor em semanas. O desfecho dessa pressa é quase sempre o mesmo: perda total do capital e frustração.
              </p>

              <p>
                Investir não é um bilhete de lotaria. Ninguém constrói o telhado de uma habitação antes de assentar os alicerces. Da mesma forma, antes de procurar qualquer taxa de retorno, a prioridade absoluta deve ser assegurar a sua blindagem:
              </p>

              {/* Princípios Práticos em Caixa Estruturada */}
              <div className="bg-neutral-50 border-l-3 border-[#801869] p-4 my-4 font-sans text-[13px] text-neutral-800 space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#801869] shrink-0 mt-0.5" />
                  <span><strong>Princípio da Blindagem:</strong> Nenhum investimento faz sentido se tiver dívidas descontroladas que consomem mais juros do que qualquer aplicação pode pagar.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#801869] shrink-0 mt-0.5" />
                  <span><strong>Princípio da Reserva:</strong> Quem investe sem fundo de emergência é obrigado a resgatar o dinheiro com perdas no primeiro imprevisto de saúde ou trabalho.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#801869] shrink-0 mt-0.5" />
                  <span><strong>Princípio da Clareza:</strong> Se não consegue explicar o negócio a uma criança em dois minutos, não coloque o seu dinheiro lá.</span>
                </div>
              </div>

              <p>
                Quando o investidor compreende este alinhamento, a ansiedade desaparece. O dinheiro passa a ser administrado com método, permitindo dar passos seguros ano após ano, sem comprometer a estabilidade da família.
              </p>
            </div>

            <hr className="border-t border-neutral-200 my-8" />

            {/* Secção de Continuação da Leitura (Formal e Organizada) */}
            <div className="bg-neutral-50 border border-neutral-300 p-6 text-center sm:text-left">
              <span className="font-sans text-[11px] font-bold uppercase tracking-wider text-neutral-500 block mb-1">
                Fim do Capítulo 1 • Amostra Concluída
              </span>
              <h3 className="font-serif text-[18px] sm:text-[20px] font-bold text-black mb-2">
                Deseja ler os restantes 29 capítulos práticos?
              </h3>
              <p className="font-sans text-[13px] text-neutral-600 mb-5 leading-relaxed">
                Adquira o exemplar completo em formato digital (PDF) para aceder a todas as estratégias, cálculos reais e ao método passo a passo de investimentos em Moçambique.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <CtaButton
                  variant="light-section"
                  size="md"
                  onClick={onBuyClick}
                  className="w-full sm:w-auto"
                >
                  Obter Exemplar Completo — 299 MT
                </CtaButton>

                <span className="font-sans text-[11.5px] text-neutral-500">
                  Pagamento por M-Pesa, e-Mola ou Cartão • Envio imediato
                </span>
              </div>
            </div>
          </div>

          {/* Rodapé da Página A4 */}
          <div className="pt-4 mt-8 border-t border-neutral-200 flex items-center justify-between text-[11px] font-sans text-neutral-400 select-none">
            <span>Antes de Investir, Aprenda Isto — Rosario Paulino</span>
            <span>Página 2</span>
          </div>
        </article>

      </div>
    </div>
  );
};
