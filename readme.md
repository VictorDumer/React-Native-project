
---

# 📱 React Native Login Screen - Réplica do Design

> Projeto simples replicando uma tela de login, feito com React Native para praticar estilos, flexbox, manipulação de imagens locais e animações com Moti.

## 🚀 Funcionalidades

* Layout responsivo e centralizado
* Botões estilizados com ícones e texto alinhados
* Uso correto de imagens locais via `require()`
* Feedback simples com alert ao clicar no botão principal
* **Animações suaves com Moti** para transições de componentes e elementos interativos

---

## 💻 Tecnologias

* React Native
* JavaScript (ES6)
* Moti (para animações)
* React Native CLI / Expo Go

---

## ⚙️ Como rodar

```bash
git clone https://github.com/VictorDumer/Review-React-Native-Design-Challenge.git
cd Review-React-Native-Design-Challenge
npm install
npm start
```

Abra o app no emulador ou dispositivo físico.

---

## 📷 Comparação do Design

> Comparação de como ficou o design comparado com o Modelo

| Imagem Modelo                                                                                                                      | Imagem de como ficou                                                                                                               |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| <img width="346" height="733" alt="image" src="https://github.com/user-attachments/assets/59f91d22-0d7f-41ae-92f4-fe4891397424" /> | <img width="346" height="733" alt="image" src="https://github.com/user-attachments/assets/767a4edb-7956-439b-9d01-b5cae73c5f30" /> |

---

## 🎨 Exemplos de animação com Moti

```javascript
import { MotiView } from 'moti';
import { View, Text, TouchableOpacity } from 'react-native';

export default function AnimatedButton() {
  return (
    <MotiView
      from={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ type: 'timing', duration: 500 }}
    >
      <TouchableOpacity onPress={() => alert('Você foi avisado')}>
        <Text>Botão Animado</Text>
      </TouchableOpacity>
    </MotiView>
  );
}
```

---

## 🤝 Contribuição

Projeto de aprendizado pessoal. Pull requests e sugestões são bem-vindas!

---

## 📞 Contato

Victor Dumer — [Email Para contato](mailto:victorgabrieldummersouza@gmail.com)|
[GitHub](https://github.com/VictorDumer) |

---
