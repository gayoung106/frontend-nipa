// 16개의 성향을 포함한 하나의 배열!

import ISTJ from "../assets/bbang10.png";
import INTJ from "../assets/bbang11.jpeg";
import ISFJ from "../assets/bbang16.png";
import INFJ from "../assets/bbang12.png";
import ISTP from "../assets/bbang06.gif";
import ISFP from "../assets/bbang04.gif";
import INFP from "../assets/bbang08.jpeg";
import INTP from "../assets/bbang07.gif";
import ESTP from "../assets/bbang03.gif";
import ESFP from "../assets/bbang13.png";
import ENFP from "../assets/bbang02.gif";
import ENTP from "../assets/bbang09.jpeg";
import ESTJ from "../assets/bbang01.gif";
import ESFJ from "../assets/bbang14.png";
import ENFJ from "../assets/bbang05.gif";
import ENTJ from "../assets/bbang15.jpeg";

export const resultcontent = [
  {
    type: "ISTJ",

    description: "상대방이 싸우다가 이 사람을 포기",
    keyword: "팩트폭행, 빅데이터, 따발총",
    imgSrc: ISTJ,
    skills: {
      skill1: "모든 말을 팩트로 구성하는 능력",
      skill2: "상대의 모든 과오를 기억하는 능력",
      skill3: "쉼표 없이 말할 수 있는 능력",
    },
  },
  {
    type: "ISFJ",

    description: "우느라 하고싶었던 말도 다 못한다(사실은 말이 너무 많은 탓)",
    keyword: "빅데이터, 따발총, 예상적중",
    imgSrc: ISFJ,
    skills: {
      skill1: "상대의 모든 과오를 기억하는 능력",
      skill2: "쉼표 없이 말할 수 있는 능력",
      skill3: "남 모르게 치밀한 전략을 세우는 능력",
    },
  },
  {
    type: "INFJ",
    description: "화가나도 티나지 않지만, 치말한 전략을 세우고 있음",
    keyword: "예상적중, 답정너, 아이건 좀",
    imgSrc: INFJ,
    skills: {
      skill1: "남 모르게 치밀한 전략을 세우는 능력",
      skill2: "알고보니 답이 정해져 있었던 능력",
      skill3: "심한 말에 브레이크가 없는 능력",
    },
  },
  {
    type: "INTJ",
    description: "답정너도 맞고, 마음속에 쌓아둠",
    keyword: "답정너, 도르마무, 훈화말씀",
    imgSrc: INTJ,
    skills: {
      skill1: "알고보니 답이 정해져 있었던 능력",
      skill2: "영원한 말돌리기로 탈진시키는 능력",
      skill3: "원리원칙을 끊임없이 나열하는 능력",
    },
  },
  {
    type: "ISTP",
    description: "계속 못알아 듣는 척 하다가, 상대방이 한 숨 쉬고 포기",
    keyword: "딴청피우기, 로봇감성, 무지개반사",
    imgSrc: ISTP,
    skills: {
      skill1: "피곤한 상황을 쉽게 회피하는 능력",
      skill2: "감정 싸움에 면역이 되는 능력",
      skill3: "짧게 받아쳐 김빠지게 만드는 능력",
    },
  },
  {
    type: "ISFP",
    description:
      "겉으로 온화해 보이지만 속으로 참고있는 중, 한 번 화가 터지면 큰일남",
    keyword: "이불킥, 선즙필승, 딴청피우기",
    imgSrc: ISFP,
    skills: {
      skill1: "자다가 이불을 잘 차는 능력",
      skill2: "센 말을 하면 눈물이 나는 능력",
      skill3: "피곤한 상황을 쉽게 회피하는 능력",
    },
  },
  {
    type: "INFP",
    description: "갑자기 목소리가 떨림, 화내다가 울어버리기 수십번",
    keyword: "선즙필승, 이불킥, 답정너",

    imgSrc: INFP,
    skills: {
      skill1: "센 말을 하면 눈물이 나는 능력",
      skill2: "자다가 이불을 잘 차는 능력",
      skill3: "알고보니 답이 정해져 있었던 능력",
    },
  },
  {
    type: "INTP",

    description: "갑자기 분위기 싸해지게 만들기 1등",
    keyword: "로봇감성, 팩트폭행, 훈화말씀",
    imgSrc: INTP,

    skills: {
      skill1: "감정 싸움에 면역이 되는 능력",
      skill2: "모든 말을 팩트로 구성하는 능력",
      skill3: "원리원칙을 끊임없이 나열하는 능력",
    },
  },
  {
    type: "ESTP",
    description: "이왕 싸울꺼면, 진흙탕이다",
    keyword: "아 이건 좀, 사자후, 로봇감성",
    imgSrc: ESTP,
    skills: {
      skill1: "심한 말에 브레이크가 없는 능력",
      skill2: "흥분하면 데시벨이 높아지는 능력",
      skill3: "감정 싸움에 면역이 되는 능력",
    },
  },
  {
    type: "ESFP",
    description: "미쳐서 날뜀",
    keyword: "사자후, 아 이건 좀, 의리",
    imgSrc: ESFP,
    skills: {
      skill1: "흥분하면 데시벨이 높아지는 능력",
      skill2: "심한 말에 브레이크가 없는 능력",
      skill3: "뭐든지 의리로 감싸주는 능력",
    },
  },
  {
    type: "ENFP",
    description: "돌려 말하다가 상대가 못알아 들으면 목소리가 커진다(극대노)",
    keyword: "도르마무, 무지개반사, 따발총",
    imgSrc: ENFP,
    skills: {
      skill1: "영원한 말돌리기로 탈진시키는 능력",
      skill2: "짧게 받아쳐 김빠지게 하는 능력",
      skill3: "쉼표 없이 말할 수 있는 능력",
    },
  },
  {
    type: "ENTP",
    description: "물음표 살인마에 감정을 주체못하고 화낸다",
    keyword: "무지개반사, 아 이건 좀, 팩트폭행",
    imgSrc: ENTP,
    skills: {
      skill1: "짧게 받아쳐 김빠지게 만드는 능력",
      skill2: "심한 말에 브레이크가 없는 능력",
      skill3: "모든 말을 팩트로 구성하는 능력",
    },
  },
  {
    type: "ESTJ",
    description:
      "화가 나도 톤이 같다. 화가난게 아니라 아닌건 아니라고 얘기하는 중",
    keyword: "훈화말씀, 팩트폭행, 빅데이터",
    imgSrc: ESTJ,
    skills: {
      skill1: "원리원칙을 끊임없이 나열하는 능력",
      skill2: "모든 말을 팩트로 구성하는 능력",
      skill3: "상대의 모든 과오를 기억하는 능력",
    },
  },
  {
    type: "ESFJ",
    description: "앞에선 조용히 배려해주면 조곤조곤 얘기하지만, 뒤에가서 욕함",
    keyword: "눈치주기, 의리, 딴청피우기",
    imgSrc: ESFJ,
    skills: {
      skill1: "제 3자의 시선을 이용하는 능력",
      skill2: "뭐든지 의리로 감싸주는 능력",
      skill3: "피곤한 상황을 쉽게 회피하는 능력",
    },
  },
  {
    type: "ENFJ",
    description: "적도 아군으로 만들긴 하지만 나중에 할말이 떠올라 이불킥",
    keyword: "따발총, 눈치주기, 팩트폭행",
    imgSrc: ENFJ,
    skills: {
      skill1: "쉼표 없이 말할 수 있는 능력",
      skill2: "제 3자의 시선을 이용하는 능력",
      skill3: "모든 말을 팩트로 구성하는 능력",
    },
  },
  {
    type: "ENTJ",
    description: "흔들리지 않지만 표정을 못감춘다",
    keyword: "의리, 훈화말씀, 예상적중",
    imgSrc: ENTJ,
    skills: {
      skill1: "뭐든지 의리로 감싸주는 능력",
      skill2: "원리원칙을 끊임없이 나열하는 능력",
      skill3: "남 모르게 치밀한 전략을 세우는 능력",
    },
  },
];
