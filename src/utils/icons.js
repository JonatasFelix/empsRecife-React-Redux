import Agricutura from '../assets/icons/agricultura-inteligente.png';
import Carrinho from '../assets/icons/carrinho-de-supermercado.png';
import Carrossel from '../assets/icons/carrossel.png';
import Construcao from '../assets/icons/construcao.png';
import Contabilidade from '../assets/icons/contabilidade.png';
import Corretagem from '../assets/icons/corretagem.png';
import CuidadosSaude from '../assets/icons/cuidados-de-saude.png';
import Educacao from '../assets/icons/educacao.png';
import Eletrodomestico from '../assets/icons/eletrodomestico.png';
import FerramentasDeLimpeza from '../assets/icons/ferramentas-de-limpeza.png';
import MaoDeObra from '../assets/icons/fornecimento-de-mao-de-obra.png';
import Fotografia from '../assets/icons/fotografia.png';
import Funeral from '../assets/icons/funeral.png';
import Grossista from '../assets/icons/grossista.png';
import Industra from '../assets/icons/industria.png';
import Informatica from '../assets/icons/informatica.png';
import Instalacao from '../assets/icons/instalacao-facil.png';
import Juridico from '../assets/icons/juridico.png';
import Locao from '../assets/icons/locao.png';
import Financeiro from '../assets/icons/lucro-financeiro.png';
import Moveis from '../assets/icons/moveis.png';
import Pesquisa from '../assets/icons/pesquisa.png';
import Pesquisas from '../assets/icons/pesquisas.png';
import Ponto from '../assets/icons/ponto.png';
import Atendimento from '../assets/icons/servico-de-atendimento-ao-consumidor.png';
import Transporte from '../assets/icons/transporte-publico.png';
import Turismo from '../assets/icons/turismo.png';
import varejo from '../assets/icons/varejo.png';
import veterinario from '../assets/icons/veterinario.png';

export const icons = (name) => {
    switch (name) {
        case "FORNECIMENTO DE MAO-DE-OBRA":
            return MaoDeObra;
        case "EDUCACAO":
            return Educacao;
        case "SERVICOS FUNERARIOS":
            return Funeral;
        case "SERVICOS PUBLICOS, COMUNITARIOS E SOCIAIS":
            return Atendimento;
        case "CONSERVAÇÃO E LIMPEZA":
            return FerramentasDeLimpeza;
        case "ATIVIDADES AGROPECUARIAS E EXTRATIVAS":
            return Agricutura;
        case "OUTRAS ATIVIDADES VAREJISTAS":
            return varejo;
        case "CONSTRUCAO CIVIL":
            return Construcao;
        case "ELETRODOMESTICO, VEICULO, PECAS E ACESSORIOS":
            return Eletrodomestico;
        case "FOTOGRAFICO, CINEMATOGRAFICO, REPROGRAFICO":
            return Fotografia;
        case "DIVERSOES PUBLICAS":
            return Carrossel;
        case "ANALISE, PESQUISA DE MERCADO E PUBLICIDADE":
            return Pesquisa;
        case "INSTALACAO, COLOCACAO E MONTAGEM":
            return Instalacao;
        case "REPRESENTACAO, AGENCIAMENTO, CORRETAGEM":
            return Corretagem;
        case "SUPERMERCADOS E LOJAS DE DEPARTAMENTOS":
            return Carrinho;
        case "BELEZA E HIGIENE PESSOAL":
            return Locao;
        case "VETERINARIO E SIMILARES":
            return veterinario;
        case "SAUDE":
            return CuidadosSaude;
        case "CONTABILIDADE, CONSULTORIA E ASSESSORIA":
            return Contabilidade;
        case "TRANSPORTE E COMUNICACAO":
            return Transporte;
        case "TECNICO-CIENTIFICO":
            return Pesquisas;
        case "JURIDICO, ECONOMICO E TECNICO ADMINISTRATIVO":
            return Juridico;
        case "INSTITUICOES FINANCEIRAS E SECURITARIAS":
            return Financeiro;
        case "TURISMO, HOSPEDAGEM E ASSEMELHADOS":
            return Turismo;
        case "COMERCIO ATACADISTA":
            return Grossista;
        case "GUARDA E LOCACAO DE BENS MOVEIS":
            return Moveis;
        case "INDUSTRIA GERAL":
            return Industra;
        case "SERVICOS DE INFORMATICA":
            return Informatica;
        default:
            return Ponto;
    }
}