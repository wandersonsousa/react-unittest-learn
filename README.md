# Learning react unit testing

1 - Jest surgiu como "unificador" de várias libs que antes eram necessárias para criar ambientes de test, mocka, etc

2 - Jest não foi feito pra realizar testes em react, daí a lib react-testing-library para testar componentes, e jest-environment-jsdom serve pra adicionar condicoes de dom

3 - pelo que pude perceber teste unitário faz muito mais sentido em react, quando usado com redux, ou outro statemanagment que mantém a lógica longe do render 