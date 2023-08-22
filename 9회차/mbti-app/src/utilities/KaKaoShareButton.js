import React, { useEffect } from "react";
import { StButton } from "../StyledComponents";
import bbang from "../assets/bbang12.png";
const { Kakao } = window;

const KakaoShareButton = () => {
  const url = "https://gazero-mbti.netlify.app/";
  const resultUrl = window.location.href;

  useEffect(() => {
    Kakao.cleanup();
    Kakao.init(process.env.REACT_APP_KAKAO_API_KEY);
  }, []);

  const shareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "싸움유형테스트",
        description: "MBTI",
        imageUrl: bbang,
        link: {
          mobileWebUrl: url,
          webUrl: url,
        },
      },

      buttons: [
        {
          title: "나도참여",
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
      ],
    });
  };

  return (
    <>
      <StButton
        onClick={() => {
          shareKakao();
        }}
      >
        SHARE
      </StButton>
    </>
  );
};

export default KakaoShareButton;
