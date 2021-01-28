
## Деплой
Для создания новой сид фразы при деплое из терминала:
```bash
yarn run mnemonic
```


### Деплой Remix
  - Переключить MetaMask в нужную сеть;
  - Пополнить баланс;
  - Открыть сайт [http://remix.ethereum.org/](http://remix.ethereum.org/);
  - Создать в Remix файл `FenumCrowdsale.sol` и скопировать в него содержимое файла `contracts/FenumCrowdsale.sol`;
  - Компиляция:
    - `COMPILER`: `0.7.6`;
    - `Enable optimization`: `true`;
    - `runs`: с `200` на `999999`;
    - Нажать кнопку `Compile FenumCrowdsale.sol`.
  - Деплой:
    - `ENVIRONMENT`: `Injected Web3` (появится адрес и баланс из `MetaMask`);
    - `CONTRACT`: `FenumCrowdsale - browser/FenumCrowdsale.sol`;
    - Указать параметры:
      - rate - сколько за 1 wei, условно 1= за 1ETH получает 1FNM, если 1000, то за 1ETH получает 1000FNM
      - purchaseLimit - максимальное количество токенов на один адрес, помним про децималс
      - wallet - адрес FenumDevPool
      - token - адрес FenumToken
    - Нажать кнопку `Deploy`.
  - Верификация контракта на `Etherscan`:
    - Открыть контракт во вкладке `Contract`;
    - Нажать `Verify and Publish`;
    - `Please select Compiler Type`: `Solidity (Single file)`;
    - `Please select Compiler Version`: `v0.7.6`;
    - `Please select Open Source License Type`: `MIT License (MIT)`;
    - `Continue`;
    - `Optimization`: `Yes`;
    - Вставить код контракта `FenumCrowdsale.sol` в поле `Enter the Solidity Contract Code below *`;
    - Открыть `(Runs, EvmVersion & License Type settings)`;
    - `Runs`: `999999`;
    - Нажать `Verify and Publish`.
  - Загрузить токены в контракт для продажи
    - сделать апрув в FenumToken на адрес FenumCrowdsale c количеством токенов и вызвать tokensDeposit 
  - Изменить овнера на FenumDevPool - вызвать transferOwnership у контракта FenumCrowdsale с указанием адреса FenumDevPool


### Деплой Development
В отдельном терминале запустить `ganache-cli`:
```bash
yarn run ganache-cli
```

После этого деплой:
```bash
yarn run deploy development
```


### Деплой Mainnet
```bash
yarn run deploy mainnet
yarn run verify mainnet FenumCrowdsale
```


### Деплой Ropsten
```bash
yarn run deploy ropsten
yarn run verify ropsten FenumCrowdsale
```


### Деплой Kovan
```bash
yarn run deploy kovan
yarn run verify kovan FenumCrowdsale
```


### Деплой Rinkeby
```bash
yarn run deploy rinkeby
yarn run verify rinkeby FenumCrowdsale
```


### Деплой Goerli
```bash
yarn run deploy goerli
yarn run verify goerli FenumCrowdsale
```


### Публикация в NPM
После деплоя нужно опубликовать в [NPM](https://www.npmjs.com/).
```bash
npm publish
# или
yarn publish
```
