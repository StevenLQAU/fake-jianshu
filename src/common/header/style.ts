import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  position: relative;
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  height: 56px;
  width: 100px;
`;

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
  padding-right: 70px;
  box-sizing: border-box;
`;

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0px 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696
  }
  &.active {
    color: #ea6f5a
  }
`;

export const SearchWrapper = styled.div`
  float:left;
  position: relative;
  .zoom {
    position: absolute;
    right: 4px;
    bottom: 4px;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    line-height: 30px;
    text-align: center;
    &.focused {
      background: #777;
      color: white;
    }
  }
`;


export const NavSearch = styled.input.attrs({
  placeholder: 'Search'
})`
  width: 200px;
  height: 38px;
  margin-top: 9px;
  margin-left: 20px;
  padding: 0px 35px 0 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  color: #666;
  &::place-holder {
    color: #999;
  }

  &.focused {
    width: 300px;
  }

  &.slide-enter {
      transition: all .2s ease-out;
    }
  &.slide-enter-active {
      width: 300px;
    }

  &.slide-exit {
      transition: all .2s ease-out;
    }
  &.slide-exit-active {
      width: 200px;
    }
`

export const SearchInfo = styled.div`
    position: absolute;
    left:0px;
    top: 56px;
    width: 300px;
    padding: 0px 20px;
    box-shadow: 0 0 8px rgba(0,0,0, .2);
    border-radius: 4px;
    background: #fff;

`;

export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 15px;
    color: #969696;
`;

export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  cursor: pointer;
  
  .spin {
    display: block;
    float:left;
    font-size: 12px;
    margin-right: 3px;
    transition: all .2s ease-in;
    transform-origin: center;
  }
`;

export const SearchInfoList = styled.div`
    overflow: hidden ;
`;

export const SearchInfoItem = styled.a`
  font-size: 12px;
  padding: 0px 5px;
  line-height:20px;
  border: 1px solid #ddd;
  color: #787878;
  border-radius:3px;
  display: block;
  float: left;
  margin-right: 10px;
  margin-bottom: 15px;
`;

export const Addition = styled.div`
  position: absolute;
  right:0;
  top: 0;
  height: 56px;
`;

export const Button = styled.div`
  float: right;
  line-height: 38px;
  border-radius: 19px;
  margin-top: 9px;
  border: 1px solid #ec6149;
  margin-right: 20px;
  padding: 0 20px;
  font-size: 14px;
  &.join {
    color: #ec6149;
  }

  &.writting {
    color: #fff;
    background: #ec6149;
    .iconfont {
      font-size: 14px;
    }
  }
`;

export const ShareButton = styled.div`
  height: 50px;
  width: 50px;
  position: fixed;
  bottom: 40px;
  right: 40px;
  z-index: 1040;
  border: 1px solid #dcdcdc;
  line-height: 50px;
  text-align: center;
  background: #fff;
  .iconfont{
    font-size: 26px;
    color: #333;
  }
`;


export const BackToTop = styled.div`
  cursor: pointer;
  height: 50px;
  width: 50px;
  position: fixed;
  bottom: 90px;
  right: 40px;
  z-index: 1040;
  border: 1px solid #dcdcdc;
  line-height: 50px;
  text-align: center;
  background: #fff;
  .iconfont{
    font-size: 26px;
    color: #333;
  }
`;