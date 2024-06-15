# Notes_backend

**Definição de Deploy**

- Deploy significa implantar, enviar um novo projeto ou mudanças e atualizações de um sistema ou aplicação existente para um determinado ambiente.
- Pode ser um projeto inteiro novo ou partes e funcionalidades de uma aplicação já existente que são movidas de um ambiente para outro.


- **Ambiente de Desenvolvimento**:
    - Onde trabalhamos criando e desenvolvendo a aplicação.
    - Passamos a maior parte do tempo aqui.
- **Ambiente de Teste (Stage)**:
    - Ambiente com uma versão muito próxima da realidade de uso da aplicação.
    - Utilizado para testar a aplicação antes de enviá-la para produção.
    - Permite identificar e corrigir bugs antes que afetem os usuários finais.
- **Ambiente de Produção**:
    - Onde a aplicação está rodando e disponível para os clientes.
    - Deve ser mantido com a melhor qualidade e desempenho possível.
    - O objetivo é entregar uma experiência perfeita para os usuários.

**Estratégias de Deploy**

- **Deploy Manual**:
    - Todo o processo de implantação é feito manualmente todas as vezes que houver uma atualização.
    - Envolve repetir os mesmos procedimentos sempre que uma nova funcionalidade ou ajuste for implantado.
- **Deploy Automatizado**:
    - A configuração inicial é feita manualmente, mas, após isso, o deploy é automatizado para futuras atualizações.
    - Mais vantajoso e produtivo, pois automatiza o processo de atualização da aplicação.

**Conclusão**

- Deploy é o processo de tornar a aplicação pública e disponível para os usuários.
- O deploy pode ser manual ou automatizado, sendo que o automatizado é mais eficiente.
- Vamos aprender a fazer o deploy automatizado para facilitar a liberação de novas atualizações na aplicação.

__________________________________________________________________________________________________________________________________________________________________________________________________________________

**Utilização do PM2**

- **O que é o PM2**:
    - PM2 é um gerenciador de processos que ajuda a manter a aplicação online 24 horas por dia, 7 dias por semana.
    - Ele garante que o back-end esteja sempre disponível, reiniciando-o automaticamente em caso de falhas.
- **Funcionamento do PM2**:
    - Se o back-end parar por algum motivo (por exemplo, uma requisição mal feita ou outro problema), o PM2 detecta e reinicia a aplicação automaticamente.
    - Isso assegura que o serviço esteja sempre em execução e disponível para o front-end ou qualquer outra aplicação que dependa do back-end.

**Implementação do PM2 no Projeto**

- No ambiente de produção, vamos executar o projeto usando o PM2.
- O PM2 cuidará de manter o projeto online, reiniciando-o sempre que necessário para garantir disponibilidade contínua.