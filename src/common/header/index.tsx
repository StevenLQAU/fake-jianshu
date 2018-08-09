import * as React from 'react'
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { Addition, Button, HeaderWrapper, Logo, Nav, NavItem, NavSearch, SearchInfo, SearchInfoItem, SearchInfoList, SearchInfoSwitch, SearchInfoTitle, SearchWrapper } from './style'

interface IHeaderProps {
  focused?: boolean;
  handleInputFocus: () => {};
  handleInputBlur: () => {};
}



class Header extends React.Component<IHeaderProps> {
  public getListArea = (show?: boolean) => {
    if (show) {
      return (
        <SearchInfo>
          <SearchInfoTitle>
            Popular Search
              <SearchInfoSwitch>Change</SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            <SearchInfoItem>Education</SearchInfoItem>
            <SearchInfoItem>Education</SearchInfoItem>
            <SearchInfoItem>Education</SearchInfoItem>
            <SearchInfoItem>Education</SearchInfoItem>
            <SearchInfoItem>Education</SearchInfoItem>
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null
    }
  }

  public render() {
    return (
      <HeaderWrapper>
        <Logo>
          HAHA
        </Logo>
        <Nav>
          <NavItem className='left active'>Index</NavItem>
          <NavItem className='left'>Download App</NavItem>
          <NavItem className='right'>Login</NavItem>
          <NavItem className='right'><i className="iconfont">&#xe636;</i></NavItem>
          <SearchWrapper>
            <CSSTransition
              timeout={200}
              in={this.props.focused}
              classNames="slide"
            >
              <NavSearch
                className={this.props.focused ? 'focused' : ''}
                onFocus={this.props.handleInputFocus}
                onBlur={this.props.handleInputBlur}
              />
            </CSSTransition>
            <i className={this.props.focused ? 'focused iconfont' : 'iconfont'}>&#xe623;</i>
            {this.getListArea(this.props.focused)}
          </SearchWrapper>
        </Nav>
        <Addition >
          <Button className='writting'><i className="iconfont">&#xe608;</i>Create Article</Button>
          <Button className='join'>Join</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state: any) => {
  return {
    focused: state.getIn(['header', 'focused'])
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    handleInputFocus() {
      const action = actionCreators.getFocusSearch();
      dispatch(action);
    },
    handleInputBlur() {
      const action = actionCreators.getBlurSearch();
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header as any);