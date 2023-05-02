import styled, { css } from "styled-components";
import { primary, secondary, instagramColor, whatsappColor } from "@/lib/colors";

export const ButtonStyle = css`
  border: 0;
  padding: 5px 15px;
  border-radius: 5px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  svg {
    height: 16px;
    margin-right: 5px;
  }
  ${(props) =>
    props.block &&
    css`
      display: block;
      width: 100%;
    `}
  ${(props) =>
    props.white &&
    !props.outline &&
    css`
      background-color: #fff;
      color: #000;
    `}
  ${(props) =>
    props.white &&
    props.outline &&
    css`
      background-color: transparent;
      color: #fff;
      border: 1px solid #fff;
    `}
  ${(props) =>
    props.black &&
    !props.outline &&
    css`
      background-color: #000;
      color: #fff;
    `}
  ${(props) =>
    props.black &&
    props.outline &&
    css`
      background-color: transparent;
      color: #000;
      border: 1px solid #000;
    `}
  ${(props) =>
    props.primary &&
    !props.outline &&
    css`
      background-color: ${primary};
      border: 1px solid ${primary};
      color: #fff;
    `}
  ${(props) =>
    props.primary &&
    props.outline &&
    css`
      background-color: transparent;
      border: 1px solid ${primary};
      color: ${primary};
    `}
  ${(props) =>
    props.secondary &&
    !props.outline &&
    css`
      background-color: ${secondary};
      border: 1px solid ${secondary};
      color: #fff;
    `}
  ${(props) =>
    props.secondary &&
    props.outline &&
    css`
      background-color: transparent;
      border: 1px solid ${secondary};
      color: ${secondary};
    `}
  ${(props) =>
    props.instagram &&
    props.outline &&
    css`
      background-color: transparent;
      border: 1px solid ${instagramColor};
      color: ${instagramColor};
    `}
  ${(props) =>
      props.instagram &&
      !props.outline &&
      css`
        background-color: ${instagramColor};
        border: 1px solid ${instagramColor};
        color: #fff;
      `}
    ${(props) =>
      props.whatsapp &&
      props.outline &&
      css`
        background-color: transparent;
        border: 1px solid ${whatsappColor};
        color: ${whatsappColor};
      `}
    ${(props) =>
        props.whatsapp &&
        !props.outline &&
        css`
          background-color: ${whatsappColor};
          border: 1px solid ${whatsappColor};
          color: #fff;
        `}
  ${(props) =>
    props.size === "l" &&
    css`
      font-size: 1.2rem;
      padding: 10px 20px;
      svg {
        height: 20px;
      }
    `}
  ${(props) =>
    props.size === "small" &&
    css`
      padding: 5px 10px;
    `}
`;

const StyledButton = styled.button`
  ${ButtonStyle}
`;

export default function Button({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}
