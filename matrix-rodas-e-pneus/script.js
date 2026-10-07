/**
 * Matrix Rodas e Pneus - Comportamentos Interativos e Modal de Fotos Reais
 * Estilo: Dark Mode Vermelho & Preto (Inspirado no Grupo Brasileiro)
 */

// Banco de Dados com Fotos 100% Relacionadas a Cada Serviço Específico
const serviceCatalog = {
  suspensao: {
    title: "Suspensão Automotiva Completa",
    badge: "Segurança & Conforto",
    image: "assets/suspensao.jpg",
    desc: "A suspensão mantém o carro estável e as 4 rodas firmes no solo. Barulhos secos, batidas ao passar em lombadas ou volante instável em curvas são indícios de desgaste de amortecedores, molas ou buchas.",
    includes: [
      "Troca de amortecedores dianteiros e traseiros com garantia formal",
      "Substituição de buchas de bandeja, pivôs e terminais de direção",
      "Revisão de bieletas, coxins, molas e batentes",
      "Inspeção minuciosa na rampa contra folgas e estalos metálicos"
    ],
    whatsappText: "Olá! Vi os detalhes de SUSPENSÃO no site da Matrix e gostaria de um orçamento para o meu veículo."
  },
  freios: {
    title: "Sistema de Freios (Discos & Pastilhas)",
    badge: "Segurança Crítica",
    image: "assets/freios.jpg",
    desc: "O freio é o sistema mais importante para a integridade da sua vida. Pastilhas gastas aumentam o espaço de frenagem e riscam os discos de freio. Fazemos a medição técnica com micrômetro e sangria completa do fluido.",
    includes: [
      "Substituição de pastilhas de alta durabilidade (cerâmica ou semi-metálicas)",
      "Medição da espessura com micrômetro e substituição de discos de freio",
      "Sangria completa e troca de fluido de freio DOT 4 ou DOT 5.1",
      "Revisão de lonas, tambores traseiros, pinças e sensores do ABS"
    ],
    whatsappText: "Olá! Vi os detalhes de FREIOS no site da Matrix e gostaria de um orçamento para o meu veículo."
  },
  alinhamento: {
    title: "Alinhamento 3D Computadorizado a Laser",
    badge: "Geometria a Laser",
    image: "assets/alinhamento.jpg",
    desc: "Com tecnologia 3D e câmeras digitais de alta precisão nos 4 eixos, calibramos a geometria veicular rigorosamente de acordo com os dados de fábrica da montadora. O carro para de puxar e os pneus duram muito mais.",
    includes: [
      "Medição milimétrica computadorizada dos ângulos de convergência e divergência",
      "Aferição e correção de cáster e cambagem em rampa calibrada",
      "Centralização eletrônica do volante para direção reta e suave",
      "Economia real de combustível e prevenção contra desgaste precoce de pneus"
    ],
    whatsappText: "Olá! Vi o serviço de ALINHAMENTO 3D no site da Matrix e gostaria de agendar para meu carro."
  },
  balanceamento: {
    title: "Balanceamento Dinâmico de Rodas",
    badge: "Zero Trepidação",
    image: "assets/balanceamento.jpg",
    desc: "Vibrações no volante ou na carroceria ao passar de 60 ou 80 km/h em rodovias indicam desbalanceamento. Nossa máquina computadorizada equilibra a distribuição de massa na roda com máxima precisão.",
    includes: [
      "Balanceamento estático e dinâmico das rodas em balanceadora digital",
      "Aplicação de chumbos adesivos de perfil baixo para rodas esportivas",
      "Eliminação total de trepidações no volante e no assoalho",
      "Proteção estendida para os rolamentos e toda a suspensão"
    ],
    whatsappText: "Olá! Vi o serviço de BALANCEAMENTO no site da Matrix e gostaria de agendar para meu carro."
  },
  motor: {
    title: "Mecânica de Motor Flex e Gasolina",
    badge: "Diagnóstico & Potência",
    image: "assets/motor.jpg",
    desc: "Diagnóstico computadorizado com scanner de injeção para motores Flex (álcool e gasolina) e puramente gasolina. Identificamos falhas de combustão, perda de força, engasgos, luz de injeção acesa e consumo alto.",
    includes: [
      "Varredura eletrônica completa com scanner e leitura de parâmetros em tempo real",
      "Substituição de correia dentada, tensores e corrente de comando",
      "Limpeza e equalização de bicos injetores e corpo de borboleta (TBI)",
      "Troca de velas de ignição (Iridium / Convencionais), cabos e bobinas",
      "Revisão de bomba de combustível, filtros e sistema de arrefecimento"
    ],
    whatsappText: "Olá! Vi a revisão de MOTOR FLEX E GASOLINA no site da Matrix e gostaria de um diagnóstico."
  },
  rodas: {
    title: "Reforma & Diamantação CNC de Rodas",
    badge: "Especialidade Matrix",
    image: "assets/rodas.jpg",
    desc: "Nosso serviço de excelência! Recuperamos rodas amassadas em buracos, trincadas ou raladas em guias de calçada. Desempeno hidráulico preciso sem trincar a liga e acabamento espelhado em torno CNC.",
    includes: [
      "Desempeno hidráulico a frio sem comprometer a resistência do alumínio",
      "Solda especializada TIG em alumínio para recuperação de trincas e bordas",
      "Diamantação em torno CNC computadorizado com brilho de fábrica",
      "Pintura automotiva com verniz de alta durabilidade contra riscos e oxidação"
    ],
    whatsappText: "Olá! Vi a REFORMA E DIAMANTAÇÃO DE RODAS no site da Matrix e gostaria de um orçamento."
  }
};

// Abrir Modal de Foto e Detalhes
function openPhotoModal(serviceKey) {
  const service = serviceCatalog[serviceKey];
  if (!service) return;

  const modal = document.getElementById('photoModal');
  const img = document.getElementById('pModalImg');
  const title = document.getElementById('pModalTitle');
  const badge = document.getElementById('pModalBadge');
  const desc = document.getElementById('pModalDesc');
  const list = document.getElementById('pModalList');
  const whatsBtn = document.getElementById('pModalWhatsBtn');

  img.src = service.image;
  img.alt = service.title;
  title.textContent = service.title;
  badge.textContent = service.badge;
  desc.textContent = service.desc;

  list.innerHTML = '';
  service.includes.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    list.appendChild(li);
  });

  const whatsappUrl = `https://wa.me/5562992985857?text=${encodeURIComponent(service.whatsappText)}`;
  whatsBtn.href = whatsappUrl;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Fechar Modal de Foto
function closePhotoModal() {
  const modal = document.getElementById('photoModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Fechar ao clicar fora do modal
  const modal = document.getElementById('photoModal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closePhotoModal();
      }
    });
  }

  // Fechar no teclado ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closePhotoModal();
    }
  });

  // Menu Mobile
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const icon = mobileToggle.querySelector('i');
      if (navMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
      } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
      }
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = mobileToggle.querySelector('i');
        if (icon) {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      });
    });
  }

  // Header Box-Shadow ao rolar
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.8)';
      header.style.padding = '10px 0';
    } else {
      header.style.boxShadow = 'none';
      header.style.padding = '14px 0';
    }
  });

  // Formulário de Orçamento para o WhatsApp
  const quoteForm = document.getElementById('quoteForm');
  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const carModel = document.getElementById('carModel').value.trim();
      const serviceSelect = document.getElementById('serviceSelect').value;
      const fuelType = document.getElementById('fuelType').value;
      const urgency = document.getElementById('urgency').value;
      const additionalNotes = document.getElementById('additionalNotes').value.trim();

      const whatsappNumber = '5562992985857';

      let msg = `*Olá, equipe Matrix Rodas e Pneus!* 🚗💨\n`;
      msg += `Gostaria de solicitar um orçamento pelo site:\n\n`;
      msg += `📌 *Veículo:* ${carModel}\n`;
      msg += `🔧 *Procedimento:* ${serviceSelect}\n`;
      msg += `⛽ *Motor/Combustível:* ${fuelType}\n`;
      msg += `⏱️ *Prazo Desejado:* ${urgency}\n`;

      if (additionalNotes) {
        msg += `📝 *Observações:* ${additionalNotes}\n`;
      }

      msg += `\nAguardo o retorno de vocês com os valores e disponibilidade. Obrigado!`;

      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`;
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    });
  }
});
