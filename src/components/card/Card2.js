import React from "react";
import styled, { css } from "styled-components";

const StyledCard = styled.div`
  position: relative;
  .cart-image {
    height: 400px;
    width: 100%;
    border-radius: 8px;
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: inherit;
    }
  }
  .cart-content {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 50%);
    background-color: white;
    z-index: 10;
    border-radius: 20px;
    padding: 20px;
    width: calc(100% - 36px);
  }
  .cart-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
  }
  .cart-user {
    display: flex;
    align-items: center;
    column-gap: 10px;
  }
  .user-avatar {
    height: 30px;
    width: 30px;
    border-radius: 100rem;
    object-fit: cover;
    flex-shrink: 0;
  }
  .cart-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .cart-title {
    font-size: 18px;
    font-weight: 500;
    color: ${(props) => props.theme.colors.blue};
`;
/* const StyledCard = styled.div
   position: relative;
 `; */

const CardImage = styled.div`
  height: 400px;
  width: 100%;
  border-radius: 8px;
`;

const CardImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`;

const CardContent = styled.div`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 50%);
  background-color: white;
  z-index: 10;
  border-radius: 20px;
  padding: 20px;
  width: calc(100% - 36px);
`;

const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const CardUser = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

const UserAvatar = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 100rem;
  object-fit: cover;
  flex-shrink: 0;
`;

const UserName = styled.span`
  font-weight: 300;
  font-size: 16px;
  color: #333;
`;

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  color: black;
`;

const CardAmount = styled.span`
  font-size: 18px;
  font-weight: bold;
  background: linear-gradient(
    86.88deg,
    #7d6aff 1.38%,
    #ffb86c 64.35%,
    #fc2872 119.91%
  );

  ${(props) =>
    props.secondary &&
    css`
      background: linear-gradient(86.88deg, #20e3b2, #2cccff);
    `}
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
`;

const CardMeta = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
`;

const Card2 = (props) => {
  return (
    <StyledCard secondary={props.secondary}>
      <div className="cart-image">
        <img
          src="https://cdn.dribbble.com/users/2400293/screenshots/20320748/media/0ce30d2aa1222c487426145c6d46b821.png?compress=1&resize=768x576&vertical=top"
          alt=""
        />
      </div>

      <div className="cart-content">
        <div className="cart-top">
          <div className="cart-user">
            <img
              className="user-avatar"
              src="https://cdn.dribbble.com/users/2400293/screenshots/20320748/media/0ce30d2aa1222c487426145c6d46b821.png?compress=1&resize=768x576&vertical=top"
              alt=""
            />
            <UserName>@zndrson</UserName>
          </div>
          <CardMeta className="">
            <img src="/icon-heart.svg" alt="" />
            <span>256</span>
          </CardMeta>
        </div>
        <footer className="cart-footer">
          <p className="cart-title">Cosmic Perspective</p>
          <CardAmount>12,000 PSL</CardAmount>
        </footer>
      </div>
    </StyledCard>
  );
};

export default Card2;
