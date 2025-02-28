const socialLinks = [
  {
    url: "./socials/f.png",
  },
  {
    url: "./socials/instagram.png",
  },
  {
    url: "./socials/linked_in.png",
  },
  {
    url: "./socials/twitter.png",
  },
];

import styled from "styled-components";

const SocialLinks = () => {
  return (
    <Wrapper>
      {socialLinks.map(({ url }, index) => {
        return (
          <img
            key={index}
            src={url}
            alt="icon"
          />
        );
      })}
    </Wrapper>
  );
};

const Wrapper= styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`
export default SocialLinks;
